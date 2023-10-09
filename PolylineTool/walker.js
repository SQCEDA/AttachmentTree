/**
 * @class
 */
function walkerType(params) {
    this.display={
        "type": "display",
        "line": 100,
        "point": 300,
        "text": 1200
    }
}

walkerType.prototype.viewbox='-100000 -100000 200000 200000'

walkerType.prototype.import=function (root) {
    this.display=root.display
    this.loadvars(root.define)
    this.walk(root.structure)
    return this
}

walkerType.prototype.buildsvg=function (params) {
    let ret=[]
    let cnum=[0]
    // //test
    // this.line([0,0],[100000,100000])
    // this.point([0,0])
    // this.point([100000,100000])
    // //test
    for (const key in this.collection) {
        if (Object.hasOwnProperty.call(this.collection, key)) {
            const element = this.collection[key];
            ret.push(`<g class='c${cnum[0]} cn${key}'>`)
            cnum[0]+=1
            ret.push(element.join('\n'))
            ret.push('</g>')
        }
    }
    let svgstr=`<svg font-family="sans-serif" viewBox="${this.viewbox}" xmlns:xlink="http://www.w3.org/1999/xlink" text-decoration="none"
    font-style="normal" width="100%" xmlns="http://www.w3.org/2000/svg" font-size="1vw" version="1.1"
    font-weight="normal"><g>${ret.join('\n')}</g></svg>`
    this.svgstr=svgstr
    return svgstr
}

walkerType.prototype.loadvars=function (defineList) {
    this.vars={}
    this.points=[]
    this.lines=[]
    defineList.forEach(element => {
        if (element.type=='variable') {
            
            if (element.id in this.vars) {
                return
            } else {
                this.vars[element.id]=this.eval(element.value)
            }
        }
        if (element.type=='arrayAction') {
            this.vars[element.id]=this.vars[element.id]||[]

            for (let index = element.n1||0; index < element.n; index++) {
                walker.vars.index=index
                this.vars[element.id][index]=this.eval(element.value,index)
            }
            
        }
        if (element.type=='evalAction') {
            eval(element.value)
        }
        if (element.type=='pyAction') {
            if (window.pyodide==null) {
                console.log('numpy has not loaded')
                return
            }
            window.vars=JSON.stringify(this.vars)
            window.pyodide.runPython('vars=json.loads(js.vars.replace("null","NaN"))\nfor k in vars:vars[k]=np.array(vars[k])\n'+element.value+'\nfor k in vars:vars[k]=np.array(vars[k]).tolist()\njs.vars=json.dumps(vars).replace("NaN","null")')
            this.vars=JSON.parse(window.vars)
        }
        if (element.type=='importBrushs') {
            
            let pts=this.eval(element.value)
            this.points=this.points.concat(pts)
            
        }
    });
}

walkerType.prototype.eval=function (number,k){
    if (typeof number==='number') {
        return number
    }
    if (k==null) {
        return eval(number.replace(/[a-zA-Z_]+\w+/g,(ii)=>ii in this.vars?this.vars[ii]:ii))
    }
    return eval(number.replace(/[a-zA-Z_]+\w+/g,(ii)=>{
        return ii in this.vars?(this.vars[ii].hasOwnProperty(k)?this.vars[ii][k]:this.vars[ii]):ii
        // return ii in this.vars?this.vars[ii][k]:ii
    }))
}

walkerType.prototype.line=function (p1,p2,group) {
    var sstr=`<path d="M ${p1[0]} ${p1[1]} L ${p2[0]} ${p2[1]}" stroke="blue" stroke-width="${this.display.line}" fill="none" class="g${group}" />`
    this.addto(sstr,'line')
}

walkerType.prototype.point=function (p1,group) {
    var sstr=`<circle stroke="none" pointer-events="none" cy="${p1[1]}" cx="${p1[0]}" r="${this.display.point}" fill="#000" class="g${group}" ></circle>`
    this.addto(sstr,'point')
    var sstr=`<g font-size="${this.display.text}" font="sans-serif" fill="black" stroke="none" text-anchor="middle" class="g${group}" ><text x="${p1[0]}" y="${p1[1]}" dy="${-2*p1[1]-this.display.text/2}" style="transform: scale(1,-1)">${p1[0]},${p1[1]}</text></g>`
    this.addto(sstr,'text')
}

walkerType.prototype.addto=function (shape,collection) {
    this.collection[collection]=this.collection[collection]||[]
    this.collection[collection].push(shape)
}

walkerType.prototype.walk = function(structures){
    this.xx=0
    this.yy=0
    this.x1=0
    this.y1=0
    this.x2=0
    this.y2=0
    this.collection={}
    this.points.forEach(v=>this.point(v))
    this.traversal([
        {
            "type": "attachment",
            "side": "ul",
            "structure": structures
        }
    ])
}

walkerType.prototype.traversal = function(attachments){
    let walker=this
    let pos=[walker.xx,walker.yy]

    attachments.forEach(attachment => {
        if (attachment.type!='attachment') {
            return
        }
        walker.xx = attachment.side[1]=='l'?walker.x1:walker.x2 
        walker.yy = attachment.side[0]=='d'?walker.y1:walker.y2 
        attachment.structure.forEach(structure =>{
            if (structure.type=='structurenone') {
                return
            }
            let pos12=[walker.x1,walker.y1,walker.x2,walker.y2]
            if (structure.type=='structure') {
                let width=walker.eval(structure.width)
                let height=walker.eval(structure.height)
    
                walker.x1=structure.side[1]=='l'?walker.xx-width:walker.xx
                walker.y1=structure.side[0]=='d'?walker.yy-height:walker.yy
                walker.x2=walker.x1+width
                walker.y2=walker.y1+height
    
                walker.buildshape(structure.shape,width,height,structure.collection)
            } 
            if (structure.type=='structurelines') {
                for (let index = structure.n1||0; index < structure.n; index++) {
                    walker.vars.index=index
                    let pts=structure.pts.map(v=>[walker.eval(v.x,index),walker.eval(v.y,index)])
                    pts=pts.filter(v=>v[0]!=null&&v[1]!=null)
                    walker.point(pts[0],index)
                    walker.point(pts[pts.length-1],index)
                    pts.forEach((v,i)=>{
                        if (i==0) return;
                        walker.line(pts[i-1],v,index)
                    })
                    walker.lines.push(pts)
                }
                return
            }
            if (structure.type=='structure2darraylines') {
                let xx=walker.vars[structure.x]
                let yy=walker.vars[structure.y]
                for (let index = 0; index < xx[0].length; index++) {
                    walker.vars.index=index
                    let pts=xx.map((v,i)=>[xx[i][index],yy[i][index]])
                    pts=pts.filter(v=>v[0]!=null&&v[1]!=null)
                    walker.point(pts[0],index)
                    walker.point(pts[pts.length-1],index)
                    pts.forEach((v,i)=>{
                        if (i==0) return;
                        walker.line(pts[i-1],v,index)
                    })
                    walker.lines.push(pts)
                }
                return
            }
            if (structure.type=='structurefrompts') {  
                let ptsstr=structure.points.split(/[\s,]+/g)
                let pts=[]
                walker.x1=walker.y1=Infinity
                walker.x2=walker.y2=-Infinity
                let scale=walker.eval(structure.scale)
                while (ptsstr.length) {
                    let xx=walker.xx+scale*walker.eval(ptsstr.shift())
                    let yy=walker.yy+scale*walker.eval(ptsstr.shift())
                    walker.x1=Math.min(walker.x1,xx)
                    walker.x2=Math.max(walker.x2,xx)
                    walker.y1=Math.min(walker.y1,yy)
                    walker.y2=Math.max(walker.y2,yy)
                    if (!structure.absolute) {
                        walker.xx=xx
                        walker.yy=yy
                    }
                    pts.push([xx,yy])
                }
                pts=pts.map(v=>'L'+v.join(','))
                pts[0]=' '+pts[0].slice(1)
                var sstr=`<path stroke="none" d="M${pts.join('')}Z" />`
                walker.addto(sstr,structure.collection)
            }

            walker.traversal(structure.attachment)
            
            ;[walker.x1,walker.y1,walker.x2,walker.y2]=pos12;
            
        })
    });

    [walker.xx,walker.yy]=pos
}

walkerType.prototype.buildshape = function(shape,width,height,collection){
    switch (shape.type) {
        case 'brush':
            var sstr=`<circle stroke="none" pointer-events="none" cy="${this.y1/2+this.y2/2}" cx="${this.x1/2+this.x2/2}" r="3000" fill="#000"></circle>`
            break;
        case 'arc':
            var pts=[
                [this.x1,this.y2],
                [this.x2,this.y2],
                [this.x2,this.y1],
                [this.x1,this.y1],
                [this.x1,this.y2],
                [this.x2,this.y2],
                [this.x2,this.y1],
                [this.x1,this.y1],
                [this.x1,this.y2],
                [this.x2,this.y2],
                [this.x2,this.y1],
                [this.x1,this.y1],
            ]
            var ptsi=({"ul": 0, "ur": 1,"dr": 2,"dl":3}[shape.side])
            pts=pts.splice(ptsi+1,4).map(v=>'L'+v.join(','))
            pts[0]=' '+pts[0].slice(1)
            pts[1]='Q'+pts[1].slice(1)
            pts[2]=' '+pts[2].slice(1)
            var sstr=`<path stroke="none" d="M${pts.join('')}Z" />`
            break;
        case 'quadrilateral':
            var sstr=`<path stroke="none" d="M${this.x1+this.eval(shape.ul)},${this.y2}l${width-this.eval(shape.ul)},${-this.eval(shape.ur)}l${-this.eval(shape.dr)},${-height+this.eval(shape.ur)}l${-width+this.eval(shape.dr)},${this.eval(shape.dl)}Z" />`
            break;
        case 'quadrilateraldagger':
            var sstr=`<path stroke="none" d="M${this.x2-this.eval(shape.ur)},${this.y2}l${this.eval(shape.ur)},${this.eval(shape.dr)-height}l${this.eval(shape.dl)-width},${-this.eval(shape.dr)}l${-this.eval(shape.dl)},${height-this.eval(shape.ul)}Z" />`
            break;
        case 'triangle':
            var pts=[
                [this.x1,this.y2],
                [this.x2,this.y2],
                [this.x2,this.y1],
                [this.x1,this.y1],
                [this.x1,this.y2],
                [this.x2,this.y2],
                [this.x2,this.y1],
                [this.x1,this.y1],
                [this.x1,this.y2],
                [this.x2,this.y2],
                [this.x2,this.y1],
                [this.x1,this.y1],
            ]
            var ptsi=({"ul": 0, "ur": 1,"dr": 2,"dl":3}[shape.side])
            pts=pts.splice(ptsi+3,3).map(v=>'L'+v.join(','))
            pts[0]=' '+pts[0].slice(1)
            var sstr=`<path stroke="none" d="M${pts.join('')}Z" />`
            break;
    
        default:// 'rectangle'
            var sstr=`<path stroke="none" d="M${this.x1},${this.y2}l${width},0l0,${-height}l${-width},0Z" />`
            break;
    }
    this.addto(sstr,collection)
}

var walker=new walkerType()
// walker.import(eval('('+document.querySelector('#blocklyinput').value+')'));document.body.insertAdjacentHTML('beforeend',walker.buildsvg())
// walker.import(eval('('+document.querySelector('#blocklyinput').value+')'));svgoutput.innerHTML=walker.buildsvg()


// 鼠标悬停看线+坐标(坐标默认不显示):让线看清楚,颜色或透明度
// 缩放