import sys
# python3 gdstkWalker_demo.py /home/zhaouv/e/git/workspaces/eda/gdsql/gdsql/shape/attachment/coupler1.at.json
# python3 gdstkWalker_demo.py /home/zhaouv/e/git/workspaces/eda/design-all-in-scripts/AttachmentTree/AttachmentTreePageDemo.at.json
filename = sys.argv[1]

from gdstkWalker import AttachmentTree
at = AttachmentTree(point_distance=500).load(filename, {'r1': 1000})
# polys = at.shape()            # list[gdstk.Polygon]
at.save_gds('output.gds')     # 直接存文件
# cell, lib = at.to_cell()      # 获取 cell 和 library
# at.brush['b1']                # 拼接点信息
# at.vars['t1']     
at.to_cell()[1].write_gds('raw.gds')    # 直接存文件