if (localStorage.getItem('PolylineTool')!=null) {
    try {
        document.querySelector('#blocklyinput').value=localStorage.getItem('PolylineTool')
    } catch (error) {
    }
}

window.buildBlocks=function(params) {
    // console.log('buildBlocks')
    try {
        PolylineToolFunctions.parse(eval('('+document.querySelector('#blocklyinput').value.replace(/[<>&]/g, function (c) {
            return {'<': '&lt;', '>': '&gt;', '&': '&amp;'}[c];
        })+')'))
        walker.import(eval('('+document.querySelector('#blocklyinput').value+')'));svgoutput.innerHTML=walker.buildsvg();svgsizefunc();showlinescontent();listensvg();
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
    walker.import(eval('('+document.querySelector('#blocklyinput').value+')'));svgoutput.innerHTML=walker.buildsvg();svgsizefunc();showlinescontent();listensvg();
}

function showlinescontent() {
    document.querySelector('#linesoutput').textContent=JSON.stringify(walker.lines.map(v=>v.map(vv=>vv.map(vvv=>1000*vvv))))
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

function listensvg() {
    let svg = document.getElementById("svgoutput").children[0];

    svg.addEventListener("wheel", function(event) {
        event.preventDefault();

        const scaleFactor = 1.1;
        let direction = (event.deltaY > 0) ? 1 : -1; // 1 means zoom out, -1 means zoom in

        let rect = svg.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let correctedY = rect.height - (event.clientY - rect.top); // Corrected Y coordinate

        let viewBox = svg.viewBox.baseVal;

        // Compute new width and height based on the zoom direction
        let newWidth = (direction > 0) ? viewBox.width * scaleFactor : viewBox.width / scaleFactor;
        let newHeight = (direction > 0) ? viewBox.height * scaleFactor : viewBox.height / scaleFactor;

        // Compute the new x and y based on the mouse position and the change in size
        viewBox.x += (x / svg.clientWidth) * (viewBox.width - newWidth);
        viewBox.y += (correctedY / svg.clientHeight) * (viewBox.height - newHeight); // Use corrected Y

        // Assign the new width and height
        viewBox.width = newWidth;
        viewBox.height = newHeight;

        svg.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);

        window.svgsizefunc=()=>0;walker.viewbox=svgviewbox.value=`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;
    });

    svg.addEventListener("mousemove", function(event) {
        let targetElement = event.target;
    
        let classList = targetElement.classList;
        // console.log(classList, targetElement);

        svgcss.innerHTML=`
        #svgoutput .${classList[0]} {
            stroke:red;
            fill:red;
        }
        #svgoutput path,#svgoutput circle {
            opacity:0.2;
        }
        #svgoutput .c0 path{
            fill-opacity: 1;
        }
        #svgoutput path.${classList[0]},#svgoutput circle.${classList[0]} {
            opacity:1;
        }
        #svgoutput text {
            opacity:0;
        }
        #svgoutput .${classList[0]} text {
            opacity:1;
        }
        `
    
        // Get mouse coordinates within the SVG
        let pt = svg.createSVGPoint();
        pt.x = event.clientX;
        pt.y = event.clientY;
        let svgCoords = pt.matrixTransform(svg.getScreenCTM().inverse());
        mousepos.innerHTML=`(${svgCoords.x.toFixed(3)},${svgCoords.y.toFixed(3)})`
    });

    svg.addEventListener("click", function(event) {
        // Get mouse coordinates within the SVG
        let pt = svg.createSVGPoint();
        pt.x = event.clientX;
        pt.y = event.clientY;
        let svgCoords = pt.matrixTransform(svg.getScreenCTM().inverse());
        mouseposhistory.innerHTML=`(${svgCoords.x.toFixed(3)},${svgCoords.y.toFixed(3)})`+mouseposhistory.innerHTML
    });
}

window.blocklyDoubleClickBlock = function (blockId) {
    var b = PolylineToolFunctions.workspace().getBlockById(blockId);
    var f = 'value'
    var value = b.getFieldValue(f);
    //多行编辑
    editor_multi.multiLineEdit(value, b, f, { 'lint': false }, function (newvalue, b, f) {
        if (false) {
            newvalue = newvalue.split('\n').join('\\n');
        }
        b.setFieldValue(newvalue, f);
    });
}