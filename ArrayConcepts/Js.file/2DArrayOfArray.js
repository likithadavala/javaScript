var nandGate =[
                [0,0,0],
                [0,1,0],
                [1,0,0],
                [1,1,1]
            ] ;

function onClickArrayOfArray(){
    debugger;
   var inputIndex = Number(document.getElementById("txtInputIndex").value);
   var secondIndex = Number(document.getElementById("txtSecondIndex").value);
   document.getElementById("pResult").innerHTML=nandGate[inputIndex][secondIndex] ;

}