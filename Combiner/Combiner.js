// Generated from Combiner.g4 by antlr-blockly
// 语句集合和表达式集合
CombinerBlocks = {
    "statements": [
        "variableDefine",
        "traceDefine",
        "dispatch",
        "evalStatement",
        "structureAt"
    ],
    "place": [
        "brushplace",
        "positionplace"
    ],
    "contents": [
        "attachmentTree",
        "gdsLoader",
        "linkBrush",
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
    "IdStr": {
        "type": "field_input",
        "text": "IdStr_default"
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
            "message0": "id %1 default %2 description %3",
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
    "traceDefine": {
        "type": "statement",
        "json": {
            "type": "traceDefine",
            "message0": "id %1 default %2 description %3",
            "args0": [
                Object.assign({},CombinerBlocks.IdStr,{
                    "name": "id",
                    "text": "trace1"
                }),
                Object.assign({},CombinerBlocks.Evalstr,{
                    "name": "value",
                    "text": "s armlength"
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
            var description = block.getFieldValue('description');
            description = CombinerFunctions.pre('NormalStr')(description,block,'description','traceDefine');
            var code = CombinerFunctions.defaultCode('traceDefine',eval('['+CombinerBlocks['traceDefine'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id","value","description"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["IdStr","Evalstr","NormalStr"],
        "omitted": [false,false,true],
        "multi": [false,false,false],
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
            "message0": "from %1 to %2",
            "args0": [
                Object.assign({},CombinerBlocks.IdStr,{
                    "name": "id",
                    "text": "ab"
                }),
                Object.assign({},CombinerBlocks.Evalstr,{
                    "name": "value",
                    "text": "bdf.ab"
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
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','dispatch');
            }
            id = CombinerFunctions.pre('IdStr')(id,block,'id','dispatch');
            var value = block.getFieldValue('value');
            if (value==='') {
                throw new OmitedError(block,'value','dispatch');
            }
            value = CombinerFunctions.pre('Evalstr')(value,block,'value','dispatch');
            var code = CombinerFunctions.defaultCode('dispatch',eval('['+CombinerBlocks['dispatch'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id","value"],
        "argsType": ["field","field"],
        "argsGrammarName": ["IdStr","Evalstr"],
        "omitted": [false,false],
        "multi": [false,false],
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
            "message0": "id %1 at %2 %3 content %4 %5",
            "args0": [
                Object.assign({},CombinerBlocks.IdStr,{
                    "name": "id"
                }),
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "place",
                    "check": CombinerBlocks.place
                },
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
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','structureAt');
            }
            id = CombinerFunctions.pre('IdStr')(id,block,'id','structureAt');
            var place = Blockly.JavaScript.statementToCode(block, 'place');
            if(block.getInputTargetBlock('place') && 
                block.getInputTargetBlock('place').getNextBlock())
                throw new MultiStatementError(block,'place','structureAt');
            if (place==='') {
                throw new OmitedError(block,'place','structureAt');
            }
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
        "args": ["id","place","content"],
        "argsType": ["field","statement","statement"],
        "argsGrammarName": ["IdStr","place","contents"],
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
    "brushplace": {
        "type": "statement",
        "json": {
            "type": "brushplace",
            "message0": "brush %1",
            "args0": [
                Object.assign({},CombinerBlocks.IdStr,{
                    "name": "id"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "brushplace",
            "nextStatement": CombinerBlocks.place
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','brushplace');
            }
            id = CombinerFunctions.pre('IdStr')(id,block,'id','brushplace');
            var code = CombinerFunctions.defaultCode('brushplace',eval('['+CombinerBlocks['brushplace'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id"],
        "argsType": ["field"],
        "argsGrammarName": ["IdStr"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return CombinerFunctions.fieldDefault('brushplace',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return CombinerFunctions.xmlText('brushplace',inputs,next,isShadow,comment,attribute);
        }
    },
    "positionplace": {
        "type": "statement",
        "json": {
            "type": "positionplace",
            "message0": "position %1 %2 %3",
            "args0": [
                Object.assign({},CombinerBlocks.Evalstr,{
                    "name": "x"
                }),
                Object.assign({},CombinerBlocks.Evalstr,{
                    "name": "y"
                }),
                Object.assign({},CombinerBlocks.Evalstr,{
                    "name": "angle"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "positionplace",
            "nextStatement": CombinerBlocks.place
        },
        "generFunc": function(block) {
            var x = block.getFieldValue('x');
            if (x==='') {
                throw new OmitedError(block,'x','positionplace');
            }
            x = CombinerFunctions.pre('Evalstr')(x,block,'x','positionplace');
            var y = block.getFieldValue('y');
            if (y==='') {
                throw new OmitedError(block,'y','positionplace');
            }
            y = CombinerFunctions.pre('Evalstr')(y,block,'y','positionplace');
            var angle = block.getFieldValue('angle');
            if (angle==='') {
                throw new OmitedError(block,'angle','positionplace');
            }
            angle = CombinerFunctions.pre('Evalstr')(angle,block,'angle','positionplace');
            var code = CombinerFunctions.defaultCode('positionplace',eval('['+CombinerBlocks['positionplace'].args.join(',')+']'),block);
            return code;
        },
        "args": ["x","y","angle"],
        "argsType": ["field","field","field"],
        "argsGrammarName": ["Evalstr","Evalstr","Evalstr"],
        "omitted": [false,false,false],
        "multi": [false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return CombinerFunctions.fieldDefault('positionplace',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return CombinerFunctions.xmlText('positionplace',inputs,next,isShadow,comment,attribute);
        }
    },
    "attachmentTree": {
        "type": "statement",
        "json": {
            "type": "attachmentTree",
            "message0": "id %1",
            "args0": [
                Object.assign({},CombinerBlocks.IdStr,{
                    "name": "id"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "attachmentTree",
            "nextStatement": CombinerBlocks.contents
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','attachmentTree');
            }
            id = CombinerFunctions.pre('IdStr')(id,block,'id','attachmentTree');
            var code = CombinerFunctions.defaultCode('attachmentTree',eval('['+CombinerBlocks['attachmentTree'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id"],
        "argsType": ["field"],
        "argsGrammarName": ["IdStr"],
        "omitted": [false],
        "multi": [false],
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
            "message0": "id %1",
            "args0": [
                Object.assign({},CombinerBlocks.IdStr,{
                    "name": "id"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "gdsLoader",
            "nextStatement": CombinerBlocks.contents
        },
        "generFunc": function(block) {
            var id = block.getFieldValue('id');
            if (id==='') {
                throw new OmitedError(block,'id','gdsLoader');
            }
            id = CombinerFunctions.pre('IdStr')(id,block,'id','gdsLoader');
            var code = CombinerFunctions.defaultCode('gdsLoader',eval('['+CombinerBlocks['gdsLoader'].args.join(',')+']'),block);
            return code;
        },
        "args": ["id"],
        "argsType": ["field"],
        "argsGrammarName": ["IdStr"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return CombinerFunctions.fieldDefault('gdsLoader',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return CombinerFunctions.xmlText('gdsLoader',inputs,next,isShadow,comment,attribute);
        }
    },
    "linkBrush": {
        "type": "statement",
        "json": {
            "type": "linkBrush",
            "message0": "brush1 %1 reverse %2 %3 brush2 %4 reverse %5",
            "args0": [
                Object.assign({},CombinerBlocks.IdStr,{
                    "name": "brush1"
                }),
                Object.assign({},CombinerBlocks.Bool,{
                    "name": "reverse1"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},CombinerBlocks.IdStr,{
                    "name": "brush2"
                }),
                Object.assign({},CombinerBlocks.Bool,{
                    "name": "reverse2"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "linkBrush",
            "nextStatement": CombinerBlocks.contents
        },
        "generFunc": function(block) {
            var brush1 = block.getFieldValue('brush1');
            if (brush1==='') {
                throw new OmitedError(block,'brush1','linkBrush');
            }
            brush1 = CombinerFunctions.pre('IdStr')(brush1,block,'brush1','linkBrush');
            var reverse1 = block.getFieldValue('reverse1') === 'TRUE';
            reverse1 = CombinerFunctions.pre('Bool')(reverse1,block,'reverse1','linkBrush');
            var brush2 = block.getFieldValue('brush2');
            if (brush2==='') {
                throw new OmitedError(block,'brush2','linkBrush');
            }
            brush2 = CombinerFunctions.pre('IdStr')(brush2,block,'brush2','linkBrush');
            var reverse2 = block.getFieldValue('reverse2') === 'TRUE';
            reverse2 = CombinerFunctions.pre('Bool')(reverse2,block,'reverse2','linkBrush');
            var code = CombinerFunctions.defaultCode('linkBrush',eval('['+CombinerBlocks['linkBrush'].args.join(',')+']'),block);
            return code;
        },
        "args": ["brush1","reverse1","brush2","reverse2"],
        "argsType": ["field","field","field","field"],
        "argsGrammarName": ["IdStr","Bool","IdStr","Bool"],
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
    "component": {
        "type": "statement",
        "json": {
            "type": "component",
            "message0": "contortion Electrode Connection narrow trace etc. InterdigitedCapacitor",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "component",
            "nextStatement": CombinerBlocks.contents
        },
        "generFunc": function(block) {
            var code = CombinerFunctions.defaultCode('component',eval('['+CombinerBlocks['component'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return CombinerFunctions.fieldDefault('component',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return CombinerFunctions.xmlText('component',inputs,next,isShadow,comment,attribute);
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
    if (!isNaN(parseFloat(str))) {
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
            CombinerBlocks["traceDefine"].xmlText(),
            CombinerBlocks["dispatch"].xmlText(),
            CombinerBlocks["evalStatement"].xmlText(),
            CombinerBlocks["structureAt"].xmlText(),
            CombinerBlocks["brushplace"].xmlText(),
            CombinerBlocks["positionplace"].xmlText(),
            CombinerBlocks["attachmentTree"].xmlText(),
            CombinerBlocks["gdsLoader"].xmlText(),
            CombinerBlocks["linkBrush"].xmlText(),
            CombinerBlocks["component"].xmlText(),
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
    