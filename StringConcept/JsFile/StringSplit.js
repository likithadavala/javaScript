function onClickStringInput(){
    debugger;
    var stringName = document.getElementById("txtStringInput").value;
    document.getElementById("pResult").innerHTML = stringName.split(".")[0];
    document.getElementById("pResult1").innerHTML = stringName.split(".")[1];
}
