var a8 = document.getElementById('a8');
var bk = document.createElement("img");
bk.id = "bk";
bk.src = "images/knight.png";

//a8.appendChild(bk);



function makeImage(placeHolder, src){
  placeHolder.createElement('img');
  placeHold.id =  "" + placeHolder + "";
  placeHolder.src = src;
}


var letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8];
var chessBoardArray = [[],[],[],[],[],[],[],[]];
for (var i = 0; i < numberArray.length; i++)
{
    let value = numberArray[i];
    for (var n = 0; n < letterArray.length; n++)
    {
        let value2 = letterArray[n];
        let total = value2 + value;
        chessBoardArray[i][n] = total;
    }
}

console.log(chessBoardArray);

var chessBoard = document.querySelectorAll(".chessBoardArea");
for (var i = 0; i < chessBoard.length; i++)
{
  let chessAreaId = chessBoard
}
