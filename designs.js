// Select color input
// Select size input

function buildGrid(){

  var gridHeight = document.getElementById("inputHeight");
  var gridWidth = document.getElementById("inputWidth");
  //alert("Height:"+gridHeight.value+" Width:"+gridWidth.value);
  var tbl = document.createElement("table");
  for (var j= 0; j<=gridWidth.value;j++){
    var row = document.createElement("tr");
    for (var i = 0; i<=grid.Height.value;i++){
      var cell = document.createElement("td");
      row.appendChild(cell);
    }
    tbl.appendChild(row);
  }
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(tbl);

}

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // Your code goes here!
}
