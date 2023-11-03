// Generated from PolylineTool.g4 by antlr-blockly
// 语句集合和表达式集合
PolylineToolBlocks = {
    "variables": [
        "variable",
        "arrayAction",
        "evalAction",
        "pyAction",
        "importBrushs",
        "variablenone"
    ],
    "attachments": [
        "attachment",
        "attachmentnone"
    ],
    "structures": [
        "structure",
        "structurefrompts",
        "structurelines",
        "structure2darraylines",
        "structurenone"
    ],
    "shapes": [
        "brush",
        "arc",
        "quadrilateral",
        "quadrilateraldagger",
        "triangle",
        "rectangle"
    ]
}


// 所有域的默认行为
Object.assign(PolylineToolBlocks,{
    "Side_List": {
        "type": "field_dropdown",
        "options": [
            ["⇖","ul"],
            ["⇗","ur"],
            ["⇘","dr"],
            ["⇙","dl"]
        ],
        "default": "ul"
    },
    "IdStr": {
        "type": "field_input",
        "text": "IdStr_default"
    },
    "NormalStr": {
        "type": "field_input",
        "text": "NormalStr_default"
    },
    "NormalStr_Multi": {
        "type": "field_multilinetext",
        "text": "NormalStr_Multi_default"
    },
    "TryIntStr": {
        "type": "field_input",
        "text": "TryIntStr_default"
    },
    "Evalstr": {
        "type": "field_input",
        "text": "Evalstr_default"
    },
    "Int": {
        "type": "field_number",
        "value": 0,
        "min": 0,
        "precision": 1
    },
    "Bool": {
        "type": "field_checkbox",
        "checked": true
    },
    "Colour": {
        "type": "field_colour",
        "colour": "#ff0000"
    },
    "BGNL": {
        "type": "input_dummy"
    }
});


// 所有方块的实际内容
Object.assign(PolylineToolBlocks,{
    "polylineTool": {
        "type": "statement",
        "json": {
            "type": "polylineTool",
            "message0": "define and import %1 %2 leaves %3 %4 display %5 %6",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "define",
                    "check": PolylineToolBlocks.variables
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "structure",
                    "check": PolylineToolBlocks.structures
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "display",
                    "check": "display"
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 260
        },
        "generFunc": function(block) {
            var define = Blockly.JavaScript.statementToCode(block, 'define');
            var structure = Blockly.JavaScript.statementToCode(block, 'structure');
            var display = Blockly.JavaScript.statementToCode(block, 'display');
            if(block.getInputTargetBlock('display') && 
                block.getInputTargetBlock('display').getNextBlock())
                throw new MultiStatementError(block,'display','polylineTool');
            if (display==='') {
                throw new OmitedError(block,'display','polylineTool');
            }
            var code = PolylineToolFunctions.defaultCode('polylineTool',eval('['+PolylineToolBlocks['polylineTool'].args.join(',')+']'),block);
            return code;
        },
        "args": ["define","structure","display"],
        "argsType": ["statement","statement","statement"],
        "argsGrammarName": ["variables","structures","display"],
        "omitted": [true,true,false],
        "multi": [true,true,false],
        "fieldDefault": function (keyOrIndex) {
            return PolylineToolFunctions.fieldDefault('polylineTool',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return PolylineToolFunctions.xmlText('polylineTool',inputs,next,isShadow,comment,attribute);
        }
    },
    "variable": {
        "type": "statement",
        "json": {
            "type": "variable",
            "message0": "id %1 default %2 description %3",
            "args0": [
                Object.assign({},PolylineToolBlocks.IdStr,{
                    "name": "id",
                    "text": "xx"
                }),
                Object.assign({},PolylineToolBlocks.Evalstr,{
                    "name": "value",
                    "text": "[0,1,2,3,5]"
                }),
                Object.assign({},PolylineToolBlocks.NormalStr,{
                    "name": "description",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 20,
            "previousStatement": "variable",
            "nextStatement": PolylineToolBlocks.variables
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','variable');
            }
            id = PolylineToolFunctions.pre('IdStr')(id,block,'id','variable');
            var value = block.getFieldValue('value');
            if (value==='') {
                throw new OmitedError(block,'value','variable');
            }
            value = PolylineToolFunctions.pre('Evalstr')(value,block,'value','variable');
            var description = block.getFieldValue('description');
            description = PolylineToolFunctions.pre('NormalStr')(description,block,'description','variable');
            var code = PolylineToolFunctions.defaultCode('variable',eval('['+PolylineToolBlocks['variable'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id","value","description"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["IdStr","Evalstr","NormalStr"],
        "omitted": [false,false,true],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return PolylineToolFunctions.fieldDefault('variable',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return PolylineToolFunctions.xmlText('variable',inputs,next,isShadow,comment,attribute);
        }
    },
    "arrayAction": {
        "type": "statement",
        "json": {
            "type": "arrayAction",
            "message0": "array action id %1 %2 n1 n2: %3 %4",
            "args0": [
                Object.assign({},PolylineToolBlocks.IdStr,{
                    "name": "id",
                    "text": "xx"
                }),
                Object.assign({},PolylineToolBlocks.Evalstr,{
                    "name": "value",
                    "text": "2*index"
                }),
                Object.assign({},PolylineToolBlocks.Evalstr,{
                    "name": "n1",
                    "text": 0
                }),
                Object.assign({},PolylineToolBlocks.Evalstr,{
                    "name": "n",
                    "text": 5
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 20,
            "previousStatement": "arrayAction",
            "nextStatement": PolylineToolBlocks.variables
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','arrayAction');
            }
            id = PolylineToolFunctions.pre('IdStr')(id,block,'id','arrayAction');
            var value = block.getFieldValue('value');
            if (value==='') {
                throw new OmitedError(block,'value','arrayAction');
            }
            value = PolylineToolFunctions.pre('Evalstr')(value,block,'value','arrayAction');
            var n1 = block.getFieldValue('n1');
            if (n1==='') {
                throw new OmitedError(block,'n1','arrayAction');
            }
            n1 = PolylineToolFunctions.pre('Evalstr')(n1,block,'n1','arrayAction');
            var n = block.getFieldValue('n');
            if (n==='') {
                throw new OmitedError(block,'n','arrayAction');
            }
            n = PolylineToolFunctions.pre('Evalstr')(n,block,'n','arrayAction');
            var code = PolylineToolFunctions.defaultCode('arrayAction',eval('['+PolylineToolBlocks['arrayAction'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id","value","n1","n"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["IdStr","Evalstr","Evalstr","Evalstr"],
        "omitted": [false,false,false,false],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return PolylineToolFunctions.fieldDefault('arrayAction',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return PolylineToolFunctions.xmlText('arrayAction',inputs,next,isShadow,comment,attribute);
        }
    },
    "evalAction": {
        "type": "statement",
        "json": {
            "type": "evalAction",
            "message0": "eval %1",
            "args0": [
                Object.assign({},PolylineToolBlocks.NormalStr_Multi,{
                    "name": "value",
                    "text": "console.log(walker.vars.xx)"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 20,
            "previousStatement": "evalAction",
            "nextStatement": PolylineToolBlocks.variables
        },
        "generFunc": function(block) {
            var value = block.getFieldValue('value');
            if (value==='') {
                throw new OmitedError(block,'value','evalAction');
            }
            value = PolylineToolFunctions.pre('NormalStr_Multi')(value,block,'value','evalAction');
            var code = PolylineToolFunctions.defaultCode('evalAction',eval('['+PolylineToolBlocks['evalAction'].args.join(',')+']'),block);
            return code;
        },
        "args": ["value"],
        "argsType": ["field"],
        "argsGrammarName": ["NormalStr_Multi"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return PolylineToolFunctions.fieldDefault('evalAction',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return PolylineToolFunctions.xmlText('evalAction',inputs,next,isShadow,comment,attribute);
        }
    },
    "pyAction": {
        "type": "statement",
        "json": {
            "type": "pyAction",
            "message0": "py %1",
            "args0": [
                Object.assign({},PolylineToolBlocks.NormalStr_Multi,{
                    "name": "value",
                    "text": "vars[\"aa\"]=np.linspace(-5000,5000,11)"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 20,
            "previousStatement": "pyAction",
            "nextStatement": PolylineToolBlocks.variables
        },
        "generFunc": function(block) {
            var value = block.getFieldValue('value');
            if (value==='') {
                throw new OmitedError(block,'value','pyAction');
            }
            value = PolylineToolFunctions.pre('NormalStr_Multi')(value,block,'value','pyAction');
            var code = PolylineToolFunctions.defaultCode('pyAction',eval('['+PolylineToolBlocks['pyAction'].args.join(',')+']'),block);
            return code;
        },
        "args": ["value"],
        "argsType": ["field"],
        "argsGrammarName": ["NormalStr_Multi"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return PolylineToolFunctions.fieldDefault('pyAction',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return PolylineToolFunctions.xmlText('pyAction',inputs,next,isShadow,comment,attribute);
        }
    },
    "importBrushs": {
        "type": "statement",
        "json": {
            "type": "importBrushs",
            "message0": "import brushs %1",
            "args0": [
                Object.assign({},PolylineToolBlocks.Evalstr,{
                    "name": "value",
                    "text": "[[0,100000],[100000,0]]"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 20,
            "previousStatement": "importBrushs",
            "nextStatement": PolylineToolBlocks.variables
        },
        "generFunc": function(block) {
            var value = block.getFieldValue('value');
            if (value==='') {
                throw new OmitedError(block,'value','importBrushs');
            }
            value = PolylineToolFunctions.pre('Evalstr')(value,block,'value','importBrushs');
            var code = PolylineToolFunctions.defaultCode('importBrushs',eval('['+PolylineToolBlocks['importBrushs'].args.join(',')+']'),block);
            return code;
        },
        "args": ["value"],
        "argsType": ["field"],
        "argsGrammarName": ["Evalstr"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return PolylineToolFunctions.fieldDefault('importBrushs',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return PolylineToolFunctions.xmlText('importBrushs',inputs,next,isShadow,comment,attribute);
        }
    },
    "variablenone": {
        "type": "statement",
        "json": {
            "type": "variablenone",
            "message0": "none",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 20,
            "previousStatement": "variablenone",
            "nextStatement": PolylineToolBlocks.variables
        },
        "generFunc": function(block) {
            var code = PolylineToolFunctions.defaultCode('variablenone',eval('['+PolylineToolBlocks['variablenone'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return PolylineToolFunctions.fieldDefault('variablenone',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return PolylineToolFunctions.xmlText('variablenone',inputs,next,isShadow,comment,attribute);
        }
    },
    "structurelines": {
        "type": "statement",
        "json": {
            "type": "structurelines",
            "message0": "add lines n1 n2: %1 %2 %3 %4",
            "args0": [
                Object.assign({},PolylineToolBlocks.Evalstr,{
                    "name": "n1",
                    "text": 0
                }),
                Object.assign({},PolylineToolBlocks.Evalstr,{
                    "name": "n",
                    "text": 5
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "pts",
                    "check": "point"
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "structurelines",
            "nextStatement": PolylineToolBlocks.structures
        },
        "generFunc": function(block) {
            var n1 = block.getFieldValue('n1');
            if (n1==='') {
                throw new OmitedError(block,'n1','structurelines');
            }
            n1 = PolylineToolFunctions.pre('Evalstr')(n1,block,'n1','structurelines');
            var n = block.getFieldValue('n');
            if (n==='') {
                throw new OmitedError(block,'n','structurelines');
            }
            n = PolylineToolFunctions.pre('Evalstr')(n,block,'n','structurelines');
            var pts = Blockly.JavaScript.statementToCode(block, 'pts');
            if (pts==='') {
                throw new OmitedError(block,'pts','structurelines');
            }
            var code = PolylineToolFunctions.defaultCode('structurelines',eval('['+PolylineToolBlocks['structurelines'].args.join(',')+']'),block);
            return code;
        },
        "args": ["n1","n","pts"],
        "argsType": ["field","field","statement"],
        "argsGrammarName": ["Evalstr","Evalstr","point"],
        "omitted": [false,false,false],
        "multi": [false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return PolylineToolFunctions.fieldDefault('structurelines',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return PolylineToolFunctions.xmlText('structurelines',inputs,next,isShadow,comment,attribute);
        }
    },
    "point": {
        "type": "statement",
        "json": {
            "type": "point",
            "message0": "point x %1 y %2",
            "args0": [
                Object.assign({},PolylineToolBlocks.Evalstr,{
                    "name": "x",
                    "text": "xx"
                }),
                Object.assign({},PolylineToolBlocks.Evalstr,{
                    "name": "y",
                    "text": "0"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 40,
            "previousStatement": "point",
            "nextStatement": "point"
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','point');
            }
            x = PolylineToolFunctions.pre('Evalstr')(x,block,'x','point');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','point');
            }
            y = PolylineToolFunctions.pre('Evalstr')(y,block,'y','point');
            var code = PolylineToolFunctions.defaultCode('point',eval('['+PolylineToolBlocks['point'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y"],
        "argsType": ["field","field"],
        "argsGrammarName": ["Evalstr","Evalstr"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return PolylineToolFunctions.fieldDefault('point',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return PolylineToolFunctions.xmlText('point',inputs,next,isShadow,comment,attribute);
        }
    },
    "structure2darraylines": {
        "type": "statement",
        "json": {
            "type": "structure2darraylines",
            "message0": "add lines from 2d array x y: %1 %2",
            "args0": [
                Object.assign({},PolylineToolBlocks.IdStr,{
                    "name": "x",
                    "text": "xx2d"
                }),
                Object.assign({},PolylineToolBlocks.IdStr,{
                    "name": "y",
                    "text": "yy2d"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "structure2darraylines",
            "nextStatement": PolylineToolBlocks.structures
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','structure2darraylines');
            }
            x = PolylineToolFunctions.pre('IdStr')(x,block,'x','structure2darraylines');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','structure2darraylines');
            }
            y = PolylineToolFunctions.pre('IdStr')(y,block,'y','structure2darraylines');
            var code = PolylineToolFunctions.defaultCode('structure2darraylines',eval('['+PolylineToolBlocks['structure2darraylines'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y"],
        "argsType": ["field","field"],
        "argsGrammarName": ["IdStr","IdStr"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return PolylineToolFunctions.fieldDefault('structure2darraylines',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return PolylineToolFunctions.xmlText('structure2darraylines',inputs,next,isShadow,comment,attribute);
        }
    },
    "structurefrompts": {
        "type": "statement",
        "json": {
            "type": "structurefrompts",
            "message0": "collection %1 scale %2 absolute/relative (☑/☐) %3 %4 points %5 leaves %6 %7",
            "args0": [
                Object.assign({},PolylineToolBlocks.NormalStr,{
                    "name": "collection",
                    "text": "10_0"
                }),
                Object.assign({},PolylineToolBlocks.Evalstr,{
                    "name": "scale",
                    "text": 1000
                }),
                Object.assign({},PolylineToolBlocks.Bool,{
                    "name": "absolute",
                    "checked": true
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},PolylineToolBlocks.NormalStr,{
                    "name": "points",
                    "text": "0 0 100 0 200 200"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "attachment",
                    "check": PolylineToolBlocks.attachments
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "structurefrompts",
            "nextStatement": PolylineToolBlocks.structures
        },
        "generFunc": function(block) {
            var collection = block.getFieldValue('collection');
            if (collection==='') {
                throw new OmitedError(block,'collection','structurefrompts');
            }
            collection = PolylineToolFunctions.pre('NormalStr')(collection,block,'collection','structurefrompts');
            var scale = block.getFieldValue('scale');
            if (scale==='') {
                throw new OmitedError(block,'scale','structurefrompts');
            }
            scale = PolylineToolFunctions.pre('Evalstr')(scale,block,'scale','structurefrompts');
            var absolute = block.getFieldValue('absolute') === 'TRUE';
            absolute = PolylineToolFunctions.pre('Bool')(absolute,block,'absolute','structurefrompts');
            var points = block.getFieldValue('points');
            if (points==='') {
                throw new OmitedError(block,'points','structurefrompts');
            }
            points = PolylineToolFunctions.pre('NormalStr')(points,block,'points','structurefrompts');
            var attachment = Blockly.JavaScript.statementToCode(block, 'attachment');
            var code = PolylineToolFunctions.defaultCode('structurefrompts',eval('['+PolylineToolBlocks['structurefrompts'].args.join(',')+']'),block);
            return code;
        },
        "args": ["collection","scale","absolute","points","attachment"],
        "argsType": ["field","field","field","field","statement"],
        "argsGrammarName": ["NormalStr","Evalstr","Bool","NormalStr","attachments"],
        "omitted": [false,false,false,false,true],
        "multi": [false,false,false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return PolylineToolFunctions.fieldDefault('structurefrompts',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return PolylineToolFunctions.xmlText('structurefrompts',inputs,next,isShadow,comment,attribute);
        }
    },
    "display": {
        "type": "statement",
        "json": {
            "type": "display",
            "message0": "line width %1 point size %2 text size %3",
            "args0": [
                Object.assign({},PolylineToolBlocks.Int,{
                    "name": "line",
                    "value": 100
                }),
                Object.assign({},PolylineToolBlocks.Int,{
                    "name": "point",
                    "value": 300
                }),
                Object.assign({},PolylineToolBlocks.Int,{
                    "name": "text",
                    "value": 1200
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 110,
            "previousStatement": "display",
            "nextStatement": "display"
        },
        "generFunc": function(block) {
            var line = block.getFieldValue('line');
            line = PolylineToolFunctions.pre('Int')(line,block,'line','display');
            var point = block.getFieldValue('point');
            point = PolylineToolFunctions.pre('Int')(point,block,'point','display');
            var text = block.getFieldValue('text');
            text = PolylineToolFunctions.pre('Int')(text,block,'text','display');
            var code = PolylineToolFunctions.defaultCode('display',eval('['+PolylineToolBlocks['display'].args.join(',')+']'),block);
            return code;
        },
        "args": ["line","point","text"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Int","Int","Int"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return PolylineToolFunctions.fieldDefault('display',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return PolylineToolFunctions.xmlText('display',inputs,next,isShadow,comment,attribute);
        }
    },
    "attachment": {
        "type": "statement",
        "json": {
            "type": "attachment",
            "message0": "%1 %2 %3",
            "args0": [
                Object.assign({},PolylineToolBlocks.Side_List,{
                    "name": "side"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "structure",
                    "check": PolylineToolBlocks.structures
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "attachment",
            "nextStatement": PolylineToolBlocks.attachments
        },
        "generFunc": function(block) {
            var side = block.getFieldValue('side');
            side = PolylineToolFunctions.pre('Side_List')(side,block,'side','attachment');
            var structure = Blockly.JavaScript.statementToCode(block, 'structure');
            var code = PolylineToolFunctions.defaultCode('attachment',eval('['+PolylineToolBlocks['attachment'].args.join(',')+']'),block);
            return code;
        },
        "args": ["side","structure"],
        "argsType": ["field","statement"],
        "argsGrammarName": ["Side_List","structures"],
        "omitted": [false,true],
        "multi": [false,true],
        "fieldDefault": function (keyOrIndex) {
            return PolylineToolFunctions.fieldDefault('attachment',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return PolylineToolFunctions.xmlText('attachment',inputs,next,isShadow,comment,attribute);
        }
    },
    "attachmentnone": {
        "type": "statement",
        "json": {
            "type": "attachmentnone",
            "message0": "none",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "attachmentnone",
            "nextStatement": PolylineToolBlocks.attachments
        },
        "generFunc": function(block) {
            var code = PolylineToolFunctions.defaultCode('attachmentnone',eval('['+PolylineToolBlocks['attachmentnone'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return PolylineToolFunctions.fieldDefault('attachmentnone',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return PolylineToolFunctions.xmlText('attachmentnone',inputs,next,isShadow,comment,attribute);
        }
    },
    "structure": {
        "type": "statement",
        "json": {
            "type": "structure",
            "message0": "%1 collection %2 width %3 height %4 %5 %6 leaves %7 %8",
            "args0": [
                Object.assign({},PolylineToolBlocks.Side_List,{
                    "name": "side"
                }),
                Object.assign({},PolylineToolBlocks.NormalStr,{
                    "name": "collection",
                    "text": "10_0"
                }),
                Object.assign({},PolylineToolBlocks.Evalstr,{
                    "name": "width",
                    "text": 50000
                }),
                Object.assign({},PolylineToolBlocks.Evalstr,{
                    "name": "height",
                    "text": 50000
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "shape",
                    "check": PolylineToolBlocks.shapes
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "attachment",
                    "check": PolylineToolBlocks.attachments
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "structure",
            "nextStatement": PolylineToolBlocks.structures
        },
        "generFunc": function(block) {
            var side = block.getFieldValue('side');
            side = PolylineToolFunctions.pre('Side_List')(side,block,'side','structure');
            var collection = block.getFieldValue('collection');
            if (collection==='') {
                throw new OmitedError(block,'collection','structure');
            }
            collection = PolylineToolFunctions.pre('NormalStr')(collection,block,'collection','structure');
            var width = block.getFieldValue('width');
            if (width==='') {
                throw new OmitedError(block,'width','structure');
            }
            width = PolylineToolFunctions.pre('Evalstr')(width,block,'width','structure');
            var height = block.getFieldValue('height');
            if (height==='') {
                throw new OmitedError(block,'height','structure');
            }
            height = PolylineToolFunctions.pre('Evalstr')(height,block,'height','structure');
            var shape = Blockly.JavaScript.statementToCode(block, 'shape');
            if(block.getInputTargetBlock('shape') && 
                block.getInputTargetBlock('shape').getNextBlock())
                throw new MultiStatementError(block,'shape','structure');
            if (shape==='') {
                throw new OmitedError(block,'shape','structure');
            }
            var attachment = Blockly.JavaScript.statementToCode(block, 'attachment');
            var code = PolylineToolFunctions.defaultCode('structure',eval('['+PolylineToolBlocks['structure'].args.join(',')+']'),block);
            return code;
        },
        "args": ["side","collection","width","height","shape","attachment"],
        "argsType": ["field","field","field","field","statement","statement"],
        "argsGrammarName": ["Side_List","NormalStr","Evalstr","Evalstr","shapes","attachments"],
        "omitted": [false,false,false,false,false,true],
        "multi": [false,false,false,false,false,true],
        "fieldDefault": function (keyOrIndex) {
            return PolylineToolFunctions.fieldDefault('structure',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return PolylineToolFunctions.xmlText('structure',inputs,next,isShadow,comment,attribute);
        }
    },
    "structurenone": {
        "type": "statement",
        "json": {
            "type": "structurenone",
            "message0": "none",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 70,
            "previousStatement": "structurenone",
            "nextStatement": PolylineToolBlocks.structures
        },
        "generFunc": function(block) {
            var code = PolylineToolFunctions.defaultCode('structurenone',eval('['+PolylineToolBlocks['structurenone'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return PolylineToolFunctions.fieldDefault('structurenone',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return PolylineToolFunctions.xmlText('structurenone',inputs,next,isShadow,comment,attribute);
        }
    },
    "brush": {
        "type": "statement",
        "json": {
            "type": "brush",
            "message0": "brush (id,angle,widout,widin) %1 %2 %3 %4",
            "args0": [
                Object.assign({},PolylineToolBlocks.IdStr,{
                    "name": "brushid",
                    "text": "brush1"
                }),
                Object.assign({},PolylineToolBlocks.Evalstr,{
                    "name": "angle",
                    "text": 0
                }),
                Object.assign({},PolylineToolBlocks.Evalstr,{
                    "name": "widout",
                    "text": 8000
                }),
                Object.assign({},PolylineToolBlocks.Evalstr,{
                    "name": "widin",
                    "text": 4000
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 130,
            "previousStatement": "brush",
            "nextStatement": PolylineToolBlocks.shapes
        },
        "generFunc": function(block) {
            var brushid = block.getFieldValue('brushid');
            if (brushid==='') {
                throw new OmitedError(block,'brushid','brush');
            }
            brushid = PolylineToolFunctions.pre('IdStr')(brushid,block,'brushid','brush');
            var angle = block.getFieldValue('angle');
            if (angle==='') {
                throw new OmitedError(block,'angle','brush');
            }
            angle = PolylineToolFunctions.pre('Evalstr')(angle,block,'angle','brush');
            var widout = block.getFieldValue('widout');
            if (widout==='') {
                throw new OmitedError(block,'widout','brush');
            }
            widout = PolylineToolFunctions.pre('Evalstr')(widout,block,'widout','brush');
            var widin = block.getFieldValue('widin');
            if (widin==='') {
                throw new OmitedError(block,'widin','brush');
            }
            widin = PolylineToolFunctions.pre('Evalstr')(widin,block,'widin','brush');
            var code = PolylineToolFunctions.defaultCode('brush',eval('['+PolylineToolBlocks['brush'].args.join(',')+']'),block);
            return code;
        },
        "args": ["brushid","angle","widout","widin"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["IdStr","Evalstr","Evalstr","Evalstr"],
        "omitted": [false,false,false,false],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return PolylineToolFunctions.fieldDefault('brush',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return PolylineToolFunctions.xmlText('brush',inputs,next,isShadow,comment,attribute);
        }
    },
    "arc": {
        "type": "statement",
        "json": {
            "type": "arc",
            "message0": "◔ %1",
            "args0": [
                Object.assign({},PolylineToolBlocks.Side_List,{
                    "name": "side"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 130,
            "previousStatement": "arc",
            "nextStatement": PolylineToolBlocks.shapes
        },
        "generFunc": function(block) {
            var side = block.getFieldValue('side');
            side = PolylineToolFunctions.pre('Side_List')(side,block,'side','arc');
            var code = PolylineToolFunctions.defaultCode('arc',eval('['+PolylineToolBlocks['arc'].args.join(',')+']'),block);
            return code;
        },
        "args": ["side"],
        "argsType": ["field"],
        "argsGrammarName": ["Side_List"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return PolylineToolFunctions.fieldDefault('arc',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return PolylineToolFunctions.xmlText('arc',inputs,next,isShadow,comment,attribute);
        }
    },
    "quadrilateral": {
        "type": "statement",
        "json": {
            "type": "quadrilateral",
            "message0": "▱ (→,↓,←,↑) %1 %2 %3 %4",
            "args0": [
                Object.assign({},PolylineToolBlocks.Evalstr,{
                    "name": "ul",
                    "text": 0
                }),
                Object.assign({},PolylineToolBlocks.Evalstr,{
                    "name": "ur",
                    "text": 0
                }),
                Object.assign({},PolylineToolBlocks.Evalstr,{
                    "name": "dr",
                    "text": 0
                }),
                Object.assign({},PolylineToolBlocks.Evalstr,{
                    "name": "dl",
                    "text": 0
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 130,
            "previousStatement": "quadrilateral",
            "nextStatement": PolylineToolBlocks.shapes
        },
        "generFunc": function(block) {
            var ul = block.getFieldValue('ul');
            if (ul==='') {
                throw new OmitedError(block,'ul','quadrilateral');
            }
            ul = PolylineToolFunctions.pre('Evalstr')(ul,block,'ul','quadrilateral');
            var ur = block.getFieldValue('ur');
            if (ur==='') {
                throw new OmitedError(block,'ur','quadrilateral');
            }
            ur = PolylineToolFunctions.pre('Evalstr')(ur,block,'ur','quadrilateral');
            var dr = block.getFieldValue('dr');
            if (dr==='') {
                throw new OmitedError(block,'dr','quadrilateral');
            }
            dr = PolylineToolFunctions.pre('Evalstr')(dr,block,'dr','quadrilateral');
            var dl = block.getFieldValue('dl');
            if (dl==='') {
                throw new OmitedError(block,'dl','quadrilateral');
            }
            dl = PolylineToolFunctions.pre('Evalstr')(dl,block,'dl','quadrilateral');
            var code = PolylineToolFunctions.defaultCode('quadrilateral',eval('['+PolylineToolBlocks['quadrilateral'].args.join(',')+']'),block);
            return code;
        },
        "args": ["ul","ur","dr","dl"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["Evalstr","Evalstr","Evalstr","Evalstr"],
        "omitted": [false,false,false,false],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return PolylineToolFunctions.fieldDefault('quadrilateral',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return PolylineToolFunctions.xmlText('quadrilateral',inputs,next,isShadow,comment,attribute);
        }
    },
    "quadrilateraldagger": {
        "type": "statement",
        "json": {
            "type": "quadrilateraldagger",
            "message0": "▱ (←,↑,→,↓) %1 %2 %3 %4",
            "args0": [
                Object.assign({},PolylineToolBlocks.Evalstr,{
                    "name": "ur",
                    "text": 0
                }),
                Object.assign({},PolylineToolBlocks.Evalstr,{
                    "name": "dr",
                    "text": 0
                }),
                Object.assign({},PolylineToolBlocks.Evalstr,{
                    "name": "dl",
                    "text": 0
                }),
                Object.assign({},PolylineToolBlocks.Evalstr,{
                    "name": "ul",
                    "text": 0
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 130,
            "previousStatement": "quadrilateraldagger",
            "nextStatement": PolylineToolBlocks.shapes
        },
        "generFunc": function(block) {
            var ur = block.getFieldValue('ur');
            if (ur==='') {
                throw new OmitedError(block,'ur','quadrilateraldagger');
            }
            ur = PolylineToolFunctions.pre('Evalstr')(ur,block,'ur','quadrilateraldagger');
            var dr = block.getFieldValue('dr');
            if (dr==='') {
                throw new OmitedError(block,'dr','quadrilateraldagger');
            }
            dr = PolylineToolFunctions.pre('Evalstr')(dr,block,'dr','quadrilateraldagger');
            var dl = block.getFieldValue('dl');
            if (dl==='') {
                throw new OmitedError(block,'dl','quadrilateraldagger');
            }
            dl = PolylineToolFunctions.pre('Evalstr')(dl,block,'dl','quadrilateraldagger');
            var ul = block.getFieldValue('ul');
            if (ul==='') {
                throw new OmitedError(block,'ul','quadrilateraldagger');
            }
            ul = PolylineToolFunctions.pre('Evalstr')(ul,block,'ul','quadrilateraldagger');
            var code = PolylineToolFunctions.defaultCode('quadrilateraldagger',eval('['+PolylineToolBlocks['quadrilateraldagger'].args.join(',')+']'),block);
            return code;
        },
        "args": ["ur","dr","dl","ul"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["Evalstr","Evalstr","Evalstr","Evalstr"],
        "omitted": [false,false,false,false],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return PolylineToolFunctions.fieldDefault('quadrilateraldagger',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return PolylineToolFunctions.xmlText('quadrilateraldagger',inputs,next,isShadow,comment,attribute);
        }
    },
    "triangle": {
        "type": "statement",
        "json": {
            "type": "triangle",
            "message0": "◺ %1",
            "args0": [
                Object.assign({},PolylineToolBlocks.Side_List,{
                    "name": "side"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 130,
            "previousStatement": "triangle",
            "nextStatement": PolylineToolBlocks.shapes
        },
        "generFunc": function(block) {
            var side = block.getFieldValue('side');
            side = PolylineToolFunctions.pre('Side_List')(side,block,'side','triangle');
            var code = PolylineToolFunctions.defaultCode('triangle',eval('['+PolylineToolBlocks['triangle'].args.join(',')+']'),block);
            return code;
        },
        "args": ["side"],
        "argsType": ["field"],
        "argsGrammarName": ["Side_List"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return PolylineToolFunctions.fieldDefault('triangle',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return PolylineToolFunctions.xmlText('triangle',inputs,next,isShadow,comment,attribute);
        }
    },
    "rectangle": {
        "type": "statement",
        "json": {
            "type": "rectangle",
            "message0": "▭",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 130,
            "previousStatement": "rectangle",
            "nextStatement": PolylineToolBlocks.shapes
        },
        "generFunc": function(block) {
            var code = PolylineToolFunctions.defaultCode('rectangle',eval('['+PolylineToolBlocks['rectangle'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return PolylineToolFunctions.fieldDefault('rectangle',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return PolylineToolFunctions.xmlText('rectangle',inputs,next,isShadow,comment,attribute);
        }
    }
});



//生成代码中,当一个不允许省略的值或块省略时,会抛出这个错误
function OmitedError(block, var_, rule, fileName, lineNumber) {
    var message = 'no omitted '+var_+' at '+rule;
    var instance = new Error(message, fileName, lineNumber);
    instance.block = block;
    instance.varName = var_;
    instance.blockName = rule;
    instance.name = 'OmitedError';
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    if (Error.captureStackTrace) {
        Error.captureStackTrace(instance, OmitedError);
    }
    return instance;
}

OmitedError.prototype = Object.create(Error.prototype);
OmitedError.prototype.constructor = OmitedError;
//处理此错误的omitedcheckUpdateFunction定义在下面

//生成代码中,当一个不允许多个语句输入的块放入多语句时,会抛出这个错误
function MultiStatementError(block, var_, rule, fileName, lineNumber) {
    var message = 'no multi-Statement '+var_+' at '+rule;
    var instance = new Error(message, fileName, lineNumber);
    instance.block = block;
    instance.varName = var_;
    instance.blockName = rule;
    instance.name = 'MultiStatementError';
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    if (Error.captureStackTrace) {
        Error.captureStackTrace(instance, MultiStatementError);
    }
    return instance;
}

MultiStatementError.prototype = Object.create(Error.prototype);
MultiStatementError.prototype.constructor = MultiStatementError;
//处理此错误的omitedcheckUpdateFunction定义在下面


PolylineToolFunctions={}

PolylineToolFunctions.Evalstr_pre = function(str) {
    if (parseFloat(str)+''===str) {
        return parseFloat(str)
    } 
    return str;
}

PolylineToolFunctions.TryIntStr_pre = function(str) {
    if (parseInt(str)+''===str) {
        return parseInt(str)
    } 
    return str;
}

PolylineToolBlocks.shapes.forEach(blockname => {
    PolylineToolBlocks[blockname].json.nextStatement=undefined
})
PolylineToolFunctions.Int_pre = function(intstr) {
    return parseInt(intstr);
}

PolylineToolFunctions.Number_pre = function(intstr) {
    return parseFloat(intstr);
}

//返回各LexerRule文本域的预处理函数,方便用来统一转义等等
PolylineToolFunctions.pre = function(LexerId) {
    if (PolylineToolFunctions.hasOwnProperty(LexerId+'_pre')) {
        return PolylineToolFunctions[LexerId+'_pre'];
    }
    return function(obj,block,fieldName,blockType){return obj}
}



// PolylineToolFunctions.fieldDefault
// 根据输入是整数字符串或null
// 第index个或者名字为key的域的默认值, null时返回所有field默认值的数组
PolylineToolFunctions.fieldDefault = function (ruleName,keyOrIndex) {
    var rule = PolylineToolBlocks[ruleName];
    var iskey=typeof keyOrIndex==typeof '';
    var isindex=typeof keyOrIndex==typeof 0;
    function args0_content_to_default(cnt) {
        var key = ({
            'field_input':'text',
            'field_multilinetext':'text',
            'field_number':'value',
            'field_dropdown':'default',
            'field_checkbox':'checked',
            'field_colour':'colour',
            'field_angle':'angle',
            // 'field_image':'src'
        })[cnt.type];
        return cnt[key];
    }
    var allDefault=[];
    for(var ii=0,index=-1,cnt;cnt=rule.json.args0[ii];ii++){
        if (!cnt.name || cnt.type.slice(0,5)!='field' || cnt.type=='field_image') continue;
        index++;
        if (iskey && cnt.name==keyOrIndex)return args0_content_to_default(cnt);
        if (isindex && index==keyOrIndex)return args0_content_to_default(cnt);
        allDefault.push(args0_content_to_default(cnt))
    }
    if (iskey || isindex) return undefined;
    return allDefault;
}



// PolylineToolFunctions.defaultCode_TEXT
PolylineToolFunctions.defaultCode_TEXT = function (ruleName,args,block) {
    var rule = PolylineToolBlocks[ruleName];
    var message=rule.json.message0;
    var args0=rule.json.args0;
    for(var ii=0,jj=0;ii<args0.length;ii++){
        message=message.split(new RegExp('%'+(ii+1)+'\\b'));
        var content='\n';
        if (args0[ii].type==='input_dummy') {
            message[1]=message[1].slice(1);
        } else if(args0[ii].type==='field_image') {
            content=args0[ii].alt;
        } else {
            content=args[jj++];
        }
        if (args0[ii].type=="input_statement") {
            message[0]=message[0]+'\n';
            message[1]=message[1].slice(1);
        }
        message=message.join(content);
    }
    if (rule.type=='statement') {
        message=message+'\n';
    }
    return message;
}

PolylineToolFunctions.defaultCode_JSON_TYPE='type'

PolylineToolFunctions.parserPre={}
PolylineToolFunctions.parserPre.pre = function(LexerId) {
    if (PolylineToolFunctions.parserPre.hasOwnProperty(LexerId+'_pre')) {
        return PolylineToolFunctions.parserPre[LexerId+'_pre'];
    }
    return function(obj,blockObj,fieldName,blockType,index){return obj}
}
/** @class */
PolylineToolFunctions.parserClass = function (params) {
}
PolylineToolFunctions.parserClass.prototype.parse = function (obj,next) {
    var blockType = obj[PolylineToolFunctions.defaultCode_JSON_TYPE]
    var rule = PolylineToolBlocks[blockType]
    if (PolylineToolFunctions.parserPre.hasOwnProperty(blockType+'_pre')) {
        obj = PolylineToolFunctions.parserPre[blockType+'_pre'](obj)
    }
    var input = []
    for (var index = 0; index < rule.args.length; index++) {
        var dobj = obj[rule.args[index]];
        if (rule.argsType[index]==='statement') {
            if (!rule.multi[index])dobj=[dobj];
            var snext=null
            while (dobj.length) {
                var ds=dobj.pop()
                snext=this.parse(ds,snext)
            }
            input.push(snext)
        } else if (rule.argsType[index]==='value') {
            input.push(this.parse(dobj))
        } else {
            var LexerId = rule.argsGrammarName[index]
            input.push(PolylineToolFunctions.parserPre.pre(LexerId)(dobj,obj,rule.args[index],blockType,index))
        }
    }
    return rule.xmlText(input,next)
}
PolylineToolFunctions.parser=new PolylineToolFunctions.parserClass()
PolylineToolFunctions.parse=function(obj){
    var xml_text = PolylineToolFunctions.parser.parse(obj);
    var xml = Blockly.Xml.textToDom('<xml>'+xml_text+'</xml>');
    PolylineToolFunctions.workspace().clear();
    Blockly.Xml.domToWorkspace(xml, PolylineToolFunctions.workspace());
}

// PolylineToolFunctions.defaultCode_JSON
PolylineToolFunctions.defaultCode_JSON = function (ruleName,args,block) {
    var rule = PolylineToolBlocks[ruleName];
    var values=args
    var output={}
    var ret=''
    if (rule.type==='statement'||rule.type==='value') {
        output[PolylineToolFunctions.defaultCode_JSON_TYPE]=rule.json.type
        ret=block.getNextBlock()==null?'':','
    }
    for (var index = 0; index < values.length; index++) {
        var value = values[index];
        if (rule.argsType[index]==='statement') {
            output[rule.args[index]]=eval('['+value+']')
            if (!rule.multi[index]) output[rule.args[index]]=output[rule.args[index]][0];
        } else if (rule.argsType[index]==='value') {
            output[rule.args[index]]=eval('('+value+')')
        } else {
            output[rule.args[index]]=value
        }
    }
    ret=JSON.stringify(output,null,4)+ret
    return ret
}

// PolylineToolFunctions.defaultCode
PolylineToolFunctions.defaultCode=PolylineToolFunctions.defaultCode_JSON



// PolylineToolFunctions.xmlText
// 构造这个方法是为了能够不借助workspace,从语法树直接构造图块结构
// inputs的第i个元素是第i个args的xmlText,null或undefined表示空
// next是其下一个语句的xmlText
PolylineToolFunctions.xmlText = function (ruleName,inputs,next,isShadow,comment,attribute) {
    var rule = PolylineToolBlocks[ruleName];
    var blocktext = isShadow?'shadow':'block';
    var xmlText = [];
    xmlText.push('<'+blocktext+' type="'+ruleName+'"');
    for (var attr in attribute) {
        xmlText.push(' '+attr+'="'+attribute[attr]+'"');
    }
    xmlText.push('>');
    if(!inputs)inputs=[];
    var inputIsArray = inputs instanceof Array;
    for (var ii=0,inputType;inputType=rule.argsType[ii];ii++) {
        var input = inputIsArray?inputs[ii]:inputs[rule.args[ii]];
        var _input = '';
        var noinput = input==null;
        if(noinput && inputType==='field' && PolylineToolBlocks[rule.argsGrammarName[ii]].type!=='field_dropdown') continue;
        if(noinput && inputType==='field') {
            noinput = false;
            input = rule.fieldDefault(rule.args[ii])
        }
        if(noinput) input = '';
        if(inputType==='field' && PolylineToolBlocks[rule.argsGrammarName[ii]].type==='field_checkbox')input=input?'TRUE':'FALSE';
        if(inputType!=='field') {
            var subList = false;
            var subrulename = rule.argsGrammarName[ii];
            var subrule = PolylineToolBlocks[subrulename];
            if (subrule instanceof Array) {
                subrulename=subrule[subrule.length-1];
                subrule = PolylineToolBlocks[subrulename];
                subList = true;
            }
            _input = subrule.xmlText([],null,true);
            if(noinput && !subList && !isShadow) {
                //无输入的默认行为是: 如果语句块的备选方块只有一个,直接代入方块
                input = subrule.xmlText();
            }
        }
        xmlText.push('<'+inputType+' name="'+rule.args[ii]+'">');
        xmlText.push(_input+input);
        xmlText.push('</'+inputType+'>');
    }
    if(comment){
        xmlText.push('<comment><![CDATA[');
        xmlText.push(comment.replace(/]]>/g,'] ] >'));
        xmlText.push(']]></comment>');
    }
    if (next) {
        xmlText.push('<next>');
        xmlText.push(next);
        xmlText.push('</next>');
    }
    xmlText.push('</'+blocktext+'>');
    return xmlText.join('');
}



// PolylineToolFunctions.blocksIniter
// 把各方块的信息注册到Blockly中
PolylineToolFunctions.blocksIniter = function(){
    var blocksobj = PolylineToolBlocks;
    for(var key in blocksobj) {
        var value = blocksobj[key];
        if(value instanceof Array)continue;
        if(/^[A-Z].*$/.exec(key))continue;
        (function(key,value){
            if (value.menu && value.menu.length) {
                var menuRegisterMixin={
                    customContextMenu: function(options) {
                        for(var ii=0,op;op=value.menu[ii];ii++){
                            var option = {enabled: true};
                            option.text = op[0];
                            var check = 'function('
                            if (option.text.slice(0,check.length)==check){
                                option.text=eval('('+option.text+')(this)');
                            }
                            (function(block,fstr){
                                option.callback = function(){
                                    eval(fstr)
                                }
                            })(this,op[1]);
                            options.push(option);
                        }
                    }
                };
                value.json.extensions=value.json.extensions||[];
                var mixinName = 'contextMenu_PolylineTool_'+value.json.type
                value.json.extensions.push(mixinName)
                Blockly.Extensions.registerMixin(mixinName,menuRegisterMixin);
            }
            Blockly.Blocks[key] = {
                init: function() {this.jsonInit(value.json);}
            }
            Blockly.JavaScript[key] = value.generFunc;
        })(key,value);
    }
}


PolylineToolFunctions.blocksIniter();


var toolbox = (function(){

    var toolboxXml=document.createElement('xml')

    // 调整这个obj来更改侧边栏和其中的方块
    // 可以直接填 '<block type="xxx">...</block>'
    // 标签 '<label text="标签文本"></label>'
    var toolboxObj = {
        // 每个键值对作为一页
        "statement": [
            // 所有语句块
            PolylineToolBlocks["polylineTool"].xmlText(),
            PolylineToolBlocks["variable"].xmlText(),
            PolylineToolBlocks["arrayAction"].xmlText(),
            PolylineToolBlocks["evalAction"].xmlText(),
            PolylineToolBlocks["pyAction"].xmlText(),
            PolylineToolBlocks["importBrushs"].xmlText(),
            PolylineToolBlocks["variablenone"].xmlText(),
            PolylineToolBlocks["structurelines"].xmlText(),
            PolylineToolBlocks["point"].xmlText(),
            PolylineToolBlocks["structure2darraylines"].xmlText(),
            PolylineToolBlocks["structurefrompts"].xmlText(),
            PolylineToolBlocks["display"].xmlText(),
            PolylineToolBlocks["attachment"].xmlText(),
            PolylineToolBlocks["attachmentnone"].xmlText(),
            PolylineToolBlocks["structure"].xmlText(),
            PolylineToolBlocks["structurenone"].xmlText(),
            PolylineToolBlocks["brush"].xmlText(),
            PolylineToolBlocks["arc"].xmlText(),
            PolylineToolBlocks["quadrilateral"].xmlText(),
            PolylineToolBlocks["quadrilateraldagger"].xmlText(),
            PolylineToolBlocks["triangle"].xmlText(),
            PolylineToolBlocks["rectangle"].xmlText(),
        ],
        "value": [
            // 所有值块
        ]
    }

    var getCategory = function(toolboxXml,name,custom){
        var node = document.createElement('category');
        node.setAttribute('name',name);
        if(custom)node.setAttribute('custom',custom);
        toolboxXml.appendChild(node);
        return node;
    }

    var toolboxGap = '<sep gap="5"></sep>'

    for (var name in toolboxObj){
        var custom = null;
        if(name=='xxxxxx')custom='xxxxxx';
        if(name=='zzzzzz')custom='zzzzzz';
        getCategory(toolboxXml,name,custom).innerHTML = toolboxObj[name].join(toolboxGap);
        var node = document.createElement('sep');
        node.setAttribute('gap',5*3);
        toolboxXml.appendChild(node);
    }

    return toolboxXml;
})();



    var workspace = Blockly.inject('blocklyDiv',{
        media: '../antlr-blockly/media/',
        toolbox: toolbox,
        zoom:{
            controls: true,
            wheel: false,//false
            startScale: 0.5,
            maxScale: 1.2,
            minScale: 0.2,
            scaleSpeed: 1.08
        },
        trashcan: false,
    });
    PolylineToolFunctions.workspace = function(){return workspace}
    
    var doubleClickCheck=[[0,'xxxxxxx_blockid']];
    function omitedcheckUpdateFunction(event) {
        if(event.type==='ui' && event.element == 'click'){
            var newClick = [new Date().getTime(),event.blockId];
            var lastClick = doubleClickCheck.shift();
            doubleClickCheck.push(newClick);
            if(newClick[0]-lastClick[0]<500){
                if(newClick[1]===lastClick[1]){
                    window?.blocklyDoubleClickBlock?.call(null,newClick[1]);
                }
            }
        }
        var codeAreaFunc = function(err,data){blocklyinput.value=err?String(err):data;window?.trigger?.call(null,[err,data])}
        try {
            if (["delete","create","move","finished_loading"].indexOf(event.type)!==-1) return;
            var code = Blockly.JavaScript.workspaceToCode(workspace);
            codeAreaFunc(null,code);
        } catch (error) {
            codeAreaFunc(error,null);
            if (error instanceof OmitedError ||error instanceof MultiStatementError){
                var blockName = error.blockName;
                var varName = error.varName;
                var block = error.block;
            }
            console.log(error);
        }
    }
    
    workspace.addChangeListener(omitedcheckUpdateFunction);
    
//自动禁用任何未连接到根块的块
workspace.addChangeListener(Blockly.Events.disableOrphans);


// debugFunctions
function showXML() {
    xml = Blockly.Xml.workspaceToDom(workspace);
    xml_text = Blockly.Xml.domToPrettyText(xml);
    console.log(xml_text);
    xml_text = Blockly.Xml.domToText(xml);
    console.log(xml_text);
    console.log(xml);
}

function runCode() {
    // Generate JavaScript code and run it.
    window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP =
        'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    code = Blockly.JavaScript.workspaceToCode(workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    try {
        eval('obj=' + code);
        console.log(obj);
    } catch (e) {
        alert(e);
    }
}

    window.buildBlocks&&window.buildBlocks()
    