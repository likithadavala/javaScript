var colours = ["Blue", "Red", "yellow"];

function onClickStringArray() {
    debugger;
    var content = "";
    for (i = 0; i < colours.length; i++) {
        {
            content = content + "<p> " + (i + 1) + "" + colours[i + 1] + "</p>";
        }
        document.getElementById("divResult").innerHTML = content;
    }
}  