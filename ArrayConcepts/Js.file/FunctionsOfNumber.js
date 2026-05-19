//function is inside parameters or methods is called functions
//By passing or declared is called function
//invoke means calling or executed a function is invoke
//The value passed during function invction is called an argument
//return or executed the function is called return value
//we can link the jsfile 
//
function onClickAddition(){
    debugger;
    var firstNumber= Number(document.getElementById("txtFirstNumber").value);
    var secondNumber =Number(document.getElementById("txtSecondNumber").value);    
    document.getElementById("pAddResult").innerHTML=calucator(firstNumber,secondNumber,'add');//invoking calculator methods by passing firstnumber,secondnumber,add as arguments
            
}

function onClickSubtraction(){
    debugger;
    var firstNumber=Number(document.getElementById("txtFirstNumber").value);
    var secondNumber =Number(document.getElementById("txtSecondNumber").value);    
    document.getElementById("pSubResult").innerHTML=calucator(firstNumber,secondNumber,'sub');//invoking calculator methods by passing firstnumber,secondnumber,sub as arguments                    
}
function onClickMultiplication(){
    debugger;
    var firstNumber= Number(document.getElementById("txtFirstNumber").value);
    var secondNumber =Number(document.getElementById("txtSecondNumber").value);    
    document.getElementById("pMultipleResult").innerHTML=calucator(firstNumber,secondNumber,'multiple');//invoking calculator methods by passing firstnumber,secondnumber,multiple as arguments
}
function onClickDivision(){
    debugger;
    var firstNumber= Number(document.getElementById("txtFirstNumber").value);
    var secondNumber =Number(document.getElementById("txtSecondNumber").value);    
    document.getElementById("pDivisionResult").innerHTML=calucator(firstNumber,secondNumber,'division');//invoking calculator methods by passing firstnumber,secondnumber,division as arguments
}
function onClickRemainder(){
    debugger;
    var firstNumber= Number(document.getElementById("txtFirstNumber").value);
    var secondNumber =Number(document.getElementById("txtSecondNumber").value);    
    document.getElementById("pRemainderResult").innerHTML=calucator(firstNumber,secondNumber,'Remainder');//invoking calculator methods by passing firstnumber,secondnumber,remainder as arguments
}



// function calucator(firstNumber,secondNumber,operator){//function declaration with name calculator,firstnumber,secondnumber,add is parameters
// debugger;

//     if(operator=='add'){
//         return firstNumber+secondNumber;
//     }
//        if(operator=='sub'){
//         return firstNumber-secondNumber;
//     }
//        if(operator=='multiple'){
//          return firstNumber*secondNumber;
//     }  
//     if(operator=='division'){
//         return firstNumber/secondNumber;
//     } 
//     if(operator=='Remainder'){
//         return firstNumber%secondNumber;
//     }
 
// }
const calucator=(firstNumber,secondNumber,operator)=>{
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