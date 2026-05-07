var matrix= [
                               [1,2,3],
                               [4,5,6],
                               [7,8,9]
];
function onClickMatrixMultiplications(){
    var result="";
    var multiplier = Number(document.getElementById("multiplier").value);
    for(i=0; i<matrix.length; i++){
        for(j=0; j<matrix[i].length; j++){
        result += matrix[i][j] * multiplier + " ";
    }
    result += "<br>";
}
document.getElementById("pResult").innerHTML = result;
}