grammar ComponentPainter;

componentPainter:   
    statement=statements* 
;

statements
    :   exportSimulation
    |   drawCollection
    |   drawAirBridgeOnCenterlines
    |   drawAirBridgeOnMarks
    |   drawContinueAirBridge
    |   drawBrush
    |   evalStatement
    ;

exportSimulation
    :   'exportSimulation'
;

drawCollection
    :   'drawCollection' op=Actiontype_List 'collection' collection=NormalStr 'cell' cell=NormalStr 'layer(' l1=TryIntStr ',' l2=TryIntStr ')'
/* drawCollection
defaultMap : {op:'regex',collection:'(\\d+)_(\\d+)',cell:'TOP',l1:'$1',l2:'$2'}
*/;

drawAirBridgeOnCenterlines
    :   'drawAirBridgeOnCenterlines' BGNL 
        'filename' filename=NormalStr 'centerlines' centerlines=NormalStr 'cell' cell=NormalStr BGNL 
        'newcellname' newcellname=NormalStr 'airbridgedistance' airbridgedistance=Evalstr 'args' args=NormalStr?
/* drawAirBridgeOnCenterlines
defaultMap : {filename:'ab.gds',centerlines:'cl_50_.*',newcellname:'ab_50',cell:'TOP',airbridgedistance:50000,args:''}
*/;

drawAirBridgeOnMarks
    :   'drawAirBridgeOnMarks' BGNL 
        'filename' filename=NormalStr 'marks' marks=NormalStr 'cell' cell=NormalStr BGNL 
        'match' match=NormalStr 'newcellname' newcellname=NormalStr 'args' args=NormalStr?
/* drawAirBridgeOnMarks
defaultMap : {filename:'ab.gds',marks:'marks_ab_.*',newcellname:'ab_marks',cell:'TOP',match:'ab',args:''}
*/;

drawContinueAirBridge
    :   'drawContinueAirBridge' BGNL 
        'centerlines' centerlines=NormalStr 'cell' cell=NormalStr BGNL 
        'layerup' layerup=TryIntStr 'layerdown' layerdown=TryIntStr 'using' using=IdsStr? BGNL 
        'args' args=NormalStr?
/* drawContinueAirBridge
defaultMap : {centerlines:'cl_continue_(.*)',cell:'ab_continue',layerup:'4_0',layerdown:'6_0',args:'{"s1": 300000, "s2": 308500, "e1": length_continue_$1-15000, "e2": length_continue_$1-15000-8500, "w1": 20000, "w2": 30000, "w3": 40000, "l1": 28000, "l2": 22000, "cnum": 9, "rounded": 0, "roundedNum": 256}',using:'length_continue_$1'}
*/;

drawBrush
    :   'drawBrush' brush=NormalStr 'as name' name=NormalStr
/* drawBrush
defaultMap : {brush:'brush\\d+',name:'$0'}
*/;

evalStatement
    :   'eval' content=NormalStr
/* evalStatement
defaultMap : {content:'print("readoutlength:",self.vars["readoutlength"])'}
*/
;

statExprSplit : '=== statement ^ === expression v ===' ;

Actiontype_List : 'operation'|'regex' ;
Side_List : '⇖'|'⇗'|'⇘'|'⇙' /*Side_List ['ul','ur','dr','dl']*/ ;

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