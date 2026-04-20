function onClickStringIndex() {
            debugger;
            var stringName = document.getElementById("txtStringName").value;
            var stringSearch = document.getElementById("txtStringInclude").value;
            document.getElementById("pResult").innerHTML = stringName.includes(stringSearch);
        }