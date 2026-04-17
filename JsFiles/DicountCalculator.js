function onClickDiscountSelling(){
    debugger;
    var price=document.getElementById("txtPrice").value;
    var discountSelling=document.getElementById("txtDiscountSelling").value;
    result=discountSelling/price*100;
    document.getElementById("pResult").innerHTML =result;
}