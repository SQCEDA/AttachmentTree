import gdstk
import re
import json
import os
from math import cos, sin, pi, atan2, ceil


class AttachmentTree:

    def __init__(self, dbu=0.001, point_distance=1000):
        self.collection = {}
        self.brush = {}
        self.vars = {}
        self.dbu = dbu
        self.point_distance = point_distance

    def _make_polygon(self, points):
        s = self.dbu
        return gdstk.Polygon([(x * s, y * s) for x, y in points])

    def _loadifjson(self, filename):
        ret = filename
        if isinstance(filename, str) and filename.endswith('.json'):
            self.filename = filename
            with open(filename) as fid:
                ret = json.load(fid)
        self.root = ret
        return ret

    def eval(self, number):
        if isinstance(number, str):
            return eval(re.sub(r'[a-zA-Z_]+\w+', lambda m: str(self.vars[m.group(0)]), number))
        return number

    def addto(self, polygon, collection):
        if collection not in self.collection:
            self.collection[collection] = []
        self.collection[collection].append(polygon)

    def load(self, root, args=None):
        if args is None:
            args = {}
        root = self._loadifjson(root)
        self.vars.update(args)
        self.loadvars(root["define"])
        self.walk(root["structure"])
        return self

    def loadfromlib(self, root, args=None):
        if args is None:
            args = {}
        json_dir = os.path.dirname(os.path.abspath(__file__))
        abs_root = os.path.join(json_dir, root)
        if not os.path.exists(abs_root):
            init_data = {
                "type": "attachmentTree",
                "define": [{"type": "variablenone"}],
                "structure": [{"type": "structurenone"}],
            }
            with open(abs_root, "a", encoding="utf-8") as fid:
                json.dump(init_data, fid)
            print(f'create a new json at {abs_root}')
        root = self._loadifjson(abs_root)
        self.vars.update(args)
        self.loadvars(root["define"])
        self.walk(root["structure"])
        return self

    def loadvars(self, define_list):
        for element in define_list:
            if element["type"] == 'variablenone':
                continue
            if element["id"] not in self.vars:
                self.vars[element["id"]] = self.eval(element["value"])

    def walk(self, structures):
        self.xx = 0
        self.yy = 0
        self.x1 = 0
        self.y1 = 0
        self.x2 = 0
        self.y2 = 0
        self.traversal([{'type': 'attachment', 'side': 'ul', 'structure': structures}])

    def traversal(self, attachments):
        pos = [self.xx, self.yy]

        for attachment in attachments:
            if attachment["type"] != 'attachment':
                continue
            self.xx = self.x1 if attachment["side"][1] == 'l' else self.x2
            self.yy = self.y1 if attachment["side"][0] == 'd' else self.y2
            for structure in attachment["structure"]:
                if structure["type"] == 'structurenone':
                    continue
                pos12 = [self.x1, self.y1, self.x2, self.y2]
                if structure["type"] == 'structure':
                    width = self.eval(structure["width"])
                    height = self.eval(structure["height"])

                    self.x1 = self.xx - width if structure["side"][1] == 'l' else self.xx
                    self.y1 = self.yy - height if structure["side"][0] == 'd' else self.yy
                    self.x2 = self.x1 + width
                    self.y2 = self.y1 + height

                    self.buildshape(structure["shape"], width, height, structure["collection"])
                else:  # structurefrompts
                    ptsstr = re.split(r'[\s,]+', structure['points'])
                    pts = []
                    self.x1 = self.y1 = float('inf')
                    self.x2 = self.y2 = float('-inf')
                    scale = self.eval(structure['scale'])
                    while ptsstr:
                        xx = self.xx + scale * self.eval(ptsstr.pop(0))
                        yy = self.yy + scale * self.eval(ptsstr.pop(0))
                        self.x1 = min(self.x1, xx)
                        self.x2 = max(self.x2, xx)
                        self.y1 = min(self.y1, yy)
                        self.y2 = max(self.y2, yy)
                        if not structure['absolute']:
                            self.xx = xx
                            self.yy = yy
                        pts.append((xx, yy))
                    self.addto(self._make_polygon(pts), structure['collection'])
                self.traversal(structure["attachment"])
                [self.x1, self.y1, self.x2, self.y2] = pos12

        [self.xx, self.yy] = pos

    def buildshape(self, shape, width, height, collection):
        if shape["type"] == 'brush':
            s = self.dbu
            self.brush[shape['brushid']] = {
                'pointc': ((self.x1 + self.x2) / 2 * s,
                           (self.y1 + self.y2) / 2 * s),
                'angle': shape['angle'],
                'widout': shape['widout'],
                'widin': shape['widin'],
            }
            return
        elif shape["type"] == 'arc':
            pts = self._build_arc(shape, width, height)
        elif shape["type"] == 'quadrilateral':
            pts = [
                (self.x1 + self.eval(shape['ul']), self.y2),
                (self.x2, self.y2 - self.eval(shape['ur'])),
                (self.x2 - self.eval(shape['dr']), self.y1),
                (self.x1, self.y1 + self.eval(shape['dl'])),
            ]
        elif shape["type"] == 'quadrilateraldagger':
            pts = [
                (self.x2 - self.eval(shape['ur']), self.y2),
                (self.x2, self.y1 + self.eval(shape['dr'])),
                (self.x1 + self.eval(shape['dl']), self.y1),
                (self.x1, self.y2 - self.eval(shape['ul'])),
            ]
        elif shape["type"] == 'triangle':
            all_pts = [
                (self.x1, self.y2),
                (self.x2, self.y2),
                (self.x2, self.y1),
                (self.x1, self.y1),
            ] * 3
            ptsi = {'ul': 0, 'ur': 1, 'dr': 2, 'dl': 3}[shape["side"]]
            pts = all_pts[ptsi + 3:ptsi + 6]
        else:  # rectangle
            pts = [
                (self.x1, self.y2),
                (self.x2, self.y2),
                (self.x2, self.y1),
                (self.x1, self.y1),
            ]
        self.addto(self._make_polygon(pts), collection)

    def _build_arc(self, shape, width, height):
        if width < height:
            aa, bb, wbigger = width, height, False
        else:
            aa, bb, wbigger = height, width, True
        radius = (bb ** 2 / aa + aa) / 2
        angle = atan2(bb, radius - aa) * 180 / pi
        ptsi = {'ul': 0, 'ur': 1, 'dr': 2, 'dl': 3}[shape["side"]]
        cases = {
            (0, True):  [(self.x1, self.y2), (self.x1, self.y1 + radius), -90, -90 + angle],
            (1, True):  [(self.x2, self.y2), (self.x2, self.y1 + radius), -90, -90 - angle],
            (2, True):  [(self.x2, self.y1), (self.x2, self.y2 - radius), 90, 90 + angle],
            (3, True):  [(self.x1, self.y1), (self.x1, self.y2 - radius), 90, 90 - angle],
            (0, False): [(self.x1, self.y2), (self.x2 - radius, self.y2), 0, 0 - angle],
            (1, False): [(self.x2, self.y2), (self.x1 + radius, self.y2), 180, 180 + angle],
            (2, False): [(self.x2, self.y1), (self.x1 + radius, self.y1), 180, 180 - angle],
            (3, False): [(self.x1, self.y1), (self.x2 - radius, self.y1), 0, 0 + angle],
        }
        ptcorner, ptcenter, angle0, angle1 = cases[(ptsi, wbigger)]
        n = int(ceil(radius * angle * pi / 180 / self.point_distance) + 2)
        pts = self._arc_points(ptcenter, radius, n, angle0, angle1)
        pts.append(ptcorner)
        return pts

    @staticmethod
    def _arc_points(center, r, n, angle0, angle1):
        return [
            (center[0] + r * cos((angle0 + x / (n - 1) * (angle1 - angle0)) * pi / 180),
             center[1] + r * sin((angle0 + x / (n - 1) * (angle1 - angle0)) * pi / 180))
            for x in range(n)
        ]

    def shape(self, angle=0, xoff=0, yoff=0):
        """Combine collections following the 4-per-group convention:
        ((1-2)-(3-4)) + ((5-6)-(7-8)) ...
        Returns a list of gdstk.Polygon.
        """
        result = []
        pp = 1
        while True:
            p, q, r, s = str(pp), str(pp + 1), str(pp + 2), str(pp + 3)
            pp += 4
            if p not in self.collection:
                break
            sub = list(self.collection[p])
            if q in self.collection:
                sub = gdstk.boolean(sub, self.collection[q], "not")
            if r in self.collection:
                r_polys = list(self.collection[r])
                if s in self.collection:
                    r_polys = gdstk.boolean(r_polys, self.collection[s], "not")
                sub = gdstk.boolean(sub, r_polys, "not")
            result.extend(sub)
        if len(result) > 1:
            result = gdstk.boolean(result, [], "or")
        self._brush_trans(angle, xoff, yoff)
        if angle != 0 or xoff != 0 or yoff != 0:
            for poly in result:
                if angle != 0:
                    poly.rotate(angle * pi / 180)
                if xoff != 0 or yoff != 0:
                    poly.translate(xoff, yoff)
        return result

    def _brush_trans(self, angle=0, xoff=0, yoff=0):
        rad = angle * pi / 180
        for bid in self.brush:
            b = self.brush[bid]
            b['angle'] = (b['angle'] + angle) % 360
            cx, cy = b['pointc']
            if angle != 0:
                nx = cx * cos(rad) - cy * sin(rad)
                ny = cx * sin(rad) + cy * cos(rad)
                cx, cy = nx, ny
            b['pointc'] = (cx + xoff, cy + yoff)

    def to_cell(self, name="AttachmentTree", lib=None):
        """Create a gdstk.Cell with each collection on its own layer."""
        if lib is None:
            lib = gdstk.Library()
        cell = lib.new_cell(name)
        for coll_name in self.collection:
            try:
                layer = int(coll_name)
            except ValueError:
                layer = 0
            for poly in self.collection[coll_name]:
                p = poly.copy()
                p.layer = layer
                cell.add(p)
        return cell, lib

    def save_gds(self, filename, name="AttachmentTree", angle=0, xoff=0, yoff=0):
        """Convenience: build shape and save to a GDS file."""
        lib = gdstk.Library()
        cell = lib.new_cell(name)
        for poly in self.shape(angle, xoff, yoff):
            cell.add(poly)
        lib.write_gds(filename)
        return lib
