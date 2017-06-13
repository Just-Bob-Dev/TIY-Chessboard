
function makeImage(placeHolder, src){
  placeHolder = document.createElement('img');
  placeHolder.id =  "" + placeHolder + "";
  placeHolder.src = src;
  return placeHolder;
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

var playableArray = [[],[],[],[],[],[],[],[]];
var tempArray = [[],[],[],[],[],[],[],[]];

var chessBoard = document.querySelectorAll(".chessBoardArea");
for (var i = 0; i < chessBoard.length; i++)
{

  let chessAreaId = chessBoard[i].id;

  if(chessAreaId === "a2" || chessAreaId === "b2" || chessAreaId === "c2" || chessAreaId === "d2" || chessAreaId === "e2" || chessAreaId === "f2" || chessAreaId === "g2" || chessAreaId === "h2")
  {
    chessBoard[i].value = "p";
    let val = "p"+ chessAreaId;
    let x = makeImage(val, "images/Pawn.png");
    let parentNode = document.getElementById(chessAreaId);
    parentNode.appendChild(x);
  }

  else if(chessAreaId === "a7" || chessAreaId === "b7" || chessAreaId === "c7" || chessAreaId === "d7" || chessAreaId === "e7" || chessAreaId === "f7" || chessAreaId === "g7" || chessAreaId === "h7")
  {
    chessBoard[i].value = "p";
    let val = "p"+ chessAreaId;
    let x = makeImage(val, "images/Pawn.png");
    let parentNode = document.getElementById(chessAreaId);
    parentNode.appendChild(x);
  }

  else if(chessAreaId === "a1" || chessAreaId === "a8" || chessAreaId === "h1" || chessAreaId === "h8")
  {
    chessBoard[i].value = "R";
    let val = "R"+ chessAreaId;
    let x = makeImage(val, "images/Rook.png");
    let parentNode = document.getElementById(chessAreaId);
    parentNode.appendChild(x);
  }

  else if(chessAreaId === "b1" || chessAreaId === "b8" || chessAreaId === "g1" || chessAreaId === "g8")
  {
    chessBoard[i].value = "k";
    let val = "k"+ chessAreaId;
    let x = makeImage(val, "images/knight.png");
    let parentNode = document.getElementById(chessAreaId);
    parentNode.appendChild(x);
  }
  else if(chessAreaId === "c1" || chessAreaId === "c8" || chessAreaId === "f1" || chessAreaId === "f8")
  {
    chessBoard[i].value = "B";
    let val = "B"+ chessAreaId;
    let x = makeImage(val, "images/Bishop.png");
    let parentNode = document.getElementById(chessAreaId);
    parentNode.appendChild(x);
  }
  else if(chessAreaId === "e1" || chessAreaId === "e8")
  {
    chessBoard[i].value = "K";
    let val = "K"+ chessAreaId;
    let x = makeImage(val, "images/King.png");
    let parentNode = document.getElementById(chessAreaId);
    parentNode.appendChild(x);
  }
  else if(chessAreaId === "d1" || chessAreaId === "d8")
  {
    chessBoard[i].value = "Q";
    let val = "Q"+ chessAreaId;
    let x = makeImage(val, "images/Queen.png");
    let parentNode = document.getElementById(chessAreaId);
    parentNode.appendChild(x);
  }

  for(let x = 0; x < chessBoardArray.length; x++)
  {
    for(let n = 0; n< chessBoardArray.length; n++)
    {
      let value = chessBoardArray[x][n];
      if(value === chessAreaId)
      {
        chessBoardArray[x][n] = document.getElementById(value);
      }
    }
  }

}
console.log(chessBoardArray);
