// Select color input
// Select size input

function buildGrid(){

  var gridHeight = document.getElementById("inputHeight");
  var gridWidth = document.getElementById("inputWidth");
  //alert("Height:"+gridHeight.value+" Width:"+gridWidth.value);
  var tbl = document.getElementById("pixelCanvas");
  for (var j= 1; j<=gridWidth.value;j++){
    var row = document.createElement("tr");
    for (var i = 1; i<=gridHeight.value;i++){
      var cell = document.createElement("td");
      var cellText = document.createTextNode("cell is row "+j+", column "+i);

                cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tbl.appendChild(row);
  }


}

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // Your code goes here!
}
