// Select color input

var picker = document.getElementById("colorPicker");
var color = "black";
picker.addEventListener("input",function(){color = picker.value;});
var table = document.getElementById("pixelCanvas");
table.addEventListener("click",makeGrid);


// Select size input

function buildGrid(){

  var gridHeight = document.getElementById("inputHeight");
  var gridWidth = document.getElementById("inputWidth");
  //alert("Height:"+gridHeight.value+" Width:"+gridWidth.value);
  var tbl = document.getElementById("pixelCanvas");
  for (var j= 1; j<=gridHeight.value;j++){
    var row = document.createElement("tr");
    for (var i = 1; i<=gridWidth.value;i++){
      var cell = document.createElement("td");
      var cellText = document.createTextNode(" ");
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tbl.appendChild(row);
  }

}

// When size is submitted by the user, call makeGrid()

function makeGrid(evt) {
  // Your code goes here!

  //Example:

// const myCustomDiv = document.createElement('div');
//
// function respondToTheClick(evt) {
//     console.log('A paragraph was clicked: ' + evt.target.textContent);
// }
//
// for (let i = 1; i <= 200; i++) {
//     const newElement = document.createElement('p');
//     newElement.textContent = 'This is paragraph number ' + i;
//
//     myCustomDiv.appendChild(newElement);
// }
//
// document.body.appendChild(myCustomDiv);
//
// myCustomDiv.addEventListener('click', respondToTheClick);


//Example one more:

// document.querySelector('#content').addEventListener('click', function (evt) {
//     if (evt.target.nodeName === 'SPAN') {  // ← verifies target is desired element
//         console.log('A span was clicked with text ' + evt.target.textContent);
//     }
// });

//Example styles

// const mainHeading = document.querySelector('h1');
//
// mainHeading.style.color = 'red';

var target = evt.target;
target.style.backgroundColor = color;



}
