// Generated from ComponentPainter.g4 by antlr-blockly
// 语句集合和表达式集合
ComponentPainterBlocks = {
    "statements": [
        "exportSimulation",
        "drawCollection",
        "drawAirBridgeOnCenterlines",
        "drawAirBridgeOnMarks",
        "drawContinueAirBridge",
        "drawBrush",
        "evalStatement"
    ]
}


// 所有域的默认行为
Object.assign(ComponentPainterBlocks,{
    "Actiontype_List": {
        "type": "field_dropdown",
        "options": [
            ["operation","operation"],
            ["regex","regex"]
        ],
        "default": "operation"
    },
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
Object.assign(ComponentPainterBlocks,{
    "componentPainter": {
        "type": "statement",
        "json": {
            "type": "componentPainter",
            "message0": "%1",
            "args0": [
                {
                    "type": "input_statement",
                    "name": "statement",
                    "check": ComponentPainterBlocks.statements
                }
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 260
        },
        "generFunc": function(block) {
            var statement = Blockly.JavaScript.statementToCode(block, 'statement');
            var code = ComponentPainterFunctions.defaultCode('componentPainter',eval('['+ComponentPainterBlocks['componentPainter'].args.join(',')+']'),block);
            return code;
        },
        "args": ["statement"],
        "argsType": ["statement"],
        "argsGrammarName": ["statements"],
        "omitted": [true],
        "multi": [true],
        "fieldDefault": function (keyOrIndex) {
            return ComponentPainterFunctions.fieldDefault('componentPainter',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return ComponentPainterFunctions.xmlText('componentPainter',inputs,next,isShadow,comment,attribute);
        }
    },
    "exportSimulation": {
        "type": "statement",
        "json": {
            "type": "exportSimulation",
            "message0": "exportSimulation",
            "args0": [],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "exportSimulation",
            "nextStatement": ComponentPainterBlocks.statements
        },
        "generFunc": function(block) {
            var code = ComponentPainterFunctions.defaultCode('exportSimulation',eval('['+ComponentPainterBlocks['exportSimulation'].args.join(',')+']'),block);
            return code;
        },
        "args": [],
        "argsType": [],
        "argsGrammarName": [],
        "omitted": [],
        "multi": [],
        "fieldDefault": function (keyOrIndex) {
            return ComponentPainterFunctions.fieldDefault('exportSimulation',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return ComponentPainterFunctions.xmlText('exportSimulation',inputs,next,isShadow,comment,attribute);
        }
    },
    "drawCollection": {
        "type": "statement",
        "json": {
            "type": "drawCollection",
            "message0": "drawCollection %1 collection %2 cell %3 layer( %4 , %5 )",
            "args0": [
                Object.assign({},ComponentPainterBlocks.Actiontype_List,{
                    "name": "op",
                    "default": "regex"
                }),
                Object.assign({},ComponentPainterBlocks.NormalStr,{
                    "name": "collection",
                    "text": "(\\d+)_(\\d+)"
                }),
                Object.assign({},ComponentPainterBlocks.NormalStr,{
                    "name": "cell",
                    "text": "TOP"
                }),
                Object.assign({},ComponentPainterBlocks.TryIntStr,{
                    "name": "l1",
                    "text": "$1"
                }),
                Object.assign({},ComponentPainterBlocks.TryIntStr,{
                    "name": "l2",
                    "text": "$2"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "drawCollection",
            "nextStatement": ComponentPainterBlocks.statements
        },
        "generFunc": function(block) {
            var op = block.getFieldValue('op');
            op = ComponentPainterFunctions.pre('Actiontype_List')(op,block,'op','drawCollection');
            var collection = block.getFieldValue('collection');
            if (collection==='') {
                throw new OmitedError(block,'collection','drawCollection');
            }
            collection = ComponentPainterFunctions.pre('NormalStr')(collection,block,'collection','drawCollection');
            var cell = block.getFieldValue('cell');
            if (cell==='') {
                throw new OmitedError(block,'cell','drawCollection');
            }
            cell = ComponentPainterFunctions.pre('NormalStr')(cell,block,'cell','drawCollection');
            var l1 = block.getFieldValue('l1');
            if (l1==='') {
                throw new OmitedError(block,'l1','drawCollection');
            }
            l1 = ComponentPainterFunctions.pre('TryIntStr')(l1,block,'l1','drawCollection');
            var l2 = block.getFieldValue('l2');
            if (l2==='') {
                throw new OmitedError(block,'l2','drawCollection');
            }
            l2 = ComponentPainterFunctions.pre('TryIntStr')(l2,block,'l2','drawCollection');
            var code = ComponentPainterFunctions.defaultCode('drawCollection',eval('['+ComponentPainterBlocks['drawCollection'].args.join(',')+']'),block);
            return code;
        },
        "args": ["op","collection","cell","l1","l2"],
        "argsType": ["field","field","field","field","field"],
        "argsGrammarName": ["Actiontype_List","NormalStr","NormalStr","TryIntStr","TryIntStr"],
        "omitted": [false,false,false,false,false],
        "multi": [false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return ComponentPainterFunctions.fieldDefault('drawCollection',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return ComponentPainterFunctions.xmlText('drawCollection',inputs,next,isShadow,comment,attribute);
        }
    },
    "drawAirBridgeOnCenterlines": {
        "type": "statement",
        "json": {
            "type": "drawAirBridgeOnCenterlines",
            "message0": "drawAirBridgeOnCenterlines %1 filename %2 centerlines %3 cell %4 %5 newcellname %6 airbridgedistance %7 args %8",
            "args0": [
                {
                    "type": "input_dummy"
                },
                Object.assign({},ComponentPainterBlocks.NormalStr,{
                    "name": "filename",
                    "text": "ab.gds"
                }),
                Object.assign({},ComponentPainterBlocks.NormalStr,{
                    "name": "centerlines",
                    "text": "cl_50_.*"
                }),
                Object.assign({},ComponentPainterBlocks.NormalStr,{
                    "name": "cell",
                    "text": "TOP"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},ComponentPainterBlocks.NormalStr,{
                    "name": "newcellname",
                    "text": "ab_50"
                }),
                Object.assign({},ComponentPainterBlocks.Evalstr,{
                    "name": "airbridgedistance",
                    "text": 50000
                }),
                Object.assign({},ComponentPainterBlocks.NormalStr,{
                    "name": "args",
                    "text": ""
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "drawAirBridgeOnCenterlines",
            "nextStatement": ComponentPainterBlocks.statements
        },
        "generFunc": function(block) {
            var filename = block.getFieldValue('filename');
            if (filename==='') {
                throw new OmitedError(block,'filename','drawAirBridgeOnCenterlines');
            }
            filename = ComponentPainterFunctions.pre('NormalStr')(filename,block,'filename','drawAirBridgeOnCenterlines');
            var centerlines = block.getFieldValue('centerlines');
            if (centerlines==='') {
                throw new OmitedError(block,'centerlines','drawAirBridgeOnCenterlines');
            }
            centerlines = ComponentPainterFunctions.pre('NormalStr')(centerlines,block,'centerlines','drawAirBridgeOnCenterlines');
            var cell = block.getFieldValue('cell');
            if (cell==='') {
                throw new OmitedError(block,'cell','drawAirBridgeOnCenterlines');
            }
            cell = ComponentPainterFunctions.pre('NormalStr')(cell,block,'cell','drawAirBridgeOnCenterlines');
            var newcellname = block.getFieldValue('newcellname');
            if (newcellname==='') {
                throw new OmitedError(block,'newcellname','drawAirBridgeOnCenterlines');
            }
            newcellname = ComponentPainterFunctions.pre('NormalStr')(newcellname,block,'newcellname','drawAirBridgeOnCenterlines');
            var airbridgedistance = block.getFieldValue('airbridgedistance');
            if (airbridgedistance==='') {
                throw new OmitedError(block,'airbridgedistance','drawAirBridgeOnCenterlines');
            }
            airbridgedistance = ComponentPainterFunctions.pre('Evalstr')(airbridgedistance,block,'airbridgedistance','drawAirBridgeOnCenterlines');
            var args = block.getFieldValue('args');
            args = ComponentPainterFunctions.pre('NormalStr')(args,block,'args','drawAirBridgeOnCenterlines');
            var code = ComponentPainterFunctions.defaultCode('drawAirBridgeOnCenterlines',eval('['+ComponentPainterBlocks['drawAirBridgeOnCenterlines'].args.join(',')+']'),block);
            return code;
        },
        "args": ["filename","centerlines","cell","newcellname","airbridgedistance","args"],
        "argsType": ["field","field","field","field","field","field"],
        "argsGrammarName": ["NormalStr","NormalStr","NormalStr","NormalStr","Evalstr","NormalStr"],
        "omitted": [false,false,false,false,false,true],
        "multi": [false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return ComponentPainterFunctions.fieldDefault('drawAirBridgeOnCenterlines',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return ComponentPainterFunctions.xmlText('drawAirBridgeOnCenterlines',inputs,next,isShadow,comment,attribute);
        }
    },
    "drawAirBridgeOnMarks": {
        "type": "statement",
        "json": {
            "type": "drawAirBridgeOnMarks",
            "message0": "drawAirBridgeOnMarks %1 filename %2 marks %3 cell %4 %5 match %6 newcellname %7 args %8",
            "args0": [
                {
                    "type": "input_dummy"
                },
                Object.assign({},ComponentPainterBlocks.NormalStr,{
                    "name": "filename",
                    "text": "ab.gds"
                }),
                Object.assign({},ComponentPainterBlocks.NormalStr,{
                    "name": "marks",
                    "text": "marks_ab_.*"
                }),
                Object.assign({},ComponentPainterBlocks.NormalStr,{
                    "name": "cell",
                    "text": "TOP"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},ComponentPainterBlocks.NormalStr,{
                    "name": "match",
                    "text": "ab"
                }),
                Object.assign({},ComponentPainterBlocks.NormalStr,{
                    "name": "newcellname",
                    "text": "ab_marks"
                }),
                Object.assign({},ComponentPainterBlocks.NormalStr,{
                    "name": "args",
                    "text": ""
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "drawAirBridgeOnMarks",
            "nextStatement": ComponentPainterBlocks.statements
        },
        "generFunc": function(block) {
            var filename = block.getFieldValue('filename');
            if (filename==='') {
                throw new OmitedError(block,'filename','drawAirBridgeOnMarks');
            }
            filename = ComponentPainterFunctions.pre('NormalStr')(filename,block,'filename','drawAirBridgeOnMarks');
            var marks = block.getFieldValue('marks');
            if (marks==='') {
                throw new OmitedError(block,'marks','drawAirBridgeOnMarks');
            }
            marks = ComponentPainterFunctions.pre('NormalStr')(marks,block,'marks','drawAirBridgeOnMarks');
            var cell = block.getFieldValue('cell');
            if (cell==='') {
                throw new OmitedError(block,'cell','drawAirBridgeOnMarks');
            }
            cell = ComponentPainterFunctions.pre('NormalStr')(cell,block,'cell','drawAirBridgeOnMarks');
            var match = block.getFieldValue('match');
            if (match==='') {
                throw new OmitedError(block,'match','drawAirBridgeOnMarks');
            }
            match = ComponentPainterFunctions.pre('NormalStr')(match,block,'match','drawAirBridgeOnMarks');
            var newcellname = block.getFieldValue('newcellname');
            if (newcellname==='') {
                throw new OmitedError(block,'newcellname','drawAirBridgeOnMarks');
            }
            newcellname = ComponentPainterFunctions.pre('NormalStr')(newcellname,block,'newcellname','drawAirBridgeOnMarks');
            var args = block.getFieldValue('args');
            args = ComponentPainterFunctions.pre('NormalStr')(args,block,'args','drawAirBridgeOnMarks');
            var code = ComponentPainterFunctions.defaultCode('drawAirBridgeOnMarks',eval('['+ComponentPainterBlocks['drawAirBridgeOnMarks'].args.join(',')+']'),block);
            return code;
        },
        "args": ["filename","marks","cell","match","newcellname","args"],
        "argsType": ["field","field","field","field","field","field"],
        "argsGrammarName": ["NormalStr","NormalStr","NormalStr","NormalStr","NormalStr","NormalStr"],
        "omitted": [false,false,false,false,false,true],
        "multi": [false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return ComponentPainterFunctions.fieldDefault('drawAirBridgeOnMarks',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return ComponentPainterFunctions.xmlText('drawAirBridgeOnMarks',inputs,next,isShadow,comment,attribute);
        }
    },
    "drawContinueAirBridge": {
        "type": "statement",
        "json": {
            "type": "drawContinueAirBridge",
            "message0": "drawContinueAirBridge %1 centerlines %2 cell %3 %4 layerup %5 layerdown %6 using %7 %8 args %9",
            "args0": [
                {
                    "type": "input_dummy"
                },
                Object.assign({},ComponentPainterBlocks.NormalStr,{
                    "name": "centerlines",
                    "text": "cl_continue_(.*)"
                }),
                Object.assign({},ComponentPainterBlocks.NormalStr,{
                    "name": "cell",
                    "text": "ab_continue"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},ComponentPainterBlocks.TryIntStr,{
                    "name": "layerup",
                    "text": "4_0"
                }),
                Object.assign({},ComponentPainterBlocks.TryIntStr,{
                    "name": "layerdown",
                    "text": "6_0"
                }),
                Object.assign({},ComponentPainterBlocks.IdsStr,{
                    "name": "using",
                    "text": "length_continue_$1"
                }),
                {
                    "type": "input_dummy"
                },
                Object.assign({},ComponentPainterBlocks.NormalStr,{
                    "name": "args",
                    "text": "{\"s1\": 300000, \"s2\": 308500, \"e1\": length_continue_$1-15000, \"e2\": length_continue_$1-15000-8500, \"w1\": 20000, \"w2\": 30000, \"w3\": 40000, \"l1\": 28000, \"l2\": 22000, \"cnum\": 9, \"rounded\": 0, \"roundedNum\": 256}"
                })
            ],
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "drawContinueAirBridge",
            "nextStatement": ComponentPainterBlocks.statements
        },
        "generFunc": function(block) {
            var centerlines = block.getFieldValue('centerlines');
            if (centerlines==='') {
                throw new OmitedError(block,'centerlines','drawContinueAirBridge');
            }
            centerlines = ComponentPainterFunctions.pre('NormalStr')(centerlines,block,'centerlines','drawContinueAirBridge');
            var cell = block.getFieldValue('cell');
            if (cell==='') {
                throw new OmitedError(block,'cell','drawContinueAirBridge');
            }
            cell = ComponentPainterFunctions.pre('NormalStr')(cell,block,'cell','drawContinueAirBridge');
            var layerup = block.getFieldValue('layerup');
            if (layerup==='') {
                throw new OmitedError(block,'layerup','drawContinueAirBridge');
            }
            layerup = ComponentPainterFunctions.pre('TryIntStr')(layerup,block,'layerup','drawContinueAirBridge');
            var layerdown = block.getFieldValue('layerdown');
            if (layerdown==='') {
                throw new OmitedError(block,'layerdown','drawContinueAirBridge');
            }
            layerdown = ComponentPainterFunctions.pre('TryIntStr')(layerdown,block,'layerdown','drawContinueAirBridge');
            var using = block.getFieldValue('using');
            using = ComponentPainterFunctions.pre('IdsStr')(using,block,'using','drawContinueAirBridge');
            var args = block.getFieldValue('args');
            args = ComponentPainterFunctions.pre('NormalStr')(args,block,'args','drawContinueAirBridge');
            var code = ComponentPainterFunctions.defaultCode('drawContinueAirBridge',eval('['+ComponentPainterBlocks['drawContinueAirBridge'].args.join(',')+']'),block);
            return code;
        },
        "args": ["centerlines","cell","layerup","layerdown","using","args"],
        "argsType": ["field","field","field","field","field","field"],
        "argsGrammarName": ["NormalStr","NormalStr","TryIntStr","TryIntStr","IdsStr","NormalStr"],
        "omitted": [false,false,false,false,true,true],
        "multi": [false,false,false,false,false,false],
        "fieldDefault": function (keyOrIndex) {
            return ComponentPainterFunctions.fieldDefault('drawContinueAirBridge',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return ComponentPainterFunctions.xmlText('drawContinueAirBridge',inputs,next,isShadow,comment,attribute);
        }
    },
    "drawBrush": {
        "type": "statement",
        "json": {
            "type": "drawBrush",
            "message0": "drawBrush %1 as name %2",
            "args0": [
                Object.assign({},ComponentPainterBlocks.NormalStr,{
                    "name": "brush",
                    "text": "brush\\d+"
                }),
                Object.assign({},ComponentPainterBlocks.NormalStr,{
                    "name": "name",
                    "text": "$0"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "drawBrush",
            "nextStatement": ComponentPainterBlocks.statements
        },
        "generFunc": function(block) {
            var brush = block.getFieldValue('brush');
            if (brush==='') {
                throw new OmitedError(block,'brush','drawBrush');
            }
            brush = ComponentPainterFunctions.pre('NormalStr')(brush,block,'brush','drawBrush');
            var name = block.getFieldValue('name');
            if (name==='') {
                throw new OmitedError(block,'name','drawBrush');
            }
            name = ComponentPainterFunctions.pre('NormalStr')(name,block,'name','drawBrush');
            var code = ComponentPainterFunctions.defaultCode('drawBrush',eval('['+ComponentPainterBlocks['drawBrush'].args.join(',')+']'),block);
            return code;
        },
        "args": ["brush","name"],
        "argsType": ["field","field"],
        "argsGrammarName": ["NormalStr","NormalStr"],
        "omitted": [false,false],
        "multi": [false,false],
        "fieldDefault": function (keyOrIndex) {
            return ComponentPainterFunctions.fieldDefault('drawBrush',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return ComponentPainterFunctions.xmlText('drawBrush',inputs,next,isShadow,comment,attribute);
        }
    },
    "evalStatement": {
        "type": "statement",
        "json": {
            "type": "evalStatement",
            "message0": "eval %1",
            "args0": [
                Object.assign({},ComponentPainterBlocks.NormalStr,{
                    "name": "content",
                    "text": "print(\"readoutlength:\",self.vars[\"readoutlength\"])"
                })
            ],
            "inputsInline": true,
            "tooltip": "",
            "helpUrl": "",
            "colour": 300,
            "previousStatement": "evalStatement",
            "nextStatement": ComponentPainterBlocks.statements
        },
        "generFunc": function(block) {
            var content = block.getFieldValue('content');
            if (content==='') {
                throw new OmitedError(block,'content','evalStatement');
            }
            content = ComponentPainterFunctions.pre('NormalStr')(content,block,'content','evalStatement');
            var code = ComponentPainterFunctions.defaultCode('evalStatement',eval('['+ComponentPainterBlocks['evalStatement'].args.join(',')+']'),block);
            return code;
        },
        "args": ["content"],
        "argsType": ["field"],
        "argsGrammarName": ["NormalStr"],
        "omitted": [false],
        "multi": [false],
        "fieldDefault": function (keyOrIndex) {
            return ComponentPainterFunctions.fieldDefault('evalStatement',keyOrIndex);
        },
        "menu": [],
        "xmlText": function (inputs,next,isShadow,comment,attribute) {
            return ComponentPainterFunctions.xmlText('evalStatement',inputs,next,isShadow,comment,attribute);
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


ComponentPainterFunctions={}

ComponentPainterFunctions.Evalstr_pre = function(str) {
    if (parseFloat(str)+''===str) {
        return parseFloat(str)
    } 
    return str;
}

ComponentPainterFunctions.TryIntStr_pre = function(str) {
    if (parseInt(str)+''===str) {
        return parseInt(str)
    } 
    return str;
}

// ComponentPainterBlocks.contents.forEach(blockname => {
//     ComponentPainterBlocks[blockname].json.nextStatement=undefined
// })
ComponentPainterFunctions.Int_pre = function(intstr) {
    return parseInt(intstr);
}

ComponentPainterFunctions.Number_pre = function(intstr) {
    return parseFloat(intstr);
}

//返回各LexerRule文本域的预处理函数,方便用来统一转义等等
ComponentPainterFunctions.pre = function(LexerId) {
    if (ComponentPainterFunctions.hasOwnProperty(LexerId+'_pre')) {
        return ComponentPainterFunctions[LexerId+'_pre'];
    }
    return function(obj,block,fieldName,blockType){return obj}
}



// ComponentPainterFunctions.fieldDefault
// 根据输入是整数字符串或null
// 第index个或者名字为key的域的默认值, null时返回所有field默认值的数组
ComponentPainterFunctions.fieldDefault = function (ruleName,keyOrIndex) {
    var rule = ComponentPainterBlocks[ruleName];
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



// ComponentPainterFunctions.defaultCode_TEXT
ComponentPainterFunctions.defaultCode_TEXT = function (ruleName,args,block) {
    var rule = ComponentPainterBlocks[ruleName];
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

ComponentPainterFunctions.defaultCode_JSON_TYPE='type'

ComponentPainterFunctions.parserPre={}
ComponentPainterFunctions.parserPre.pre = function(LexerId) {
    if (ComponentPainterFunctions.parserPre.hasOwnProperty(LexerId+'_pre')) {
        return ComponentPainterFunctions.parserPre[LexerId+'_pre'];
    }
    return function(obj,blockObj,fieldName,blockType,index){return obj}
}
/** @class */
ComponentPainterFunctions.parserClass = function (params) {
}
ComponentPainterFunctions.parserClass.prototype.parse = function (obj,next) {
    var blockType = obj[ComponentPainterFunctions.defaultCode_JSON_TYPE]
    var rule = ComponentPainterBlocks[blockType]
    if (ComponentPainterFunctions.parserPre.hasOwnProperty(blockType+'_pre')) {
        obj = ComponentPainterFunctions.parserPre[blockType+'_pre'](obj)
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
            input.push(ComponentPainterFunctions.parserPre.pre(LexerId)(dobj,obj,rule.args[index],blockType,index))
        }
    }
    return rule.xmlText(input,next)
}
ComponentPainterFunctions.parser=new ComponentPainterFunctions.parserClass()
ComponentPainterFunctions.parse=function(obj){
    var xml_text = ComponentPainterFunctions.parser.parse(obj);
    var xml = Blockly.Xml.textToDom('<xml>'+xml_text+'</xml>');
    ComponentPainterFunctions.workspace().clear();
    Blockly.Xml.domToWorkspace(xml, ComponentPainterFunctions.workspace());
}

// ComponentPainterFunctions.defaultCode_JSON
ComponentPainterFunctions.defaultCode_JSON = function (ruleName,args,block) {
    var rule = ComponentPainterBlocks[ruleName];
    var values=args
    var output={}
    var ret=''
    if (rule.type==='statement'||rule.type==='value') {
        output[ComponentPainterFunctions.defaultCode_JSON_TYPE]=rule.json.type
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

// ComponentPainterFunctions.defaultCode
ComponentPainterFunctions.defaultCode=ComponentPainterFunctions.defaultCode_JSON



// ComponentPainterFunctions.xmlText
// 构造这个方法是为了能够不借助workspace,从语法树直接构造图块结构
// inputs的第i个元素是第i个args的xmlText,null或undefined表示空
// next是其下一个语句的xmlText
ComponentPainterFunctions.xmlText = function (ruleName,inputs,next,isShadow,comment,attribute) {
    var rule = ComponentPainterBlocks[ruleName];
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
        if(noinput && inputType==='field' && ComponentPainterBlocks[rule.argsGrammarName[ii]].type!=='field_dropdown') continue;
        if(noinput && inputType==='field') {
            noinput = false;
            input = rule.fieldDefault(rule.args[ii])
        }
        if(noinput) input = '';
        if(inputType==='field' && ComponentPainterBlocks[rule.argsGrammarName[ii]].type==='field_checkbox')input=input?'TRUE':'FALSE';
        if(inputType!=='field') {
            var subList = false;
            var subrulename = rule.argsGrammarName[ii];
            var subrule = ComponentPainterBlocks[subrulename];
            if (subrule instanceof Array) {
                subrulename=subrule[subrule.length-1];
                subrule = ComponentPainterBlocks[subrulename];
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



// ComponentPainterFunctions.blocksIniter
// 把各方块的信息注册到Blockly中
ComponentPainterFunctions.blocksIniter = function(){
    var blocksobj = ComponentPainterBlocks;
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
                var mixinName = 'contextMenu_ComponentPainter_'+value.json.type
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


ComponentPainterFunctions.blocksIniter();


var toolbox = (function(){

    var toolboxXml=document.createElement('xml')

    // 调整这个obj来更改侧边栏和其中的方块
    // 可以直接填 '<block type="xxx">...</block>'
    // 标签 '<label text="标签文本"></label>'
    var toolboxObj = {
        // 每个键值对作为一页
        "statement": [
            // 所有语句块
            ComponentPainterBlocks["componentPainter"].xmlText(),
            ComponentPainterBlocks["exportSimulation"].xmlText(),
            ComponentPainterBlocks["drawCollection"].xmlText(),
            ComponentPainterBlocks["drawAirBridgeOnCenterlines"].xmlText(),
            ComponentPainterBlocks["drawAirBridgeOnMarks"].xmlText(),
            ComponentPainterBlocks["drawContinueAirBridge"].xmlText(),
            ComponentPainterBlocks["drawBrush"].xmlText(),
            ComponentPainterBlocks["evalStatement"].xmlText(),
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
    ComponentPainterFunctions.workspace = function(){return workspace}
    
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
    