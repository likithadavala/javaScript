function onClickNumber() {
    debugger;
    var number1 = document.getElementById("inputNumber1").value;
    var number2 = document.getElementById("inputNumber2").value;
    var result = document.getElementById("pResult");
    if (number1 < number2) {
        result.innerHTML = "The biggest number is" + number1;
    } else {
        result.innerHTML = "The biggest number is" + number2;
    }
}