var flowers = [];

function onClickAddToArray() {
    debugger;
    var inputName = document.getElementById("txtInputName").value;
    flowers.push(inputName);
    document.getElementById("pResult").innerHTML = flowers;
    document.getElementById("txtInputName").value = "";
}
