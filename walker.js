/**
 * @class
 */
function walkerType(params) {
    
}

walkerType.prototype.viewbox='-100000 -100000 200000 200000'

walkerType.prototype.import=function (root) {
    this.loadvars(root.define)
    this.walk(root.structure)
    return this
}

walkerType.prototype.buildsvg=function (params) {
    let ret=[]
    for (const key in this.collection) {
        if (Object.hasOwnProperty.call(this.collection, key)) {
            const element = this.collection[key];
            ret.push(`<g class='c${key}'>`)
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
    defineList.forEach(element => {
        if (element.id in this.vars) {
            return
        } else {
            this.vars[element.id]=this.eval(element.value)
        }
    });
}

walkerType.prototype.eval=function (number){
    if (typeof number==='number') {
        return number
    }
    return eval(number.replace(/[a-zA-Z_]+\w+/g,(ii)=>this.vars[ii]))
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
            if (structure.type!='structure') {
                return
            }
            let pos12=[walker.x1,walker.y1,walker.x2,walker.y2]
            let width=walker.eval(structure.width)
            let height=walker.eval(structure.height)

            walker.x1=structure.side[1]=='l'?walker.xx-width:walker.xx
            walker.y1=structure.side[0]=='d'?walker.yy-height:walker.yy
            walker.x2=walker.x1+width
            walker.y2=walker.y1+height

            walker.buildshape(structure.shape,width,height,structure.collection)
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
