const fs = require('fs')
const { Converter } = require('./antlr-blockly')

let grammarFile = fs.readFileSync('./AttachmentTree.g4', { encoding: 'utf-8' })
let option = {
    "type": "option",
    "defaultGenerating": "JSON",
    "blocklyRuntime": {
        "type": "blocklyRuntimeStatement",
        "path": "antlr-blockly/",
        "files": "blockly_compressed.js, blocks_compressed.js, javascript_compressed.js, zh-hans.js"
    },
    "blocklyDiv": {
        "type": "fixedSizeBlocklyDiv",
        "id": "blocklyDiv",
        "height": "550px",
        "width": "450px"
    },
    "toolbox": {
        "type": "toolboxDefault",
        "id": "toolbox",
        "gap": 5
    },
    "codeArea": {
        "type": "codeAreaStatement",
        "output": "function(err,data){blocklyinput.value=err?String(err):data;window?.trigger?.call(null,[err,data])}"
    },
    "target": {
        "type": "independentFile"
        // "type": "keepGrammar"
    }
}
let converter = Converter.withOption(grammarFile, option)

function jsContent(params) {
    // ========== mark for split ==========
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
    // ========== mark for split ==========
    window.buildBlocks&&window.buildBlocks()
    // ========== mark for split ==========
}

let jsContents = jsContent.toString().split('// ========== mark for split ==========')
converter.js.checkUpdateFunction = jsContents[1]
converter.js.alldone = jsContents[2]
converter.js._text.push('alldone')

// fs.writeFileSync('blockly.html', converter.html.text(), { encoding: 'utf8' })
fs.writeFileSync('./' + converter.js._name, converter.js.text(), { encoding: 'utf8' })


