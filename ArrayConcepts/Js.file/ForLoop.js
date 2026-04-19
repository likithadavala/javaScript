numbers = [10, 63, 56, 37, 47, 49, 59, 50, 65]
function onClickForLoop() {
    debugger;

    var content = "";
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] % 5 == 0);
        {
            content = content + "<p>" + numbers[i] + "<p></br>"
        }

    }
    document.getElementById("divResult").innerHTML = content;

}
