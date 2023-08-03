// Generated from AttachmentTree.g4 by antlr-blockly

var grammarFile="grammar AttachmentTree;\n\nroot:   \n    'define' BGNL define=variables* \n    'leaves' BGNL attach=attachs* \n;\n\nvariables\n    :   'id' id=IdStr 'default' value=Evalstr 'description' description=NormalStr? #variable\n/* variable\ndefaultMap : {id:'armlength',value:50000,description:''}\ncolour : 20\n*/\n    |   'none' #variablenone\n/* variablenone\ncolour : 20\n*/\n;\n\n\nattachs\n    :   side=Side_List BGNL structure=structures* #attach\n    |   'none' #attachnone\n;\n\nstructures\n    :   structure\n    |   structurenone\n    ;\n\nstructure:  \n    'shape' BGNL shape=shapes\n    'width' width=Evalstr\n    'height' height=Evalstr BGNL\n    'side' side=Side_List \n    'collection' collection=Int BGNL\n    'leaves' BGNL attach=attachs* \n/* structure\ndefaultMap : {width:50000,height:50000,collection:1}\ncolour : this.structureColor\n*/;\n\nstructurenone:  'none'\n/* structurenone\ncolour : this.structureColor\n*/;\n\nshapes\n    :   brush\n    |   arc\n    |   quadrilateral\n    |   triangle\n    |   rectangle\n;\n\nbrush: 'brush (id,widout,widin,angle)' brushid=IdStr widout=Evalstr widin=Evalstr angle=Evalstr \n/* brush\ndefault : ['brush1',8000,4000,0]\ncolour : this.shapeColor\n*/;\n\narc: '◔' side=Side_List \n/* arc\ncolour : this.shapeColor\n*/;\n\nquadrilateral: '▱ (→,↓,←,↑)' ul=Evalstr ur=Evalstr dr=Evalstr dl=Evalstr \n/* quadrilateral\ndefault : [0,0,0,0]\ncolour : this.shapeColor\n*/;\n\ntriangle: '◺' side=Side_List\n/* triangle\ncolour : this.shapeColor\n*/;\n\nrectangle: '▭'\n/* rectangle\ncolour : this.shapeColor\n*/;\n\n\n\nstatExprSplit : '=== statement ^ === expression v ===' ;\n\nSide_List : '⇖'|'⇗'|'⇘'|'⇙' /*Side_List ['ul','ur','dr','dl']*/ ;\n\nIdStr\n    :   'varfas'+ ;\nNormalStr\n    :   'varfass'+ ;\nEvalstr\n    :   'varfass'+ ;\n\nInt :   [0-9]+ ;\nBool:   'true'|'false' ;\nColour:   'asdfgdh'* ;\nBGNL:   'asfvaswvr'? 'asdvaswvr'? ;\n\nMeaningfulSplit : '=== meaningful ^ ===' ;\n\nNEWLINE:'\\r'? '\\n' ; \n        // return newlines to parser (is end-statement signal)\nWS  :   [ \\t]+ -> skip ;         // toss out whitespace\n\n\n/* Call_BeforeType\n//this.evisitor.recieveOrder='ORDER_NONE';\n// this.evisitor.valueColor=330;\nthis.evisitor.statementColor=300;\n// this.evisitor.entryColor=250;\n\n// this.evisitor.idstring_eColor=310;\nthis.evisitor.gateArgsColor=220;\nthis.evisitor.structureColor=70;\nthis.evisitor.shapeColor=130;\n// this.evisitor.eventColor=220;\n// this.evisitor.soundColor=20;\n*/\n\n/* Call_BeforeBlock\n// this.block('prog').inputsInline=true;\n// this.block('idString_1_e').output='idString_e';\n// this.block('idString_2_e').output='idString_e';\n*/\n\n/* Insert_FunctionStart\n\nAttachmentTreeFunctions.Evalstr_pre = function(str) {\n    if (~~str+''===str) {\n        return ~~str\n    } \n    return str;\n}\n\nAttachmentTreeBlocks.shapes.forEach(blockname => {\n    AttachmentTreeBlocks[blockname].json.nextStatement=undefined\n})\n\n*/";
var option={"type":"option","defaultGenerating":"JSON","blocklyRuntime":{"type":"blocklyRuntimeStatement","path":"antlr-blockly/","files":"blockly_compressed.js, blocks_compressed.js, javascript_compressed.js, zh-hans.js"},"blocklyDiv":{"type":"fixedSizeBlocklyDiv","id":"blocklyDiv","height":"550px","width":"450px"},"toolbox":{"type":"toolboxDefault","id":"toolbox","gap":5},"codeArea":{"type":"codeAreaStatement","output":"function(err,data){blocklyinput.value=err?String(err):data;window?.trigger?.call(null,[err,data])}"},"target":{"type":"keepGrammar"}};
option.target.type="independentFile";
var converter = Converter.withOption(grammarFile,option);
var script = document.createElement('script');
script.innerHTML = converter.js.text();
document.body.appendChild(script);

    window.buildBlocks&&window.buildBlocks()
    