function onClickPdfChecker() {
    debugger
    var fileName = document.getElementById("txtFileName").value;
    if (fileName.endsWith(".pdf")) {
        document.getElementById("pResult").innerHTML = "it is pdf"
    } else {
        document.getElementById("pResult").innerHTML = "it  is not pdf"
    }
}
