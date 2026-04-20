function onClickCheckEmail() {
    debugger;
    var email = document.getElementById("txtEmail").value;
    // if(email.includes("@")&& email.includes(".")){
    // document.getElementById("pResult").innerHTML="Email is valid"
    // } else {
    // document.getElementById("pResult").innerHTML="Email is invalid"
    // }
    if (email.indexOf("@") < email.indexOf(".")) {
        document.getElementById("pResult").innerHTML = "Emil is valid"
    } else {
        document.getElementById("pResult").innerHTML = "Email is invalid"
    }
}
