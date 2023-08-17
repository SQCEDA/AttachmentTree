grammar Combiner;

combiner:   
    statement=statements* 
;

statements
    :   variableDefine
    |   traceDefine
    |   dispatch
    |   structureAt
    |   evalStatement
    ;

variableDefine
    :   'variable define id' id=IdStr 'default' value=Evalstr 'description' description=NormalStr? 
/* variableDefine
defaultMap : {id:'armlength',value:50000,description:''}
*/
;

traceDefine
    :   'trace define id' id=IdStr 'default' value=Evalstr 'using' using=IdsStr? 'description' description=NormalStr? 
/* traceDefine
defaultMap : {id:'trace1',value:'s x r y,z',using:'x,y,z',description:''}
*/
;

dispatch
    :   'dispatch' keytype=Keytype_List 'from' id=IdsStr 'to' value=Evalstr
/* dispatch
defaultMap : {id:'ab,cd',value:'bdf.ab,bdf.cd'}
*/
;

evalStatement
    :   'eval' content=NormalStr
/* evalStatement
defaultMap : {content:'print(self.vars["abc"])'}
*/
;

structureAt:  
    'structure output ids' id=IdsStr? 
    'at' BGNL place=place
    'content' BGNL content=contents
/* structureAt
defaultMap : {id:'brush1,brush2'}
*/;


place
    :   'position' x=Evalstr y=Evalstr angle=Evalstr #positionplace
/* positionplace
defaultMap : {x:50000,y:40000,angle:45}
colour: 20
*/
    |   'brush' id=IdStr 'reverse' reverse=Bool #brushplace
/* brushplace
defaultMap : {id:'brush1',reverse:false}
colour: 20
*/;

contents
    :   attachmentTree
    |   gdsLoader
    |   linkBrush
    |   trace
    |   component
    ;

attachmentTree:
    'AttachmentTree id' id=IdStr
/* attachmentTree
defaultMap : {id:'qubit1'}
*/;

gdsLoader:
    'GDSLoader id' id=IdStr
/* gdsLoader
defaultMap : {id:'arm1'}
*/;

linkBrush:
    'link' linktype=Linktype_List BGNL
    'brush2' id=IdStr 'reverse' reverse2=Bool
/* linkBrush
defaultMap : {id:'brush2',reverse:false}
*/;

trace:
    'trace' traceid=IdStr 'reverse' reverse=Bool 'mirror' mirror=Bool
/* trace
defaultMap : {traceid:'trace1',reverse:false,mirror:false}
*/;

component:
    componentType=Component_List 'collection' collection=TryIntStr BGNL 'args' args=Evalstr? BGNL 'using' using=IdsStr?
/* component
defaultMap : {collection:1,args:'{"x":x,"y":x+y,"z":x+y+z}',using:'x,y,z'}
*/;

statExprSplit : '=== statement ^ === expression v ===' ;

Side_List : '⇖'|'⇗'|'⇘'|'⇙' /*Side_List ['ul','ur','dr','dl']*/ ;
Keytype_List : 'variable'|'trace.length'|'brush'|'collection'|'trace' ;
Linktype_List : '45'|'any' ;
Component_List : 'Electrode'|'contortion'|'Connection'|'narrow'|'InterdigitedCapacitor' ;

IdStr
    :   'varfas'+ ;
IdsStr
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
this.evisitor.structureAtColor=70;
this.evisitor.shapeColor=130;
// this.evisitor.eventColor=220;
// this.evisitor.soundColor=20;
*/

/* Call_BeforeBlock
// this.block('prog').inputsInline=true;
// this.block('idString_1_e').output='idString_e';
// this.block('idString_2_e').output='idString_e';
this.evisitor.statementRules['contents'].check.forEach(blockname => {
    this.block(blockname).colour=220;
})
*/

/* Insert_FunctionStart

CombinerFunctions.Evalstr_pre = function(str) {
    if (!isNaN(parseFloat(str))) {
        return parseFloat(str)
    } 
    return str;
}

CombinerFunctions.TryIntStr_pre = function(str) {
    if (parseInt(str)+''===str) {
        return parseInt(str)
    } 
    return str;
}

*/