# AttachmentTree Examples

## Example 1: Simple Rectangle

A single 100µm × 50µm rectangle.

```json
{
  "type": "attachmentTree",
  "define": [{"type": "variablenone"}],
  "structure": [
    {
      "type": "structure",
      "side": "ur",
      "collection": "1",
      "width": 100000,
      "height": 50000,
      "shape": {"type": "rectangle"},
      "attachment": [{"type": "attachmentnone"}]
    }
  ]
}
```

## Example 2: L-Shape with Variables

An L-shaped structure: horizontal bar + vertical bar, parameterized.

```
    ┌──┐
    │  │ bar_h
    │  │
┌───┼──┘
│   bar_l
└──────┘
```

```json
{
  "type": "attachmentTree",
  "define": [
    {"type": "variable", "id": "bar_l", "value": 80000, "description": "horizontal bar length"},
    {"type": "variable", "id": "bar_h", "value": 60000, "description": "vertical bar height"},
    {"type": "variable", "id": "w", "value": 10000, "description": "bar width"}
  ],
  "structure": [
    {
      "type": "structure",
      "side": "ur",
      "collection": "1",
      "width": "bar_l",
      "height": "w",
      "shape": {"type": "rectangle"},
      "attachment": [
        {
          "type": "attachment",
          "side": "ur",
          "structure": [
            {
              "type": "structure",
              "side": "ur",
              "collection": "1",
              "width": "w",
              "height": "bar_h",
              "shape": {"type": "rectangle"},
              "attachment": [{"type": "attachmentnone"}]
            }
          ]
        }
      ]
    }
  ]
}
```

Key: The horizontal bar (side=ur) places box at (0,0)→(bar_l, w).
Attachment side=ur jumps to (bar_l, w) = upper-right corner.
The vertical bar (side=ur) extends from there: (bar_l, w)→(bar_l+w, w+bar_h).

## Example 3: Symmetric Cross / Plus Sign

A plus sign: 1 center square (w × w) + 4 rectangular arms (w × arm).

```
        ┌───┐
        │ ↑ │ arm
   ┌────┼───┼────┐
   │ ←  │ w │  → │
   └────┼───┼────┘
        │ ↓ │
        └───┘
```

Strategy: place the center square first, then from its 4 corners attach the
4 arms. Each arm extends outward from its respective corner.

```json
{
  "type": "attachmentTree",
  "define": [
    {"type": "variable", "id": "arm", "value": 40000, "description": "arm length"},
    {"type": "variable", "id": "w", "value": 20000, "description": "bar width"}
  ],
  "structure": [
    {
      "type": "structure",
      "side": "ur",
      "collection": "1",
      "width": "w",
      "height": "w",
      "shape": {"type": "rectangle"},
      "attachment": [
        {
          "type": "attachment",
          "side": "ur",
          "structure": [
            {
              "type": "structure",
              "side": "ul",
              "collection": "1",
              "width": "w",
              "height": "arm",
              "shape": {"type": "rectangle"},
              "attachment": [{"type": "attachmentnone"}]
            }
          ]
        },
        {
          "type": "attachment",
          "side": "dr",
          "structure": [
            {
              "type": "structure",
              "side": "ur",
              "collection": "1",
              "width": "arm",
              "height": "w",
              "shape": {"type": "rectangle"},
              "attachment": [{"type": "attachmentnone"}]
            }
          ]
        },
        {
          "type": "attachment",
          "side": "dl",
          "structure": [
            {
              "type": "structure",
              "side": "dr",
              "collection": "1",
              "width": "w",
              "height": "arm",
              "shape": {"type": "rectangle"},
              "attachment": [{"type": "attachmentnone"}]
            }
          ]
        },
        {
          "type": "attachment",
          "side": "ul",
          "structure": [
            {
              "type": "structure",
              "side": "dl",
              "collection": "1",
              "width": "arm",
              "height": "w",
              "shape": {"type": "rectangle"},
              "attachment": [{"type": "attachmentnone"}]
            }
          ]
        }
      ]
    }
  ]
}
```

Coordinate trace (with w=20000, arm=40000):
- **Center**: side=ur, w×w → box (0, 0)→(w, w)
- **Top arm**: attach ur→(w,w), struct side=ul, w×arm → (0, w)→(w, w+arm)
- **Right arm**: attach dr→(w,0), struct side=ur, arm×w → (w, 0)→(w+arm, w)
- **Bottom arm**: attach dl→(0,0), struct side=dr, w×arm → (0, -arm)→(w, 0)
- **Left arm**: attach ul→(0,w), struct side=dl, arm×w → (-arm, 0)→(0, w)

5 rectangles total, forming a plus/cross shape.

## Example 4: Tapered Arm with Triangles

A horizontal bar with triangular tapers (like a CPW coupler arm):

```
  △─────────────────△
  │  rectangle bar  │
  ▽─────────────────▽
```

```json
{
  "type": "attachmentTree",
  "define": [
    {"type": "variable", "id": "widin", "value": 4000, "description": ""},
    {"type": "variable", "id": "arml", "value": 50000, "description": ""},
    {"type": "variable", "id": "armh", "value": 30000, "description": ""},
    {"type": "innervariable", "id": "widin2", "value": "widin/2"},
    {"type": "innervariable", "id": "total_h", "value": "widin+armh*2"}
  ],
  "structure": [
    {
      "type": "structure",
      "side": "ul",
      "collection": "0",
      "width": 0,
      "height": "widin2",
      "shape": {"type": "rectangle"},
      "attachment": [
        {
          "type": "attachment",
          "side": "ur",
          "structure": [
            {
              "type": "structure",
              "side": "ur",
              "collection": "1",
              "width": "arml",
              "height": "armh",
              "shape": {"type": "triangle", "side": "dr"},
              "attachment": [{"type": "attachmentnone"}]
            },
            {
              "type": "structure",
              "side": "dr",
              "collection": "1",
              "width": "arml",
              "height": "widin",
              "shape": {"type": "rectangle"},
              "attachment": [
                {
                  "type": "attachment",
                  "side": "dl",
                  "structure": [
                    {
                      "type": "structure",
                      "side": "dr",
                      "collection": "1",
                      "width": "arml",
                      "height": "armh",
                      "shape": {"type": "triangle", "side": "ur"},
                      "attachment": [
                        {
                          "type": "attachment",
                          "side": "dr",
                          "structure": [
                            {
                              "type": "structure",
                              "side": "ur",
                              "collection": "1",
                              "width": 60000,
                              "height": "total_h",
                              "shape": {"type": "rectangle"},
                              "attachment": [{"type": "attachmentnone"}]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

Pattern explained:
1. Zero-width spacer at origin to center vertically on the inner conductor width
2. From upper-right: upper triangle taper (triangle side=dr → right angle at lower-right)
3. Same attachment: central rectangle bar (side=dr, grows down-right from same start)
4. From bar's lower-left: lower triangle taper (triangle side=ur → right angle at upper-right)
5. From taper's lower-right: horizontal continuation rectangle

## Example 5: Rectangle with Rounded Corners (Boolean Subtraction)

Use arcs in a subtraction collection to round the corners of a rectangle.

```json
{
  "type": "attachmentTree",
  "define": [
    {"type": "variable", "id": "W", "value": 200000, "description": ""},
    {"type": "variable", "id": "H", "value": 100000, "description": ""},
    {"type": "variable", "id": "r", "value": 15000, "description": "corner radius"}
  ],
  "structure": [
    {
      "type": "structure",
      "side": "ur",
      "collection": "1",
      "width": "W",
      "height": "H",
      "shape": {"type": "rectangle"},
      "attachment": [
        {
          "type": "attachment",
          "side": "ul",
          "structure": [
            {
              "type": "structure",
              "side": "dr",
              "collection": "5",
              "width": "r",
              "height": "r",
              "shape": {"type": "rectangle"},
              "attachment": [{"type": "attachmentnone"}]
            },
            {
              "type": "structure",
              "side": "dr",
              "collection": "6",
              "width": "r",
              "height": "r",
              "shape": {"type": "arc", "side": "dr"},
              "attachment": [{"type": "attachmentnone"}]
            }
          ]
        },
        {
          "type": "attachment",
          "side": "ur",
          "structure": [
            {
              "type": "structure",
              "side": "dl",
              "collection": "5",
              "width": "r",
              "height": "r",
              "shape": {"type": "rectangle"},
              "attachment": [{"type": "attachmentnone"}]
            },
            {
              "type": "structure",
              "side": "dl",
              "collection": "6",
              "width": "r",
              "height": "r",
              "shape": {"type": "arc", "side": "dl"},
              "attachment": [{"type": "attachmentnone"}]
            }
          ]
        },
        {
          "type": "attachment",
          "side": "dr",
          "structure": [
            {
              "type": "structure",
              "side": "ul",
              "collection": "5",
              "width": "r",
              "height": "r",
              "shape": {"type": "rectangle"},
              "attachment": [{"type": "attachmentnone"}]
            },
            {
              "type": "structure",
              "side": "ul",
              "collection": "6",
              "width": "r",
              "height": "r",
              "shape": {"type": "arc", "side": "ul"},
              "attachment": [{"type": "attachmentnone"}]
            }
          ]
        },
        {
          "type": "attachment",
          "side": "dl",
          "structure": [
            {
              "type": "structure",
              "side": "ur",
              "collection": "5",
              "width": "r",
              "height": "r",
              "shape": {"type": "rectangle"},
              "attachment": [{"type": "attachmentnone"}]
            },
            {
              "type": "structure",
              "side": "ur",
              "collection": "6",
              "width": "r",
              "height": "r",
              "shape": {"type": "arc", "side": "ur"},
              "attachment": [{"type": "attachmentnone"}]
            }
          ]
        }
      ]
    }
  ]
}
```

Boolean logic: `(collection5 - collection6)` gives the corner "waste" area.
Then `(collection1 - collection2) - (collection5 - collection6)` is wrong
layout since 1-4 not 5-8 pair with 1.

Correct approach: put the rectangle in collection "1", corner rectangles in
"5", arcs in "6". Then `shape()` computes: `(1-2)-(3-4) + (5-6)-(7-8)`.
Since collections 2,3,4 are empty, group1 = collection "1" full rect.
Group2 = `(5-6)` = corner squares minus arcs = the corner waste.
But groups are ADDED not subtracted from each other in the convention.

**Correct for single-group subtraction**: put rect in "1", corner rects in "2",
corner arcs in "3". Then: `(1-2)-(3-4)` → `rect - corner_rects - corner_arcs`...
that's also wrong.

**Simplest correct approach**: use `to_cell()` to get raw collections on
different layers, then do boolean externally. OR, structure it as:
- Collection "1": the main rectangle
- Collection "2": corner squares (to subtract)
- Collection "3": corner arcs (to add back)
- Collection "4": empty
- Result: `(1-2) - (3-4)` = `(rect - squares) - arcs` ... still wrong.

**Actually correct**: The convention is `((1-2)-(3-4))`.
- "1" = main rect + arcs → the keepers
- "2" = corner squares → to subtract

So: put main rect in "1", arcs ALSO in "1", corner squares in "2".
Result: `(1-2)` = `(rect ∪ arcs) - squares` = rect with rounded corners. ✓

Revised simpler JSON:

```json
{
  "type": "attachmentTree",
  "define": [
    {"type": "variable", "id": "W", "value": 200000, "description": ""},
    {"type": "variable", "id": "H", "value": 100000, "description": ""},
    {"type": "variable", "id": "r", "value": 15000, "description": "corner radius"}
  ],
  "structure": [
    {
      "type": "structure",
      "side": "ur",
      "collection": "1",
      "width": "W",
      "height": "H",
      "shape": {"type": "rectangle"},
      "attachment": [
        {
          "type": "attachment",
          "side": "ul",
          "structure": [
            {
              "type": "structure",
              "side": "dr",
              "collection": "2",
              "width": "r",
              "height": "r",
              "shape": {"type": "rectangle"},
              "attachment": [{"type": "attachmentnone"}]
            },
            {
              "type": "structure",
              "side": "dr",
              "collection": "1",
              "width": "r",
              "height": "r",
              "shape": {"type": "arc", "side": "dr"},
              "attachment": [{"type": "attachmentnone"}]
            }
          ]
        },
        {
          "type": "attachment",
          "side": "ur",
          "structure": [
            {
              "type": "structure",
              "side": "dl",
              "collection": "2",
              "width": "r",
              "height": "r",
              "shape": {"type": "rectangle"},
              "attachment": [{"type": "attachmentnone"}]
            },
            {
              "type": "structure",
              "side": "dl",
              "collection": "1",
              "width": "r",
              "height": "r",
              "shape": {"type": "arc", "side": "dl"},
              "attachment": [{"type": "attachmentnone"}]
            }
          ]
        },
        {
          "type": "attachment",
          "side": "dr",
          "structure": [
            {
              "type": "structure",
              "side": "ul",
              "collection": "2",
              "width": "r",
              "height": "r",
              "shape": {"type": "rectangle"},
              "attachment": [{"type": "attachmentnone"}]
            },
            {
              "type": "structure",
              "side": "ul",
              "collection": "1",
              "width": "r",
              "height": "r",
              "shape": {"type": "arc", "side": "ul"},
              "attachment": [{"type": "attachmentnone"}]
            }
          ]
        },
        {
          "type": "attachment",
          "side": "dl",
          "structure": [
            {
              "type": "structure",
              "side": "ur",
              "collection": "2",
              "width": "r",
              "height": "r",
              "shape": {"type": "rectangle"},
              "attachment": [{"type": "attachmentnone"}]
            },
            {
              "type": "structure",
              "side": "ur",
              "collection": "1",
              "width": "r",
              "height": "r",
              "shape": {"type": "arc", "side": "ur"},
              "attachment": [{"type": "attachmentnone"}]
            }
          ]
        }
      ]
    }
  ]
}
```

Pattern per corner: at each corner, place a square (collection "2") and an
arc (collection "1") in the same bounding box. The arc covers the rounded
part (added to main shape), the square covers the full corner (subtracted).
Result: `(1-2)` = rounded rectangle.

The key insight for each corner:
- **ul corner**: attachment side=ul, structures side=dr (grow into the corner)
  - arc side=dr (curve touches the lower-right = inner part)
- **ur corner**: attachment side=ur, structures side=dl, arc side=dl
- **dr corner**: attachment side=dr, structures side=ul, arc side=ul
- **dl corner**: attachment side=dl, structures side=ur, arc side=ur

Rule: at each corner, **attachment side = structure side's opposite = arc side**.

## Example 6: structurefrompts (Custom Polygon)

A custom polygon and a turtle-mode polygon attached at its bounding box corner.

```json
{
  "type": "attachmentTree",
  "define": [{"type": "variablenone"}],
  "structure": [
    {
      "type": "structurefrompts",
      "collection": "1",
      "scale": 1000,
      "absolute": true,
      "points": "0 0 100 0 180 200",
      "attachment": [
        {
          "type": "attachment",
          "side": "ur",
          "structure": [
            {
              "type": "structurefrompts",
              "collection": "1",
              "scale": 1000,
              "absolute": false,
              "points": "0 0 0 -100 -60 -100",
              "attachment": [{"type": "attachmentnone"}]
            }
          ]
        }
      ]
    }
  ]
}
```

- `absolute: true`: each point is `(xx + scale*px, yy + scale*py)`
- `absolute: false` (turtle): each point offsets from the previous point's
  position, and the current position updates after each point

## Example 7: Brush Attachment Points

Mark connection points for external routing (e.g., waveguide connections).

```json
{
  "type": "structure",
  "side": "ur",
  "collection": "0",
  "width": 0,
  "height": 0,
  "shape": {
    "type": "brush",
    "brushid": "port1",
    "angle": 90,
    "widout": 8000,
    "widin": 4000
  },
  "attachment": [{"type": "attachmentnone"}]
}
```

Use `width: 0, height: 0` so the brush occupies no space. Place it inside an
attachment at the desired corner. After loading, access via `at.brush["port1"]`.

## Design Strategy Tips

1. **Start from a reference point**: use a zero-dimension spacer at origin,
   then branch in multiple directions.
2. **Think in bounding boxes**: every shape lives inside a rectangle defined
   by (x1,y1)→(x2,y2). Attachments connect at corners of these boxes.
3. **Use variables liberally**: any dimension that might change should be a variable.
4. **Collection "0"** is conventionally used for invisible spacers/positioning.
5. **Test incrementally**: add one structure at a time and verify positioning.
6. **Symmetric structures**: place a center spacer, then use mirrored
   attachment/structure sides for top/bottom or left/right symmetry.
