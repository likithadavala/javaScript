var flowers=["Rose","lilly", "jasmine","lotus"];

var content=" ";
var size=flowers.length;
console.log(size);

function onClickArrayMethods(){
  var size=flowers.length;
  for(let i=0;i<flowers.length;i++){
  content=content+"<p>"+(i+1)+flowers[i]+"</p><br>"
}
document.getElementById("pResult").innerHTML=content;
  document.getElementById("pLengthResult").innerHTML=size;
}