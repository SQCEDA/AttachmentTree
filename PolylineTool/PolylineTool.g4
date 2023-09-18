grammar PolylineTool;

polylineTool:   
    'define and import' BGNL define=variables* 
    'leaves' BGNL structure=structures* 
;

variables
    :   'id' id=IdStr 'default' value=Evalstr 'description' description=NormalStr? #variable
/* variable
defaultMap : {id:'xx',value:'[0,1,2,3,5]',description:''}
colour : 20
*/
    |   'import brushs' value=Evalstr #importBrushs
/* importBrushs
defaultMap : {value:'[[0,100000],[100000,0]]'}
colour : 20
*/
    |   'none' #variablenone
/* variablenone
colour : 20
*/
;

structurelines:
    'add lines n:' n=Evalstr BGNL pts=point+
/* structurelines
defaultMap : {n:1}
colour : this.structureColor
*/;

point:
    'point' 'x' x=Evalstr 'y' y=Evalstr
/* point
defaultMap : {x:'xx',y:'0'}
colour : 40
*/;

structurefrompts:  
    'collection' collection=NormalStr
    'scale' scale=Evalstr
    'absolute/relative (☑/☐)' absolute=Bool BGNL
    'points' points=NormalStr 
    'leaves' BGNL attachment=attachments* 
/* structurefrompts
defaultMap : {absolute:true,collection:"10_0",scale:1000,points:"0 0 100 0 200 200"}
colour : this.structureColor
*/;

attachments
    :   side=Side_List BGNL structure=structures* #attachment
    |   'none' #attachmentnone
;

structures
    :   structure
    |   structurefrompts
    |   structurelines
    |   structurenone
    ;



structure:  
    side=Side_List 
    'collection' collection=NormalStr
    'width' width=Evalstr
    'height' height=Evalstr BGNL
    shape=shapes
    'leaves' BGNL attachment=attachments* 
/* structure
defaultMap : {width:50000,height:50000,collection:"10_0"}
colour : this.structureColor
*/;



structurenone:  'none'
/* structurenone
colour : this.structureColor
*/;

shapes
    :   brush
    |   arc
    |   quadrilateral
    |   quadrilateraldagger
    |   triangle
    |   rectangle
;

brush: 'brush (id,angle,widout,widin)' brushid=IdStr angle=Evalstr widout=Evalstr widin=Evalstr 
/* brush
default : ['brush1',0,8000,4000]
colour : this.shapeColor
*/;

arc: '◔' side=Side_List 
/* arc
colour : this.shapeColor
*/;

quadrilateral: '▱ (→,↓,←,↑)' ul=Evalstr ur=Evalstr dr=Evalstr dl=Evalstr 
/* quadrilateral
default : [0,0,0,0]
colour : this.shapeColor
*/;

quadrilateraldagger: '▱ (←,↑,→,↓)' ur=Evalstr dr=Evalstr dl=Evalstr ul=Evalstr  
/* quadrilateraldagger
default : [0,0,0,0]
colour : this.shapeColor
*/;

triangle: '◺' side=Side_List
/* triangle
colour : this.shapeColor
*/;

rectangle: '▭'
/* rectangle
colour : this.shapeColor
*/;



statExprSplit : '=== statement ^ === expression v ===' ;

Side_List : '⇖'|'⇗'|'⇘'|'⇙' /*Side_List ['ul','ur','dr','dl']*/ ;

IdStr
    :   'varfas'+ ;
NormalStr
    :   'varfass'+ ;
TryIntStr
    :   'varfass'+ ;
Evalstr
    :   'varfass'+ ;

Int :   [0-9]+ ;
Bool:   'true'|'false' ;
Colour:   'asdfgdh'* ;
BGNL:   'asfvaswvr'? 'asdvaswvr'? ;

MeaningfulSplit : '=== meaningful ^ ===' ;

NEWLINE:'\r'? '\n' ; 
        // return newlines to parser (is end-statement signal)
WS  :   [ \t]+ -> skip ;         // toss out whitespace


/* Call_BeforeType
//this.evisitor.recieveOrder='ORDER_NONE';
// this.evisitor.valueColor=330;
this.evisitor.statementColor=300;
// this.evisitor.entryColor=250;

// this.evisitor.idstring_eColor=310;
this.evisitor.gateArgsColor=220;
this.evisitor.structureColor=70;
this.evisitor.shapeColor=130;
// this.evisitor.eventColor=220;
// this.evisitor.soundColor=20;
*/

/* Call_BeforeBlock
// this.block('prog').inputsInline=true;
// this.block('idString_1_e').output='idString_e';
// this.block('idString_2_e').output='idString_e';
*/

/* Insert_FunctionStart

PolylineToolFunctions.Evalstr_pre = function(str) {
    if (parseFloat(str)+''===str) {
        return parseFloat(str)
    } 
    return str;
}

PolylineToolFunctions.TryIntStr_pre = function(str) {
    if (parseInt(str)+''===str) {
        return parseInt(str)
    } 
    return str;
}

PolylineToolBlocks.shapes.forEach(blockname => {
    PolylineToolBlocks[blockname].json.nextStatement=undefined
})

*/