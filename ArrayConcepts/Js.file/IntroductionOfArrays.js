function onClickCheckIndex() {
    debugger;
    var inputName = document.getElementById("txtInputName").value;
    var flowers = ["rose", "sunflower", "lilly", "jasmine"];
    document.getElementById("pResult").innerHTML = flowers[inputName];
    document.getElementById("pResultlength").innerHTML = flowers.length;
    document.getElementById("pResultIndex").innerHTML = flowers.length - 1;
    document.getElementById("pResultLastCharacter").innerHTML = flowers[flowers.length - 1];
    document.getElementById("pResultFirstCharacter").innerHTML = flowers[0];


}
