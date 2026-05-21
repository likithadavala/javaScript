
function onClickSquare(){
    debugger;
    var number=Number(document.getElementById("txtNumber").value);
    document.getElementById("pSquareResult").innerHTML=square(number);
    document.getElementById("txtNumber").value="";
}
function onClickCube(){
    debugger;
    var number=Number(document.getElementById("txtNumber").value);
    document.getElementById("pCubeResult").innerHTML=cube(number);
    document.getElementById("txtNumber").value="";
}
function onClickMutipleOfNumber(){
    debugger;
    var number=Number(document.getElementById("txtNumber").value);
    document.getElementById("pMultipleOfNumberResult").innerHTML=MultipleOfNumber(number);
    document.getElementById("txtNumber").value="";
}
function onClickEvenOrOdd(){
    debugger;
    var number=Number(document.getElementById("txtNumber").value);
    document.getElementById("pEvenOrOddResult").innerHTML=EvenOrOdd(number);
    document.getElementById("txtNumber").value="";
}


const square=(number)=>{
    return number*number;
}
const cube=(number)=>{
    return number*number;
}
const MultipleOfNumber=(number)=>{
    return number*5;
}
const EvenOrOdd=(number)=>{
    if (number % 2 == 0) {
        return "it is an even number";
    }else {
        return "It is an odd number";
    }
}
