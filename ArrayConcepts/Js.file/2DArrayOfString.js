var cars = [
    ["Maruti Suzuki", "Swift", 2020],
    ["Hyundai", "Creta", 2019],
    ["Tata Motors", "Nexon", 2021],
    ["Mahindra", "Thar", 2025]

];
function onClickArrayOfArray(){
    debugger;
    var result=" ";
    var inputIndex =document.getElementById("txtInputIndex").value;
    var secondIndex =document.getElementById("txtSecondIndex").value;
    
    for(i=0; i<cars.length; i++){
        result= result+ "<p>"+ cars[i]+ "</p><br>"
    }
    // for(i=0; i<cars.length; i++){
    //     result +=`${i+1}.Make of the car is ${cars[i][0]}, model is ${cars[i][1]}, of the year ${cars[i][2]}.<br>`
    // }
    
    document.getElementById("pResult").innerHTML=result;
}