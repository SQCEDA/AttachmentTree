grammar AttachmentTree;

root:   
    'define' BGNL define=variables* 
    'leaves' BGNL attachment=attachments* 
;

variables
    :   'id' id=IdStr 'default' value=Evalstr 'description' description=NormalStr? #variable
/* variable
defaultMap : {id:'armlength',value:50000,description:''}
colour : 20
*/
    |   'none' #variablenone
/* variablenone
colour : 20
*/
;


attachments
    :   side=Side_List BGNL structure=structures* #attachment
    |   'none' #attachmentnone
;

structures
    :   structure
    |   structurenone
    ;

structure:  
    side=Side_List 
    'collection' collection=Int
    'width' width=Evalstr
    'height' height=Evalstr BGNL
    shape=shapes
    'leaves' BGNL attachment=attachments* 
/* structure
defaultMap : {width:50000,height:50000,collection:1}
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
    |   triangle
    |   rectangle
;

brush: 'brush (id,widout,widin,angle)' brushid=IdStr widout=Evalstr widin=Evalstr angle=Evalstr 
/* brush
default : ['brush1',8000,4000,0]
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

AttachmentTreeFunctions.Evalstr_pre = function(str) {
    if (!isNaN(parseFloat(str))) {
        return parseFloat(str)
    } 
    return str;
}

AttachmentTreeBlocks.shapes.forEach(blockname => {
    AttachmentTreeBlocks[blockname].json.nextStatement=undefined
})

*/