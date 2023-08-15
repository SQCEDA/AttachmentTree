grammar Combiner;

root:   
    statement=statements* 
;

statements
    :   variabledefine
    |   tracedefine
    |   dispatch
    |   evalstatement
    |   structure
    ;

variabledefine
    :   'id' id=IdStr 'default' value=Evalstr 'description' description=NormalStr? 
/* variabledefine
defaultMap : {id:'armlength',value:50000,description:''}
*/
;

tracedefine
    :   'id' id=IdStr 'default' value=Evalstr 'description' description=NormalStr? 
/* tracedefine
defaultMap : {id:'trace1',value:'s armlength',description:''}
*/
;

dispatch
    :   'from' id=IdStr 'to' value=Evalstr
/* dispatch
defaultMap : {id:'trace1',value:'s armlength'}
*/
;

evalstatement
    :   'eval' content=NormalStr
/* evalstatement
defaultMap : {content:'print(self.vars["abc"])'}
*/
;

structure:  
    'id' id=IdStr 
    'at' place=place
    content=contents
/* structure
defaultMap : {}
colour : this.structureColor
*/;


place
    :   'brush' id=IdStr #brushplace
    |   'position' x=Evalstr y=Evalstr angle=Evalstr #positionplace
    ;

contents
    :   attachmentTree
    |   gdsLoader
    |   linkBrush
    |   component
    ;

attachmentTree:
    'id' id=IdStr
;

gdsLoader:
    'id' id=IdStr
;

linkBrush:
    'brush1' brush1=IdStr 'reverse' reverse1=Bool BGNL
    'brush2' brush2=IdStr 'reverse' reverse2=Bool
;

component:
    'contortion' 'Electrode' 'Connection' 'narrow' 'trace' 'etc.' 'InterdigitedCapacitor'
;

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

CombinerBlocks.shapes.forEach(blockname => {
    CombinerBlocks[blockname].json.nextStatement=undefined
})

*/