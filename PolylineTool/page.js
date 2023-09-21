if (localStorage.getItem('PolylineTool')!=null) {
    try {
        document.querySelector('#blocklyinput').value=localStorage.getItem('PolylineTool')
    } catch (error) {
    }
}

window.buildBlocks=function(params) {
    // console.log('buildBlocks')
    try {
        PolylineToolFunctions.parse(eval('('+document.querySelector('#blocklyinput').value+')'))
        walker.import(eval('('+document.querySelector('#blocklyinput').value+')'));svgoutput.innerHTML=walker.buildsvg();svgsizefunc();showlinescontent();
    } catch (error) {
        if(error.message!=='PolylineToolFunctions is not defined')console.error(error)
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
        if(params[1])localStorage.setItem('PolylineTool',document.querySelector('#blocklyinput').value)
    } catch (error) {
    }
    // console.log(params[1])
    walker.import(eval('('+document.querySelector('#blocklyinput').value+')'));svgoutput.innerHTML=walker.buildsvg();svgsizefunc();showlinescontent();
}

function showlinescontent() {
    document.querySelector('#linesoutput').textContent=JSON.stringify(walker.lines)
}

function autoresizesvg(params) {
    bbox=svgoutput.children[0].getBBox();svgoutput.children[0].setAttribute("viewBox", `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
}

window.svgsizefunc=autoresizesvg
// document.getElementById('blocklyDiv').onmousewheel = function(e){
//     var workspace=PolylineToolFunctions.workspace()
//     //console.log(e);
//     e.preventDefault();
//     var hvScroll = e.shiftKey?'hScroll':'vScroll';
//     var mousewheelOffsetValue=20/380*workspace.scrollbar[hvScroll].handleLength_*3;
//     workspace.scrollbar[hvScroll].handlePosition_+=( ((e.deltaY||0)+(e.detail||0)) >0?mousewheelOffsetValue:-mousewheelOffsetValue);
//     workspace.scrollbar[hvScroll].onScroll_();
//     workspace.setScale(workspace.scale);
// }