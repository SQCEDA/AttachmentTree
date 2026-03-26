---
name: attachment-tree-drawing
description: >-
  Generate AttachmentTree JSON for 2D geometry layout. The AttachmentTree is a
  declarative format that builds complex 2D shapes by recursively attaching
  bounding boxes (rectangles, triangles, arcs, quadrilaterals) at corners.
  Input is a natural language shape description, output is valid AttachmentTree
  JSON. Use ONLY when the user explicitly mentions "AttachmentTree", "附着树",
  or "attachment tree". Do NOT use for general drawing or shape requests
  unless these terms appear.
---

# AttachmentTree JSON Generation

Generate AttachmentTree JSON from geometric descriptions. The "attachment tree"
is a declarative format that builds complex 2D shapes by recursively attaching
bounding boxes at corners of other bounding boxes.

## Core Concept

Imagine placing a rectangle on a plane. From any of its 4 corners, you can
"attach" another rectangle (or triangle, arc, etc.). From that second shape's
corners, attach more shapes — forming a tree. The walker traverses this tree,
computing absolute positions from relative attachments.

**Coordinate system**: x increases rightward, y increases upward. Origin is (0,0).

## JSON Root Structure

```json
{
  "type": "attachmentTree",
  "define": [ ...variables... ],
  "structure": [ ...structures... ]
}
```

## Side Convention (CRITICAL)

Sides are 2-char strings: first char = vertical (`u`/`d`), second = horizontal (`l`/`r`).

Four values: `"ul"` (upper-left), `"ur"` (upper-right), `"dl"` (lower-left), `"dr"` (lower-right).

### Structure side — "which direction does the box grow?"

The `side` of a structure controls how its bounding box extends FROM the
current position:

| side | current pos is at | box grows toward |
|------|-------------------|------------------|
| `ur` | lower-left corner | upper-right ↗ |
| `ul` | lower-right corner| upper-left ↖ |
| `dr` | upper-left corner | lower-right ↘ |
| `dl` | upper-right corner| lower-left ↙ |

Formula: `x1 = xx - width` if `l`, else `x1 = xx`; `y1 = yy - height` if `d`, else `y1 = yy`.

### Attachment side — "which corner to jump to?"

The `side` of an attachment controls which corner of the **parent** bounding
box becomes the new current position:

| side | jump to |
|------|---------|
| `ul` | (x1, y2) — upper-left |
| `ur` | (x2, y2) — upper-right |
| `dl` | (x1, y1) — lower-left |
| `dr` | (x2, y1) — lower-right |

### Practical rule of thumb

To chain structures in a direction, use the SAME side for both the structure
and the attachment leading to the next structure. Example: to build rightward,
use structure `side="ur"` and attachment `side="ur"`.

To turn a corner: change the side. E.g., going right then turning up:
structure `side="ur"` → attachment `side="ur"` → structure `side="ur"` (now
building upward if width < height, or use a zero-width spacer + new attachment).

## Variable Definitions

```json
{"type": "variable", "id": "armlen", "value": 50000, "description": ""}
{"type": "innervariable", "id": "total", "value": "armlen*2"}
{"type": "variablenone"}
```

- `variable`: user-overridable parameter (with default value)
- `innervariable`: computed from other variables (expression string)
- `variablenone`: placeholder / no-op

Variables can be used anywhere a number is expected (width, height, shape params).
Expressions support `+`, `-`, `*`, `/` and variable references.

## Structure Types

### structure — rectangle bounding box with a shape

```json
{
  "type": "structure",
  "side": "ur",
  "collection": "1",
  "width": 50000,
  "height": 30000,
  "shape": { "type": "rectangle" },
  "attachment": [ ... ]
}
```

### structurefrompts — polygon from explicit points

```json
{
  "type": "structurefrompts",
  "collection": "1",
  "scale": 1000,
  "absolute": true,
  "points": "0 0 100 0 200 200",
  "attachment": [ ... ]
}
```

- `scale`: multiplier for point coordinates
- `absolute`: if true, all points are relative to current pos; if false, each
  point is relative to the previous point (turtle mode)
- `points`: space or comma separated x y pairs

### structurenone — placeholder

```json
{"type": "structurenone"}
```

## Shape Types

### rectangle
```json
{"type": "rectangle"}
```
Fills the entire bounding box.

### triangle
```json
{"type": "triangle", "side": "dr"}
```
A right triangle occupying 3 of the 4 corners. The `side` specifies which
corner is the RIGHT-ANGLE vertex (the "missing" corner).

| side | right-angle at | triangle vertices |
|------|---------------|-------------------|
| `ul` | upper-left | (x1,y1), (x2,y1), (x2,y2) |
| `ur` | upper-right | (x1,y1), (x1,y2), (x2,y1) |
| `dr` | lower-right | (x1,y1), (x1,y2), (x2,y2) |
| `dl` | lower-left | (x1,y2), (x2,y2), (x2,y1) |

### arc
```json
{"type": "arc", "side": "dl"}
```
A quarter-circle-like arc filling the bounding box. The `side` specifies
which corner the arc's curve touches (the convex corner).

### quadrilateral
```json
{"type": "quadrilateral", "ul": 20000, "ur": 30000, "dr": 40000, "dl": 50000}
```
A deformed rectangle. Each parameter is the offset at the named corner:
- `ul`: top-left point shifts RIGHT by this amount
- `ur`: top-right point shifts DOWN by this amount
- `dr`: bottom-right point shifts LEFT by this amount
- `dl`: bottom-left point shifts UP by this amount

All zeros = rectangle. Vertices: (x1+ul, y2), (x2, y2-ur), (x2-dr, y1), (x1, y1+dl).

### quadrilateraldagger
```json
{"type": "quadrilateraldagger", "ur": 20000, "dr": 30000, "dl": 40000, "ul": 50000}
```
The "dagger" variant. Vertices: (x2-ur, y2), (x2, y1+dr), (x1+dl, y1), (x1, y2-ul).

### brush (special — marks an attachment point, not a visible shape)
```json
{"type": "brush", "brushid": "b1", "angle": 90, "widout": 8000, "widin": 4000}
```
No geometry is drawn. Instead, stores a named point for external use (e.g.,
connecting a waveguide). Typically use `width: 0, height: 0`.

## Attachment Node

```json
{"type": "attachment", "side": "ur", "structure": [ ... ]}
{"type": "attachmentnone"}
```

An attachment jumps to a corner of the parent box, then places its child structures sequentially.

**Key**: Multiple structures inside one attachment share the same starting
position but each gets its own bounding box scope. After processing a
structure (and its sub-tree), the bounding box resets, but the current
position stays at the attachment point.

## Collection Convention

`collection` is a string (typically a number like `"0"`, `"1"`, `"2"` ...).
It controls which layer/group the shape belongs to.

**Boolean operation convention** (used by `shape()` method):
Every 4 collections form a group: `((1-2)-(3-4)) + ((5-6)-(7-8)) + ...`
- Collection "1": add geometry
- Collection "2": subtract from "1"
- Collection "3": subtract from result (unless "4" exists)
- Collection "4": add back into "3" before subtracting

Use collection "0" for invisible spacers / positioning aids.

## Units

Default internal unit is **nanometers** (1000 = 1µm). All width/height/coordinate
values are in nm unless noted. The renderer converts to µm via `dbu=0.001`.

## Workflow

1. Identify the geometric components from the user's description
2. Choose a coordinate origin and plan the tree structure
3. Define variables for all parametric dimensions
4. Build the tree top-down: start with the first shape, attach children
5. Assign collections for boolean layer operations
6. Output valid JSON

## Common Patterns

For detailed examples and patterns, see [examples.md](examples.md).

### Straight chain (rightward)
Structure side=ur → attachment side=ur → structure side=ur → ...

### L-turn (right then up)
Structure side=ur (horizontal bar) → attachment side=ur → structure side=ur (vertical bar, narrow width, tall height)

### Symmetric pair around a center
Use a zero-dimension spacer at center, then two attachments (ur and dr) with mirrored structures.

### Rounded corners (arc subtraction)
Place arc shapes in a "subtraction" collection at each corner of a rectangle to create rounded corners.

### T-junction
Chain going right, with an attachment side=ur at the branch point that starts a new chain going up.

## Output Format

Output MUST be valid JSON matching the schema above. Always include `"type": "attachmentTree"` at root.
Every structure must have an `"attachment"` array (use `[{"type": "attachmentnone"}]` if no children).
