function onClickAddition(){
    debugger;
    var firstNumber= Number(document.getElementById("txtFirstNumber").value);
    var secondNumber =Number(document.getElementById("txtSecondNumber").value);    
    document.getElementById("pAddResult").innerHTML=calucator(firstNumber,secondNumber,'add');
            
}

function onClickSubtraction(){
    debugger;
    var firstNumber=Number(document.getElementById("txtFirstNumber").value);
    var secondNumber =Number(document.getElementById("txtSecondNumber").value);    
    document.getElementById("pSubResult").innerHTML=calucator(firstNumber,secondNumber,'sub');
            
}
function onClickMultiplication(){
    debugger;
    var firstNumber= Number(document.getElementById("txtFirstNumber").value);
    var secondNumber =Number(document.getElementById("txtSecondNumber").value);    
    document.getElementById("pMultipleResult").innerHTML=calucator(firstNumber,secondNumber,'multiple');
}
function onClickDivision(){
    debugger;
    var firstNumber= Number(document.getElementById("txtFirstNumber").value);
    var secondNumber =Number(document.getElementById("txtSecondNumber").value);    
    document.getElementById("pDivisionResult").innerHTML=calucator(firstNumber,secondNumber,'division');
}
function onClickRemainder(){
    debugger;
    var firstNumber= Number(document.getElementById("txtFirstNumber").value);
    var secondNumber =Number(document.getElementById("txtSecondNumber").value);    
    document.getElementById("pRemainderResult").innerHTML=calucator(firstNumber,secondNumber,'Remainder');
}



function calucator(firstNumber,secondNumber,operator){
debugger;
    if(operator=='add'){
        return firstNumber+secondNumber;
    }
       if(operator=='sub'){
        return firstNumber-secondNumber;
    }
       if(operator=='multiple'){
         return firstNumber*secondNumber;
    }  
    if(operator=='division'){
        return firstNumber/secondNumber;
    } 
    if(operator=='Remainder'){
        return firstNumber%secondNumber;
    }
 
}