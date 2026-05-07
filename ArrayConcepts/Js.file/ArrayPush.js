var animals = [];
var content = "";
function onClickIndexOfConcepts() {
    debugger;
    var textBox = document.getElementById("txtTextBox").value;
    animals.push(textBox);
    for (i = 0; i < animals.length; i++)
        content = content + "<p>" + (i + 1) + "." + animals[i] + "</p><br>"
    document.getElementById("pResult").innerHTML = content;
    content = "";
}

function onClickSearchButton() {
    debugger;
    var inputBox = document.getElementById("txtSearch").value;
    document.getElementById("pSearchResult").innerHTML = 
    `${inputBox} is at ${animals.indexOf(inputBox)} index`;
}  