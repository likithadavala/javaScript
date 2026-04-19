var  evenNumber =[];
var oddNumber =[];
function onClickEvenAndOdd(){
    debugger;
    var inputNumber = document.getElementById("txtInputNumber").value;
    var contentOfEven ="";
    var contentOfOdd ="";
    if(inputNumber%2==0){
        evenNumber.push(inputNumber);
    }else{
        oddNumber.push(inputNumber);
    }
    for(let i=0; i<evenNumber.length; i++){
        contentOfEven=contentOfEven +"<p>" + "" +evenNumber[i]+"</p><br>"
    }
    for(let j=0; j<oddNumber.length; j++){
        contentOfOdd=contentOfOdd +"<p>" + "" +oddNumber[j]+"</p><br>"
}
document.getElementById("divAResult").innerHTML= contentOfEven;
document.getElementById("divBResult").innerHTML= contentOfOdd;
}