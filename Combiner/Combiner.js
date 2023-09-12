// Generated from Combiner.g4 by antlr-blockly
// 语句集合和表达式集合
CombinerBlocks = {
    "statements": [
        "variableDefine",
        "brushDefine",
        "traceDefine",
        "dispatch",
        "structureAt",
        "forStatement",
        "evalStatement"
    ],
    "contents": [
        "attachmentTree",
        "gdsLoader",
        "combinercontent",
        "linkBrush",
        "trace",
        "component"
    ]
}


// 所有域的默认行为
Object.assign(CombinerBlocks,{
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
    "Keytype_List": {
        "type": "field_dropdown",
        "options": [
            ["variable","variable"],
            ["trace.length","trace.length"],
            ["brush","brush"],
            ["collection","collection"],
            ["trace","trace"],
            ["collection.merge","collection.merge"],
            ["marks.merge","marks.merge"],
            ["centerlines.merge","centerlines.merge"]
        ],
        "default": "variable"
    },
    "Linktype_List": {
        "type": "field_dropdown",
        "options": [
            ["45","45"],
            ["any","any"]
        ],
        "default": "45"
    },
    "Component_List": {
        "type": "field_dropdown",
        "options": [
            ["Electrode","Electrode"],
            ["Connection","Connection"],
            ["Narrow","Narrow"],
            ["InterdigitedCapacitor","InterdigitedCapacitor"]
        ],
        "default": "Electrode"
    },
    "IdStr": {
        "type": "field_input",
        "text": "IdStr_default"
    },
    "IdsStr": {
        "type": "field_input",
        "text": "IdsStr_default"
    },
    "NormalStr": {
        "type": "field_input",
        "text": "NormalStr_default"
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
Object.assign(CombinerBlocks,{
    "combiner": {
        "type": "statement",
        "json": {
            "type": "combiner",
            "message0": "%1",
            "args0": [
                {
                    "type": "input_statement",
                    "name": "statement",
                    "check": CombinerBlocks.statements
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 260
        },
        "generFunc": function(block) {
            var statement = Blockly.JavaScript.statementToCode(block, 'statement');
            var code = CombinerFunctions.defaultCode('combiner',eval('['+CombinerBlocks['combiner'].args.join(',')+']'),block);
            return code;
        },
        "args": ["statement"],
        "argsType": ["statement"],
        "argsGrammarName": ["statements"],
        "omitted": [true],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return CombinerFunctions.fieldDefault('combiner',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return CombinerFunctions.xmlText('combiner',inputs,next,isShadow,comment,attribute);
        }
    },
    "variableDefine": {
        "type": "statement",
        "json": {
            "type": "variableDefine",
            "message0": "variable define id %1 default %2 description %3",
            "args0": [
                Object.assign({},CombinerBlocks.IdStr,{
                    "name": "id",
                    "text": "armlength"
                }),
                Object.assign({},CombinerBlocks.Evalstr,{
                    "name": "value",
                    "text": 50000
                }),
                Object.assign({},CombinerBlocks.NormalStr,{
                    "name": "description",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "variableDefine",
            "nextStatement": CombinerBlocks.statements
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','variableDefine');
            }
            id = CombinerFunctions.pre('IdStr')(id,block,'id','variableDefine');
            var value = block.getFieldValue('value');
            if (value==='') {
                throw new OmitedError(block,'value','variableDefine');
            }
            value = CombinerFunctions.pre('Evalstr')(value,block,'value','variableDefine');
            var description = block.getFieldValue('description');
            description = CombinerFunctions.pre('NormalStr')(description,block,'description','variableDefine');
            var code = CombinerFunctions.defaultCode('variableDefine',eval('['+CombinerBlocks['variableDefine'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id","value","description"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["IdStr","Evalstr","NormalStr"],
        "omitted": [false,false,true],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return CombinerFunctions.fieldDefault('variableDefine',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return CombinerFunctions.xmlText('variableDefine',inputs,next,isShadow,comment,attribute);
        }
    },
    "brushDefine": {
        "type": "statement",
        "json": {
            "type": "brushDefine",
            "message0": "brush define (id,x,y,angle,widout,widin) %1 %2 %3 %4 %5 %6 %7 description %8",
            "args0": [
                {
                    "type": "input_dummy"
                },
                Object.assign({},CombinerBlocks.IdStr,{
                    "name": "id",
                    "text": "brush1"
                }),
                Object.assign({},CombinerBlocks.Evalstr,{
                    "name": "x",
                    "text": 50000
                }),
                Object.assign({},CombinerBlocks.Evalstr,{
                    "name": "y",
                    "text": 40000
                }),
                Object.assign({},CombinerBlocks.Evalstr,{
                    "name": "angle",
                    "text": 90
                }),
                Object.assign({},CombinerBlocks.Evalstr,{
                    "name": "widout",
                    "text": 8000
                }),
                Object.assign({},CombinerBlocks.Evalstr,{
                    "name": "widin",
                    "text": 4000
                }),
                Object.assign({},CombinerBlocks.NormalStr,{
                    "name": "description",
                    "text": ""
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "brushDefine",
            "nextStatement": CombinerBlocks.statements
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','brushDefine');
            }
            id = CombinerFunctions.pre('IdStr')(id,block,'id','brushDefine');
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','brushDefine');
            }
            x = CombinerFunctions.pre('Evalstr')(x,block,'x','brushDefine');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','brushDefine');
            }
            y = CombinerFunctions.pre('Evalstr')(y,block,'y','brushDefine');
            var angle = block.getFieldValue('angle');
            if (angle==='') {
                throw new OmitedError(block,'angle','brushDefine');
            }
            angle = CombinerFunctions.pre('Evalstr')(angle,block,'angle','brushDefine');
            var widout = block.getFieldValue('widout');
            if (widout==='') {
                throw new OmitedError(block,'widout','brushDefine');
            }
            widout = CombinerFunctions.pre('Evalstr')(widout,block,'widout','brushDefine');
            var widin = block.getFieldValue('widin');
            if (widin==='') {
                throw new OmitedError(block,'widin','brushDefine');
            }
            widin = CombinerFunctions.pre('Evalstr')(widin,block,'widin','brushDefine');
            var description = block.getFieldValue('description');
            description = CombinerFunctions.pre('NormalStr')(description,block,'description','brushDefine');
            var code = CombinerFunctions.defaultCode('brushDefine',eval('['+CombinerBlocks['brushDefine'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id","x","y","angle","widout","widin","description"],
        "argsType": ["field","field","field","field","field","field","field"],
        "argsGrammarName": ["IdStr","Evalstr","Evalstr","Evalstr","Evalstr","Evalstr","NormalStr"],
        "omitted": [false,false,false,false,false,false,true],
        "multi": [false,false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return CombinerFunctions.fieldDefault('brushDefine',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return CombinerFunctions.xmlText('brushDefine',inputs,next,isShadow,comment,attribute);
        }
    },
    "traceDefine": {
        "type": "statement",
        "json": {
            "type": "traceDefine",
            "message0": "trace define id %1 default %2 %3 using %4 reverse %5 mirror %6 description %7",
            "args0": [
                Object.assign({},CombinerBlocks.IdStr,{
                    "name": "id",
                    "text": "trace2"
                }),
                Object.assign({},CombinerBlocks.Evalstr,{
                    "name": "value",
                    "text": "s x r y,z trace1 s x"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},CombinerBlocks.IdsStr,{
                    "name": "using",
                    "text": "x,y,z,trace1"
                }),
                Object.assign({},CombinerBlocks.Bool,{
                    "name": "reverse",
                    "checked": false
                }),
                Object.assign({},CombinerBlocks.Bool,{
                    "name": "mirror",
                    "checked": false
                }),
                Object.assign({},CombinerBlocks.NormalStr,{
                    "name": "description",
                    "text": ""
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "traceDefine",
            "nextStatement": CombinerBlocks.statements
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','traceDefine');
            }
            id = CombinerFunctions.pre('IdStr')(id,block,'id','traceDefine');
            var value = block.getFieldValue('value');
            if (value==='') {
                throw new OmitedError(block,'value','traceDefine');
            }
            value = CombinerFunctions.pre('Evalstr')(value,block,'value','traceDefine');
            var using = block.getFieldValue('using');
            using = CombinerFunctions.pre('IdsStr')(using,block,'using','traceDefine');
            var reverse = block.getFieldValue('reverse') === 'TRUE';
            reverse = CombinerFunctions.pre('Bool')(reverse,block,'reverse','traceDefine');
            var mirror = block.getFieldValue('mirror') === 'TRUE';
            mirror = CombinerFunctions.pre('Bool')(mirror,block,'mirror','traceDefine');
            var description = block.getFieldValue('description');
            description = CombinerFunctions.pre('NormalStr')(description,block,'description','traceDefine');
            var code = CombinerFunctions.defaultCode('traceDefine',eval('['+CombinerBlocks['traceDefine'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id","value","using","reverse","mirror","description"],
        "argsType": ["field","field","field","field","field","field"],
        "argsGrammarName": ["IdStr","Evalstr","IdsStr","Bool","Bool","NormalStr"],
        "omitted": [false,false,true,false,false,true],
        "multi": [false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return CombinerFunctions.fieldDefault('traceDefine',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return CombinerFunctions.xmlText('traceDefine',inputs,next,isShadow,comment,attribute);
        }
    },
    "dispatch": {
        "type": "statement",
        "json": {
            "type": "dispatch",
            "message0": "dispatch %1 from %2 to %3",
            "args0": [
                Object.assign({},CombinerBlocks.Keytype_List,{
                    "name": "keytype"
                }),
                Object.assign({},CombinerBlocks.IdsStr,{
                    "name": "id",
                    "text": "ab,cd"
                }),
                Object.assign({},CombinerBlocks.IdsStr,{
                    "name": "value",
                    "text": "bdf@ab,bdf@cd"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "dispatch",
            "nextStatement": CombinerBlocks.statements
        },
        "generFunc": function(block) {
            var keytype = block.getFieldValue('keytype');
            keytype = CombinerFunctions.pre('Keytype_List')(keytype,block,'keytype','dispatch');
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','dispatch');
            }
            id = CombinerFunctions.pre('IdsStr')(id,block,'id','dispatch');
            var value = block.getFieldValue('value');
            if (value==='') {
                throw new OmitedError(block,'value','dispatch');
            }
            value = CombinerFunctions.pre('IdsStr')(value,block,'value','dispatch');
            var code = CombinerFunctions.defaultCode('dispatch',eval('['+CombinerBlocks['dispatch'].args.join(',')+']'),block);
            return code;
        },
        "args": ["keytype","id","value"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Keytype_List","IdsStr","IdsStr"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return CombinerFunctions.fieldDefault('dispatch',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return CombinerFunctions.xmlText('dispatch',inputs,next,isShadow,comment,attribute);
        }
    },
    "evalStatement": {
        "type": "statement",
        "json": {
            "type": "evalStatement",
            "message0": "eval %1",
            "args0": [
                Object.assign({},CombinerBlocks.NormalStr,{
                    "name": "content",
                    "text": "print(self.vars[\"abc\"])"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "evalStatement",
            "nextStatement": CombinerBlocks.statements
        },
        "generFunc": function(block) {
            var content = block.getFieldValue('content');
            if (content==='') {
                throw new OmitedError(block,'content','evalStatement');
            }
            content = CombinerFunctions.pre('NormalStr')(content,block,'content','evalStatement');
            var code = CombinerFunctions.defaultCode('evalStatement',eval('['+CombinerBlocks['evalStatement'].args.join(',')+']'),block);
            return code;
        },
        "args": ["content"],
        "argsType": ["field"],
        "argsGrammarName": ["NormalStr"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return CombinerFunctions.fieldDefault('evalStatement',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return CombinerFunctions.xmlText('evalStatement',inputs,next,isShadow,comment,attribute);
        }
    },
    "structureAt": {
        "type": "statement",
        "json": {
            "type": "structureAt",
            "message0": "structure at brush %1 reverse %2 %3 %4",
            "args0": [
                Object.assign({},CombinerBlocks.IdStr,{
                    "name": "brushid",
                    "text": "brush1"
                }),
                Object.assign({},CombinerBlocks.Bool,{
                    "name": "reverse",
                    "checked": false
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": CombinerBlocks.contents
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "structureAt",
            "nextStatement": CombinerBlocks.statements
        },
        "generFunc": function(block) {
            var brushid = block.getFieldValue('brushid');
            if (brushid==='') {
                throw new OmitedError(block,'brushid','structureAt');
            }
            brushid = CombinerFunctions.pre('IdStr')(brushid,block,'brushid','structureAt');
            var reverse = block.getFieldValue('reverse') === 'TRUE';
            reverse = CombinerFunctions.pre('Bool')(reverse,block,'reverse','structureAt');
            var content = Blockly.JavaScript.statementToCode(block, 'content');
            if(block.getInputTargetBlock('content') && 
                block.getInputTargetBlock('content').getNextBlock())
                throw new MultiStatementError(block,'content','structureAt');
            if (content==='') {
                throw new OmitedError(block,'content','structureAt');
            }
            var code = CombinerFunctions.defaultCode('structureAt',eval('['+CombinerBlocks['structureAt'].args.join(',')+']'),block);
            return code;
        },
        "args": ["brushid","reverse","content"],
        "argsType": ["field","field","statement"],
        "argsGrammarName": ["IdStr","Bool","contents"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return CombinerFunctions.fieldDefault('structureAt',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return CombinerFunctions.xmlText('structureAt',inputs,next,isShadow,comment,attribute);
        }
    },
    "attachmentTree": {
        "type": "statement",
        "json": {
            "type": "attachmentTree",
            "message0": "AttachmentTree id %1 output id %2 description %3",
            "args0": [
                Object.assign({},CombinerBlocks.IdStr,{
                    "name": "id",
                    "text": "qubit1"
                }),
                Object.assign({},CombinerBlocks.IdStr,{
                    "name": "outputid",
                    "text": "q1"
                }),
                Object.assign({},CombinerBlocks.NormalStr,{
                    "name": "description",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 220,
            "previousStatement": "attachmentTree",
            "nextStatement": CombinerBlocks.contents
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','attachmentTree');
            }
            id = CombinerFunctions.pre('IdStr')(id,block,'id','attachmentTree');
            var outputid = block.getFieldValue('outputid');
            if (outputid==='') {
                throw new OmitedError(block,'outputid','attachmentTree');
            }
            outputid = CombinerFunctions.pre('IdStr')(outputid,block,'outputid','attachmentTree');
            var description = block.getFieldValue('description');
            description = CombinerFunctions.pre('NormalStr')(description,block,'description','attachmentTree');
            var code = CombinerFunctions.defaultCode('attachmentTree',eval('['+CombinerBlocks['attachmentTree'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id","outputid","description"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["IdStr","IdStr","NormalStr"],
        "omitted": [false,false,true],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return CombinerFunctions.fieldDefault('attachmentTree',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return CombinerFunctions.xmlText('attachmentTree',inputs,next,isShadow,comment,attribute);
        }
    },
    "gdsLoader": {
        "type": "statement",
        "json": {
            "type": "gdsLoader",
            "message0": "GDSLoader id %1 output id %2 description %3",
            "args0": [
                Object.assign({},CombinerBlocks.IdStr,{
                    "name": "id",
                    "text": "arm1"
                }),
                Object.assign({},CombinerBlocks.IdStr,{
                    "name": "outputid",
                    "text": "a1"
                }),
                Object.assign({},CombinerBlocks.NormalStr,{
                    "name": "description",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 220,
            "previousStatement": "gdsLoader",
            "nextStatement": CombinerBlocks.contents
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','gdsLoader');
            }
            id = CombinerFunctions.pre('IdStr')(id,block,'id','gdsLoader');
            var outputid = block.getFieldValue('outputid');
            if (outputid==='') {
                throw new OmitedError(block,'outputid','gdsLoader');
            }
            outputid = CombinerFunctions.pre('IdStr')(outputid,block,'outputid','gdsLoader');
            var description = block.getFieldValue('description');
            description = CombinerFunctions.pre('NormalStr')(description,block,'description','gdsLoader');
            var code = CombinerFunctions.defaultCode('gdsLoader',eval('['+CombinerBlocks['gdsLoader'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id","outputid","description"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["IdStr","IdStr","NormalStr"],
        "omitted": [false,false,true],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return CombinerFunctions.fieldDefault('gdsLoader',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return CombinerFunctions.xmlText('gdsLoader',inputs,next,isShadow,comment,attribute);
        }
    },
    "combinercontent": {
        "type": "statement",
        "json": {
            "type": "combinercontent",
            "message0": "Combiner id %1 output id %2 description %3",
            "args0": [
                Object.assign({},CombinerBlocks.IdStr,{
                    "name": "id",
                    "text": "combiner1"
                }),
                Object.assign({},CombinerBlocks.IdStr,{
                    "name": "outputid",
                    "text": "c1"
                }),
                Object.assign({},CombinerBlocks.NormalStr,{
                    "name": "description",
                    "text": ""
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 220,
            "previousStatement": "combinercontent",
            "nextStatement": CombinerBlocks.contents
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','combinercontent');
            }
            id = CombinerFunctions.pre('IdStr')(id,block,'id','combinercontent');
            var outputid = block.getFieldValue('outputid');
            if (outputid==='') {
                throw new OmitedError(block,'outputid','combinercontent');
            }
            outputid = CombinerFunctions.pre('IdStr')(outputid,block,'outputid','combinercontent');
            var description = block.getFieldValue('description');
            description = CombinerFunctions.pre('NormalStr')(description,block,'description','combinercontent');
            var code = CombinerFunctions.defaultCode('combinercontent',eval('['+CombinerBlocks['combinercontent'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id","outputid","description"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["IdStr","IdStr","NormalStr"],
        "omitted": [false,false,true],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return CombinerFunctions.fieldDefault('combinercontent',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return CombinerFunctions.xmlText('combinercontent',inputs,next,isShadow,comment,attribute);
        }
    },
    "linkBrush": {
        "type": "statement",
        "json": {
            "type": "linkBrush",
            "message0": "link %1 brush2 %2 reverse %3 %4 output ids, using \"\" to skip output %5 (trace, collection out, collection in, %6 centerlines, marks, length) %7 %8",
            "args0": [
                Object.assign({},CombinerBlocks.Linktype_List,{
                    "name": "linktype"
                }),
                Object.assign({},CombinerBlocks.IdStr,{
                    "name": "id",
                    "text": "brush2"
                }),
                Object.assign({},CombinerBlocks.Bool,{
                    "name": "reverse",
                    "checked": false
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_dummy"
                },
                Object.assign({},CombinerBlocks.IdsStr,{
                    "name": "outputid",
                    "text": "trace1,10_0_1,10_0_2,cl_50,marks_ab,tlength1"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 220,
            "previousStatement": "linkBrush",
            "nextStatement": CombinerBlocks.contents
        },
        "generFunc": function(block) {
            var linktype = block.getFieldValue('linktype');
            linktype = CombinerFunctions.pre('Linktype_List')(linktype,block,'linktype','linkBrush');
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','linkBrush');
            }
            id = CombinerFunctions.pre('IdStr')(id,block,'id','linkBrush');
            var reverse = block.getFieldValue('reverse') === 'TRUE';
            reverse = CombinerFunctions.pre('Bool')(reverse,block,'reverse','linkBrush');
            var outputid = block.getFieldValue('outputid');
            if (outputid==='') {
                throw new OmitedError(block,'outputid','linkBrush');
            }
            outputid = CombinerFunctions.pre('IdsStr')(outputid,block,'outputid','linkBrush');
            var code = CombinerFunctions.defaultCode('linkBrush',eval('['+CombinerBlocks['linkBrush'].args.join(',')+']'),block);
            return code;
        },
        "args": ["linktype","id","reverse","outputid"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["Linktype_List","IdStr","Bool","IdsStr"],
        "omitted": [false,false,false,false],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return CombinerFunctions.fieldDefault('linkBrush',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return CombinerFunctions.xmlText('linkBrush',inputs,next,isShadow,comment,attribute);
        }
    },
    "trace": {
        "type": "statement",
        "json": {
            "type": "trace",
            "message0": "trace %1 reverse %2 mirror %3 %4 output ids, using \"\" to skip output %5 (brush, collection out, collection in, %6 centerlines, marks, length) %7 %8",
            "args0": [
                Object.assign({},CombinerBlocks.IdStr,{
                    "name": "traceid",
                    "text": "trace1"
                }),
                Object.assign({},CombinerBlocks.Bool,{
                    "name": "reverse",
                    "checked": false
                }),
                Object.assign({},CombinerBlocks.Bool,{
                    "name": "mirror",
                    "checked": false
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_dummy"
                },
                Object.assign({},CombinerBlocks.IdsStr,{
                    "name": "outputid",
                    "text": "brush2,10_0_1,10_0_2,cl_50,marks_ab,tlength1"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 220,
            "previousStatement": "trace",
            "nextStatement": CombinerBlocks.contents
        },
        "generFunc": function(block) {
            var traceid = block.getFieldValue('traceid');
            if (traceid==='') {
                throw new OmitedError(block,'traceid','trace');
            }
            traceid = CombinerFunctions.pre('IdStr')(traceid,block,'traceid','trace');
            var reverse = block.getFieldValue('reverse') === 'TRUE';
            reverse = CombinerFunctions.pre('Bool')(reverse,block,'reverse','trace');
            var mirror = block.getFieldValue('mirror') === 'TRUE';
            mirror = CombinerFunctions.pre('Bool')(mirror,block,'mirror','trace');
            var outputid = block.getFieldValue('outputid');
            if (outputid==='') {
                throw new OmitedError(block,'outputid','trace');
            }
            outputid = CombinerFunctions.pre('IdsStr')(outputid,block,'outputid','trace');
            var code = CombinerFunctions.defaultCode('trace',eval('['+CombinerBlocks['trace'].args.join(',')+']'),block);
            return code;
        },
        "args": ["traceid","reverse","mirror","outputid"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["IdStr","Bool","Bool","IdsStr"],
        "omitted": [false,false,false,false],
        "multi": [false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return CombinerFunctions.fieldDefault('trace',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return CombinerFunctions.xmlText('trace',inputs,next,isShadow,comment,attribute);
        }
    },
    "component": {
        "type": "statement",
        "json": {
            "type": "component",
            "message0": "%1 output id %2 collection %3 %4 args %5 %6 using %7",
            "args0": [
                Object.assign({},CombinerBlocks.Component_List,{
                    "name": "componentType"
                }),
                Object.assign({},CombinerBlocks.IdsStr,{
                    "name": "outputid",
                    "text": "brush1,brush2"
                }),
                Object.assign({},CombinerBlocks.NormalStr,{
                    "name": "collection",
                    "text": "10_0"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},CombinerBlocks.Evalstr,{
                    "name": "args",
                    "text": "{\"x\":x,\"y\":x+y,\"z\":x+y+z}"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},CombinerBlocks.IdsStr,{
                    "name": "using",
                    "text": "x,y,z"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 220,
            "previousStatement": "component",
            "nextStatement": CombinerBlocks.contents
        },
        "generFunc": function(block) {
            var componentType = block.getFieldValue('componentType');
            componentType = CombinerFunctions.pre('Component_List')(componentType,block,'componentType','component');
            var outputid = block.getFieldValue('outputid');
            outputid = CombinerFunctions.pre('IdsStr')(outputid,block,'outputid','component');
            var collection = block.getFieldValue('collection');
            if (collection==='') {
                throw new OmitedError(block,'collection','component');
            }
            collection = CombinerFunctions.pre('NormalStr')(collection,block,'collection','component');
            var args = block.getFieldValue('args');
            args = CombinerFunctions.pre('Evalstr')(args,block,'args','component');
            var using = block.getFieldValue('using');
            using = CombinerFunctions.pre('IdsStr')(using,block,'using','component');
            var code = CombinerFunctions.defaultCode('component',eval('['+CombinerBlocks['component'].args.join(',')+']'),block);
            return code;
        },
        "args": ["componentType","outputid","collection","args","using"],
        "argsType": ["field","field","field","field","field"],
        "argsGrammarName": ["Component_List","IdsStr","NormalStr","Evalstr","IdsStr"],
        "omitted": [false,true,false,true,true],
        "multi": [false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return CombinerFunctions.fieldDefault('component',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return CombinerFunctions.xmlText('component',inputs,next,isShadow,comment,attribute);
        }
    },
    "forStatement": {
        "type": "statement",
        "json": {
            "type": "forStatement",
            "message0": "for vars %1 start %2 end %3 %4 import %5 %6 content %7 %8 export %9 %10",
            "args0": [
                Object.assign({},CombinerBlocks.IdsStr,{
                    "name": "ids",
                    "text": "ii,jj"
                }),
                Object.assign({},CombinerBlocks.IdsStr,{
                    "name": "svars",
                    "text": "1,ii"
                }),
                Object.assign({},CombinerBlocks.IdsStr,{
                    "name": "evars",
                    "text": "countofedges,2*countofedges"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "imports",
                    "check": "loopdispatch"
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "statement",
                    "check": CombinerBlocks.statements
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "exports",
                    "check": "loopdispatch"
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "forStatement",
            "nextStatement": CombinerBlocks.statements
        },
        "generFunc": function(block) {
            var ids = block.getFieldValue('ids');
            if (ids==='') {
                throw new OmitedError(block,'ids','forStatement');
            }
            ids = CombinerFunctions.pre('IdsStr')(ids,block,'ids','forStatement');
            var svars = block.getFieldValue('svars');
            if (svars==='') {
                throw new OmitedError(block,'svars','forStatement');
            }
            svars = CombinerFunctions.pre('IdsStr')(svars,block,'svars','forStatement');
            var evars = block.getFieldValue('evars');
            if (evars==='') {
                throw new OmitedError(block,'evars','forStatement');
            }
            evars = CombinerFunctions.pre('IdsStr')(evars,block,'evars','forStatement');
            var imports = Blockly.JavaScript.statementToCode(block, 'imports');
            var statement = Blockly.JavaScript.statementToCode(block, 'statement');
            var exports = Blockly.JavaScript.statementToCode(block, 'exports');
            var code = CombinerFunctions.defaultCode('forStatement',eval('['+CombinerBlocks['forStatement'].args.join(',')+']'),block);
            return code;
        },
        "args": ["ids","svars","evars","imports","statement","exports"],
        "argsType": ["field","field","field","statement","statement","statement"],
        "argsGrammarName": ["IdsStr","IdsStr","IdsStr","loopdispatch","statements","loopdispatch"],
        "omitted": [false,false,false,true,true,true],
        "multi": [false,false,false,true,true,true],
        "fieldDefault": function (keyOrIndex) {
            return CombinerFunctions.fieldDefault('forStatement',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return CombinerFunctions.xmlText('forStatement',inputs,next,isShadow,comment,attribute);
        }
    },
    "loopdispatch": {
        "type": "statement",
        "json": {
            "type": "loopdispatch",
            "message0": "%1 %2 as %3",
            "args0": [
                Object.assign({},CombinerBlocks.Keytype_List,{
                    "name": "keytype"
                }),
                Object.assign({},CombinerBlocks.IdsStr,{
                    "name": "id",
                    "text": "ab_{2*ii+1}(_.*),cd_{jj}"
                }),
                Object.assign({},CombinerBlocks.IdsStr,{
                    "name": "value",
                    "text": "ab$1,cd"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 200,
            "previousStatement": "loopdispatch",
            "nextStatement": "loopdispatch"
        },
        "generFunc": function(block) {
            var keytype = block.getFieldValue('keytype');
            keytype = CombinerFunctions.pre('Keytype_List')(keytype,block,'keytype','loopdispatch');
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','loopdispatch');
            }
            id = CombinerFunctions.pre('IdsStr')(id,block,'id','loopdispatch');
            var value = block.getFieldValue('value');
            if (value==='') {
                throw new OmitedError(block,'value','loopdispatch');
            }
            value = CombinerFunctions.pre('IdsStr')(value,block,'value','loopdispatch');
            var code = CombinerFunctions.defaultCode('loopdispatch',eval('['+CombinerBlocks['loopdispatch'].args.join(',')+']'),block);
            return code;
        },
        "args": ["keytype","id","value"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Keytype_List","IdsStr","IdsStr"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return CombinerFunctions.fieldDefault('loopdispatch',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return CombinerFunctions.xmlText('loopdispatch',inputs,next,isShadow,comment,attribute);
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


CombinerFunctions={}

CombinerFunctions.Evalstr_pre = function(str) {
    if (parseFloat(str)+''===str) {
        return parseFloat(str)
    } 
    return str;
}

CombinerFunctions.TryIntStr_pre = function(str) {
    if (parseInt(str)+''===str) {
        return parseInt(str)
    } 
    return str;
}

CombinerBlocks.contents.forEach(blockname => {
    CombinerBlocks[blockname].json.nextStatement=undefined
})
CombinerFunctions.Int_pre = function(intstr) {
    return parseInt(intstr);
}

CombinerFunctions.Number_pre = function(intstr) {
    return parseFloat(intstr);
}

//返回各LexerRule文本域的预处理函数,方便用来统一转义等等
CombinerFunctions.pre = function(LexerId) {
    if (CombinerFunctions.hasOwnProperty(LexerId+'_pre')) {
        return CombinerFunctions[LexerId+'_pre'];
    }
    return function(obj,block,fieldName,blockType){return obj}
}



// CombinerFunctions.fieldDefault
// 根据输入是整数字符串或null
// 第index个或者名字为key的域的默认值, null时返回所有field默认值的数组
CombinerFunctions.fieldDefault = function (ruleName,keyOrIndex) {
    var rule = CombinerBlocks[ruleName];
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



// CombinerFunctions.defaultCode_TEXT
CombinerFunctions.defaultCode_TEXT = function (ruleName,args,block) {
    var rule = CombinerBlocks[ruleName];
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

CombinerFunctions.defaultCode_JSON_TYPE='type'

CombinerFunctions.parserPre={}
CombinerFunctions.parserPre.pre = function(LexerId) {
    if (CombinerFunctions.parserPre.hasOwnProperty(LexerId+'_pre')) {
        return CombinerFunctions.parserPre[LexerId+'_pre'];
    }
    return function(obj,blockObj,fieldName,blockType,index){return obj}
}
/** @class */
CombinerFunctions.parserClass = function (params) {
}
CombinerFunctions.parserClass.prototype.parse = function (obj,next) {
    var blockType = obj[CombinerFunctions.defaultCode_JSON_TYPE]
    var rule = CombinerBlocks[blockType]
    if (CombinerFunctions.parserPre.hasOwnProperty(blockType+'_pre')) {
        obj = CombinerFunctions.parserPre[blockType+'_pre'](obj)
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
            input.push(CombinerFunctions.parserPre.pre(LexerId)(dobj,obj,rule.args[index],blockType,index))
        }
    }
    return rule.xmlText(input,next)
}
CombinerFunctions.parser=new CombinerFunctions.parserClass()
CombinerFunctions.parse=function(obj){
    var xml_text = CombinerFunctions.parser.parse(obj);
    var xml = Blockly.Xml.textToDom('<xml>'+xml_text+'</xml>');
    CombinerFunctions.workspace().clear();
    Blockly.Xml.domToWorkspace(xml, CombinerFunctions.workspace());
}

// CombinerFunctions.defaultCode_JSON
CombinerFunctions.defaultCode_JSON = function (ruleName,args,block) {
    var rule = CombinerBlocks[ruleName];
    var values=args
    var output={}
    var ret=''
    if (rule.type==='statement'||rule.type==='value') {
        output[CombinerFunctions.defaultCode_JSON_TYPE]=rule.json.type
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

// CombinerFunctions.defaultCode
CombinerFunctions.defaultCode=CombinerFunctions.defaultCode_JSON



// CombinerFunctions.xmlText
// 构造这个方法是为了能够不借助workspace,从语法树直接构造图块结构
// inputs的第i个元素是第i个args的xmlText,null或undefined表示空
// next是其下一个语句的xmlText
CombinerFunctions.xmlText = function (ruleName,inputs,next,isShadow,comment,attribute) {
    var rule = CombinerBlocks[ruleName];
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
        if(noinput && inputType==='field' && CombinerBlocks[rule.argsGrammarName[ii]].type!=='field_dropdown') continue;
        if(noinput && inputType==='field') {
            noinput = false;
            input = rule.fieldDefault(rule.args[ii])
        }
        if(noinput) input = '';
        if(inputType==='field' && CombinerBlocks[rule.argsGrammarName[ii]].type==='field_checkbox')input=input?'TRUE':'FALSE';
        if(inputType!=='field') {
            var subList = false;
            var subrulename = rule.argsGrammarName[ii];
            var subrule = CombinerBlocks[subrulename];
            if (subrule instanceof Array) {
                subrulename=subrule[subrule.length-1];
                subrule = CombinerBlocks[subrulename];
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



// CombinerFunctions.blocksIniter
// 把各方块的信息注册到Blockly中
CombinerFunctions.blocksIniter = function(){
    var blocksobj = CombinerBlocks;
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
                var mixinName = 'contextMenu_Combiner_'+value.json.type
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


CombinerFunctions.blocksIniter();


var toolbox = (function(){

    var toolboxXml=document.createElement('xml')

    // 调整这个obj来更改侧边栏和其中的方块
    // 可以直接填 '<block type="xxx">...</block>'
    // 标签 '<label text="标签文本"></label>'
    var toolboxObj = {
        // 每个键值对作为一页
        "statement": [
            // 所有语句块
            CombinerBlocks["combiner"].xmlText(),
            CombinerBlocks["variableDefine"].xmlText(),
            CombinerBlocks["brushDefine"].xmlText(),
            CombinerBlocks["traceDefine"].xmlText(),
            CombinerBlocks["dispatch"].xmlText(),
            CombinerBlocks["evalStatement"].xmlText(),
            CombinerBlocks["structureAt"].xmlText(),
            CombinerBlocks["attachmentTree"].xmlText(),
            CombinerBlocks["gdsLoader"].xmlText(),
            CombinerBlocks["combinercontent"].xmlText(),
            CombinerBlocks["linkBrush"].xmlText(),
            CombinerBlocks["trace"].xmlText(),
            CombinerBlocks["component"].xmlText(),
            CombinerBlocks["forStatement"].xmlText(),
            CombinerBlocks["loopdispatch"].xmlText(),
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
    CombinerFunctions.workspace = function(){return workspace}
    
    function omitedcheckUpdateFunction(event) {
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
    