function onClickSellingPrice() {
    debugger;
    var price = document.getElementById("txtPrice").value;
    var discountPercentage = document.getElementById("txtDiscountPercentage").value;
    var result = price - discountPercentage * 100;
    document.getElementById("pResult").innerHTML = result
}