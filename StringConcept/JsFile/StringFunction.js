function onClickUpperCase() {
    debugger;
    var name = document.getElementById("txtName").value;
    document.getElementById("pResult").innerHTML = name.toUpperCase();

}
function onClickLowerCase(){
    debugger;
    var name = document.getElementById("txtName").value;
    document.getElementById("pResult").innerHTML = name.toLowerCase();

}
function onClickTrim(){
    debugger;
    var name = document.getElementById("txtName").value;
    document.getElementById("pResult").innerHTML = name.trim();
}
function onClickTrimStart() {
    debugger;
    var name = document.getElementById("txtName").value;
    document.getElementById("pResult").innerHTML = name.trimStart();
}
function onClickTrimEnd(){
    debugger;
    var name = document.getElementById("txtName").value;
    document.getElementById("pResult").innerHTML = name.trimEnd();
}