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
        buildOnce()
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
    buildOnce()
}

function buildOnce() {
    console.log(new Date().getTime())
    walker.import(eval('('+document.querySelector('#blocklyinput').value+')'));
    // svgoutput.innerHTML=walker.buildsvg();
    svgsizefunc();
    showlinescontent();
    listensvg();
    console.log(new Date().getTime())
    renderer.render( scene, camera );
    console.log(new Date().getTime())
}

function showlinescontent() {
    document.querySelector('#linesoutput').textContent=JSON.stringify(walker.lines.map(v=>v.map(vv=>vv.map(vvv=>1000*vvv))))
}

function autoresizesvg(params) {
    return
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
    const canvas = document.querySelector('#svgoutput canvas');
    

    function onCanvasMouseWheel(event) {
        event.preventDefault();

        const scaleFactor = 1.03;
        let direction = (event.deltaY > 0) ? 1 : -1; // 1 means zoom out, -1 means zoom in

        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let correctedY = rect.height - (event.clientY - rect.top); // Corrected Y coordinate

        let viewBox = {
            width: camera.right- camera.left,
            height: camera.top- camera.bottom,
            x:camera.left,
            y:camera.bottom,
        };

        // Compute new width and height based on the zoom direction
        let newWidth = (direction > 0) ? viewBox.width * scaleFactor : viewBox.width / scaleFactor;
        let newHeight = (direction > 0) ? viewBox.height * scaleFactor : viewBox.height / scaleFactor;

        // Compute the new x and y based on the mouse position and the change in size
        viewBox.x += (x / canvas.clientWidth) * (viewBox.width - newWidth);
        viewBox.y += (correctedY / canvas.clientHeight) * (viewBox.height - newHeight); // Use corrected Y

        // Assign the new width and height
        viewBox.width = newWidth;
        viewBox.height = newHeight;

        camera = new THREE.OrthographicCamera(viewBox.x, viewBox.x+viewBox.width, viewBox.y+viewBox.height, viewBox.y, -1000, 1000)
        window.camera=camera
        camera.position.set(viewBox.x+viewBox.width/2, viewBox.y+viewBox.height/2, 100);
        renderer.render( scene, camera );

        // ?
        // window.svgsizefunc=()=>0;walker.viewbox=svgviewbox.value=`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;

    }
    canvas.addEventListener('wheel', onCanvasMouseWheel);

    canvas.addEventListener("click", function(event) {
        // 获取鼠标在画布上的位置
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let correctedY = rect.height - (event.clientY - rect.top); // Corrected Y coordinate
      
        // 计算鼠标坐标在相机坐标空间中的坐标
        const cameraX = camera.left + x / canvas.clientWidth * (camera.right - camera.left);
        const cameraY = camera.bottom + correctedY / canvas.clientHeight * (camera.top - camera.bottom);
      
        // 打印坐标到控制台
        mouseposhistory.innerHTML=`(${cameraX.toFixed(3)},${cameraY.toFixed(3)})`+mouseposhistory.innerHTML
    });

    canvas.addEventListener("mousemove", function(event) {
        // 获取鼠标在画布上的位置
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let correctedY = rect.height - (event.clientY - rect.top); // Corrected Y coordinate
      
        // 计算鼠标坐标在相机坐标空间中的坐标
        const cameraX = camera.left + x / canvas.clientWidth * (camera.right - camera.left);
        const cameraY = camera.bottom + correctedY / canvas.clientHeight * (camera.top - camera.bottom);
        mousepos.innerHTML=`(${cameraX.toFixed(3)},${cameraY.toFixed(3)})`
    });
    return
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

function threedone(){
    const renderer = new THREE.WebGLRenderer();
    // renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setSize( 500, 500 );
    svgoutput.appendChild( renderer.domElement );

    const camera = new THREE.OrthographicCamera(-25000, 25000, 25000, -25000, -1000, 1000);
    camera.position.set(0, 0, 100);
    camera.lookAt( 0, 0, 0 );


    const scene = new THREE.Scene();
    globalThis.renderer=renderer
    globalThis.camera=camera
    globalThis.scene=scene

    renderer.render( scene, camera );
}
window.THREE?threedone():0;

function pydone() {
    buildOnce()
}
window.pyodide?pydone():0;

if(0){

console.log(new Date().getTime())


const material = new THREE.LineBasicMaterial( { 
    color: 0x0000ff ,
    linewidth: 100,
} );

let xx=walker.vars.xx2d
let yy=walker.vars.yy2d

let structure={line:true}
let loopLength=!structure.line?xx[0].length:xx.length
for (let index = 0; index < loopLength; index++) {
    
    let pts;
    if (!structure.line) {
        pts=xx.map((v,i)=>[xx[i][index],yy[i][index]])
    } else {
        pts=xx[index].map((v,i)=>new THREE.Vector2( xx[index][i], yy[index][i] ))
    }
    const geometry = new THREE.BufferGeometry().setFromPoints( pts );

    const line = new THREE.Line( geometry, material );
    scene.add( line );
    renderer.render( scene, camera );

}
console.log(new Date().getTime())
}
if (0) {
    
const left = -10000;
const right = 10000;
const top = 20000;
const bottom = 0;

const camera = new THREE.OrthographicCamera(left, right, top, bottom, -1000, 1000)
window.camera=camera
camera.position.set((left+right)/2, (top+bottom)/2, 100);
renderer.render( scene, camera );
}
if (0){
/* 
print(time.time())
# wirex = [[] for k in range(917)]
# wirey = [[] for k in range(917)]
lnum=1000
ptnum=50
wirex = [[] for k in range(lnum)]
wirey = [[] for k in range(lnum)]

for ii in range(lnum):
    wirex[ii]=(1000*np.random.rand(ptnum)+np.linspace(-22000,22000,ptnum)).tolist()
    wirey[ii]=(-22000+ii*44000/lnum+1000*np.random.rand(ptnum)).tolist()

vars["xx2d"]=wirex
vars["yy2d"]=wirey
# vars["points"]=signal[:20]
print(time.time())
# print(vars["yy2d"])
     */
}