if (localStorage.getItem('Combiner')!=null) {
    try {
        document.querySelector('#blocklyinput').value=localStorage.getItem('Combiner')
    } catch (error) {
    }
}

window.buildBlocks=function(params) {
    // console.log('buildBlocks')
    try {
        CombinerFunctions.parse(eval('('+document.querySelector('#blocklyinput').value+')'))
    } catch (error) {
        if(error.message!=='CombinerFunctions is not defined')console.error(error);
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
        localStorage.setItem('Combiner',document.querySelector('#blocklyinput').value)
    } catch (error) {
    }
}

