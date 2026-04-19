function onClickSub() {
    debugger;
    var firstNumber = Number(document.getElementById("txtFirstNumber").value);
    var secondNumber = Number(document.getElementById("txtSecondNumber").value);
    var SubResult = firstNumber + secondNumber;
    document.getElementById("pResult").innerHTML = SubResult;
}
