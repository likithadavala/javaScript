
function onClickStars() {
    debugger;

    var inputNumber = document.getElementById("txtInputNumber").value;
    var content="";
    for (let i = 1; i <= inputNumber; i++) {
        content =content + "<p>"+ ("*").repeat(i)+"</p><br>";
    }
    for (let j= inputNumber; j>=1; j--){
        content  =content +"<p>"+ ("*").repeat(j)+"</p><br>"
    }
    document.getElementById("pResult").innerHTML = content;

}