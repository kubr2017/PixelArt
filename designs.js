// Select color input

var picker = document.getElementById("colorPicker");
var color = picker.value;
picker.addEventListener("input",function(){color = picker.value;});
var table = document.getElementById("pixelCanvas");
table.addEventListener("click",makeGrid);


// Select size input

function buildGrid(){

  var gridHeight = document.getElementById("inputHeight");
  var gridWidth = document.getElementById("inputWidth");
  var tbl = document.getElementById("pixelCanvas");
  for (var j= 1; j<=gridHeight.value;j++){
    var row = document.createElement("tr");
    for (var i = 1; i<=gridWidth.value;i++){
      var cell = document.createElement("td");
      row.appendChild(cell);
    }
    tbl.appendChild(row);
  }
}
ci
function makeGrid(evt) {
  // Your code goes here!

var target = evt.target;
target.style.backgroundColor = color;
}
