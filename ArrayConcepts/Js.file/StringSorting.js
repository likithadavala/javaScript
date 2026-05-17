var alphbeticalOrder = [];
function onClickStringPush() {
    var content="";
    debugger;
    var inputWord = document.getElementById("txtInputName").value;
    alphbeticalOrder.push(inputWord);
    for (i=0; i<alphbeticalOrder.length; i++){
        content = content+ "<p>"+(i+1) +"." +alphbeticalOrder[i] +"</p><br>";
    }
    document.getElementById("pResult").innerHTML =content;
    document.getElementById("txtInputName").value = "";
}
function onClickStringSorting(){
    debugger;
    var SortContent="";
    alphbeticalOrder.sort();
    for (i=0; i<alphbeticalOrder.length; i++){
        SortContent = SortContent+ "<p>"+(i+1) +"." +alphbeticalOrder[i] +"</p><br>";
    }
    document.getElementById("pSortResult").innerHTML =SortContent;
   
}
function onClickReverse(){
    debugger;
    var ReverseContent="";
    alphbeticalOrder.sort();
    for (i=0; i<alphbeticalOrder.length; i++){
       ReverseContent  = ReverseContent+ "<p>"+(i+1) +"." +alphbeticalOrder[i] +"</p><br>";
    }
    document.getElementById("pReverseResult").innerHTML =ReverseContent;
}














    var reverseContent="";
    alphbeticalOrder.reverse();
    for (i=0; i<alphbeticalOrder.length; i++){
        reverseContent = reverseContent+ "<p>"+(i+1) +"." +alphbeticalOrder[i] +"</p><br>";
    }
    document.getElementById("pReverseResult").innerHTML =reverseContent;
   
}