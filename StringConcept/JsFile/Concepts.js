function onClickDisplay() {
        debugger;
        var firstName = document.getElementById("txtFirstName").value;
        var secondName = document.getElementById("txtSecondName").value;
        var email = document.getElementById("txtEmail").value;
        document.getElementById("pResult").innerHTML("my firstname is:" + firstName + ",my secondname is:" + secondName + ",my email is:" + email + ".")
        // alert(firstName);
        // alert(secondName);
        // alert(email);
        // alert(firstNames+secondName+email);
        // alert("my firstname is:"+firstName+",my secondname is:"+secondName+",my email is:"+email+".")
        document.getElementById("pResult").innerHTML`my firstname is:${firstName},my secondname is:$[secondName
],my email is:${email}.`
}
