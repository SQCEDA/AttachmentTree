grammar ComponentPainter;

componentPainter:   
    statement=statements* 
;

statements
    :   collectionAction
    |   exportSimulation
    |   drawAirBridge
    |   drawCollection
    |   evalStatement
    ;

collectionAction
    :   'collectionAction'
;

exportSimulation
    :   'exportSimulation'
;

drawAirBridge
    :   'drawAirBridge'
;

drawCollection
    :   'drawCollection' op=Actiontype_List 'collection' collection=NormalStr 'cell' cell=NormalStr 'layer(' l1=TryIntStr ',' l2=TryIntStr ')'
/* drawCollection
defaultMap : {op:'regex',collection:'(\\d+)_(\\d+)',cell:'TOP',l1:'$1',l2:'$2'}
*/;

evalStatement
    :   'eval' content=NormalStr
/* evalStatement
defaultMap : {content:'print(self.vars["abc"])'}
*/
;

statExprSplit : '=== statement ^ === expression v ===' ;

Actiontype_List : 'operation'|'regex' ;
Side_List : '⇖'|'⇗'|'⇘'|'⇙' /*Side_List ['ul','ur','dr','dl']*/ ;
Keytype_List : 'variable'|'trace.length'|'brush'|'collection'|'trace' ;
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

// this.evisitor.statementRules['contents'].check.forEach(blockname => {
//     this.block(blockname).colour=220;
// })
*/

/* Insert_FunctionStart

ComponentPainterFunctions.Evalstr_pre = function(str) {
    if (parseFloat(str)+''===str) {
        return parseFloat(str)
    } 
    return str;
}

ComponentPainterFunctions.TryIntStr_pre = function(str) {
    if (parseInt(str)+''===str) {
        return parseInt(str)
    } 
    return str;
}

// ComponentPainterBlocks.contents.forEach(blockname => {
//     ComponentPainterBlocks[blockname].json.nextStatement=undefined
// })
*/