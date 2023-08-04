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
        walker.import(eval('('+document.querySelector('#blocklyinput').value+')'));svgoutput.innerHTML=walker.buildsvg();
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
    walker.import(eval('('+document.querySelector('#blocklyinput').value+')'));svgoutput.innerHTML=walker.buildsvg();
}

// document.getElementById('blocklyDiv').onmousewheel = function(e){
//     var workspace=AttachmentTreeFunctions.workspace()
//     //console.log(e);
//     e.preventDefault();
//     var hvScroll = e.shiftKey?'hScroll':'vScroll';
//     var mousewheelOffsetValue=20/380*workspace.scrollbar[hvScroll].handleLength_*3;
//     workspace.scrollbar[hvScroll].handlePosition_+=( ((e.deltaY||0)+(e.detail||0)) >0?mousewheelOffsetValue:-mousewheelOffsetValue);
//     workspace.scrollbar[hvScroll].onScroll_();
//     workspace.setScale(workspace.scale);
// }