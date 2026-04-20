function  onClickStringIndex(){
            debugger;
            var stringName = document.getElementById("txtStringName").value;
            var searchString = document.getElementById("txtStringSearch").value;
            document.getElementById("pResult").innerHTML = stringName.indexOf(searchString);

        }