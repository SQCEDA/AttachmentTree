if (localStorage.getItem('blocklyinput')!=null) {
    try {
        document.querySelector('#blocklyinput').value=localStorage.getItem('blocklyinput')
    } catch (error) {
    }
}

window.buildBlocks=function(params) {
    // console.log('buildBlocks')
    try {
        AttachmentTreeFunctions.parse(eval('('+document.querySelector('#blocklyinput').value+')'))
    } catch (error) {
        if(error.message!=='AttachmentTreeFunctions is not defined')console.error(error)
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
        localStorage.setItem('blocklyinput',document.querySelector('#blocklyinput').value)
    } catch (error) {
    }
    // console.log(params[1])

}