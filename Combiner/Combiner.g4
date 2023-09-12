grammar Combiner;

combiner:   
    statement=statements* 
;

statements
    :   variableDefine
    |   brushDefine
    |   traceDefine
    |   dispatch
    |   structureAt
    |   forStatement
    |   evalStatement
    ;

variableDefine
    :   'variable define id' id=IdStr 'default' value=Evalstr 'description' description=NormalStr? 
/* variableDefine
defaultMap : {id:'armlength',value:50000,description:''}
*/
;

brushDefine
    :   'brush define (id,x,y,angle,widout,widin)' BGNL 
        id=IdStr x=Evalstr y=Evalstr angle=Evalstr widout=Evalstr widin=Evalstr 'description' description=NormalStr? 
/* brushDefine
defaultMap : {id:'brush1',x:50000,y:40000,angle:90,widout:8000,widin:4000,description:''}
*/
;

traceDefine
    :   'trace define id' id=IdStr 'default' value=Evalstr BGNL
        'using' using=IdsStr? 'reverse' reverse=Bool 'mirror' mirror=Bool 'description' description=NormalStr? 
/* traceDefine
defaultMap : {id:'trace2',value:'s x r y,z trace1 s x',using:'x,y,z,trace1',reverse:false,mirror:false,description:''}
*/
;

dispatch
    :   'dispatch' keytype=Keytype_List 'from' id=IdsStr 'to' value=IdsStr
/* dispatch
defaultMap : {id:'ab,cd',value:'bdf@ab,bdf@cd'}
*/
;

evalStatement
    :   'eval' content=NormalStr
/* evalStatement
defaultMap : {content:'print(self.vars["abc"])'}
*/
;


structureAt:  
    'structure at brush' brushid=IdStr 'reverse' reverse=Bool BGNL
    content=contents
/* structureAt
defaultMap : {brushid:'brush1',reverse:false}
*/;



contents
    :   attachmentTree
    |   gdsLoader
    |   combinercontent
    |   linkBrush
    |   trace
    |   component
    ;

attachmentTree:
    'AttachmentTree id' id=IdStr 'output id' outputid=IdStr 'description' description=NormalStr? 
/* attachmentTree
defaultMap : {id:'qubit1',outputid:'q1',description:''}
*/;

gdsLoader:
    'GDSLoader id' id=IdStr 'output id' outputid=IdStr 'description' description=NormalStr? 
/* gdsLoader
defaultMap : {id:'arm1',outputid:'a1',description:''}
*/;

combinercontent:
    'Combiner id' id=IdStr 'output id' outputid=IdStr 'description' description=NormalStr? 
/* combinercontent
defaultMap : {id:'combiner1',outputid:'c1',description:''}
*/;

linkBrush:
    'link' linktype=Linktype_List 'brush2' id=IdStr 'reverse' reverse=Bool BGNL
    'output ids, using "" to skip output' BGNL 
    '(trace, collection out, collection in,' BGNL 
    'centerlines, marks, length)' BGNL
    outputid=IdsStr
/* linkBrush
defaultMap : {id:'brush2',reverse:false,outputid:'trace1,10_0_1,10_0_2,cl_50,marks_ab,tlength1'}
*/;

trace:
    'trace' traceid=IdStr 'reverse' reverse=Bool 'mirror' mirror=Bool BGNL
    'output ids, using "" to skip output' BGNL 
    '(brush, collection out, collection in,' BGNL
    'centerlines, marks, length)' BGNL
    outputid=IdsStr
/* trace
defaultMap : {traceid:'trace1',reverse:false,mirror:false,outputid:'brush2,10_0_1,10_0_2,cl_50,marks_ab,tlength1'}
*/;

component:
    componentType=Component_List 'output id' outputid=IdsStr? 'collection' collection=NormalStr BGNL 'args' args=Evalstr? BGNL 'using' using=IdsStr?
/* component
defaultMap : {collection:"10_0",outputid:'brush1,brush2',args:'{"x":x,"y":x+y,"z":x+y+z}',using:'x,y,z'}
*/;


forStatement
    :   'for vars' ids=IdsStr 'start' svars=IdsStr 'end' evars=IdsStr BGNL
        'import' BGNL
        imports=loopdispatch*
        'content' BGNL
        statement=statements*
        'export' BGNL
        exports=loopdispatch*
/* forStatement
defaultMap : {ids:'ii,jj',svars:'1,ii',evars:'countofedges,2*countofedges'}
*/
;

loopdispatch
    :   keytype=Keytype_List id=IdsStr 'as' value=IdsStr
/* loopdispatch
defaultMap : {id:'ab_{2*ii+1}(_.*),cd_{jj}',value:'ab$1,cd'}
colour: 200
*/
;


statExprSplit : '=== statement ^ === expression v ===' ;

Side_List : '⇖'|'⇗'|'⇘'|'⇙' /*Side_List ['ul','ur','dr','dl']*/ ;
Keytype_List : 'variable'|'trace.length'|'brush'|'collection'|'trace'|'collection.merge'|'marks.merge'|'centerlines.merge' ;
Linktype_List : '45'|'any' ;
Component_List : 'Electrode'|'Connection'|'Narrow'|'InterdigitedCapacitor' ;

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
    if (parseFloat(str)+''===str) {
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

CombinerBlocks.contents.forEach(blockname => {
    CombinerBlocks[blockname].json.nextStatement=undefined
})
*/