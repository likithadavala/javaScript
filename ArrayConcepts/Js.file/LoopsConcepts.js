// function onClickForLoop(){
//     debugger;
// var content="";
//     var inputNumber= Number(document.getElementById("inputNumber").value);
//     for(i=inputNumber; i>=0; i--){
//         content = content + "<p>"+(i)+"</p>"<br>;
//     }
//     document.getElementById("pResult").innerHTML=content;
// }
function onClickForLoop(){
    debugger;
    var content="";
    var startNumber = Number(document.getElementById("startNumber").value);
    var endNumber = Number(document.getElementById("endNumber").value);
    for(i=100; i>=90; i--){
        content =content+ "<p>"+(i-1) +"</p><br>";
    }
    document.getElementById("pResult").innerHTML =content; 
}