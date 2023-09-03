if (localStorage.getItem('ComponentPainter')!=null) {
    try {
        document.querySelector('#blocklyinput').value=localStorage.getItem('ComponentPainter')
    } catch (error) {
    }
}

window.buildBlocks=function(params) {
    // console.log('buildBlocks')
    try {
        ComponentPainterFunctions.parse(eval('('+document.querySelector('#blocklyinput').value+')'))
    } catch (error) {
        if(error.message!=='ComponentPainterFunctions is not defined')console.error(error);
    }
}
window.buildBlocks()

var lastvalue = ['']
window.trigger = function(params) {
    if (params[1]==lastvalue[0]) {
        return
    }
    lastvalue[0]=params[1]
    try {
        localStorage.setItem('ComponentPainter',document.querySelector('#blocklyinput').value)
    } catch (error) {
    }
}

