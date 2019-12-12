//variable declaration
var turn = document.getElementById("turn"),
    values = document.querySelectorAll("#main div"),
    temp = 0;
var pl1;
var pl2;
//function for getting the player1 name as input
function Player1() {
  pl1 = document.getElementById("player1").value;
}
//function for getting player2 name as input
function Player2() {
  pl2 = document.getElementById("player2").value;
}
//for loop for printing alternate X and O
for (var i = 0; i < values.length; i++) {
  values[i].onclick = function() {
    if (this.textContent !== "X" && this.textContent !== "O") {
      //if temp equals to an even value then print X
      if (temp % 2 === 0) {
        this.textContent = "X";
        this.style.color="red";
        document.getElementById("turn").textContent = pl2 + "'s turn";
        turn.style.color="black";
        getWinner();
        temp = temp + 1;
      }
      //if temp equals to an odd value then print O
      else {
        this.textContent = "O";
        this.style.color="black";
        document.getElementById("turn").textContent = pl1 + "'s turn";
        turn.style.color="red";
        getWinner();
        temp = temp + 1;
      }
    }
  };
}
//function to find the winner
function getWinner() {
  //declaration and initialization of variables
  var b1 = document.getElementById("b1"),
    b2 = document.getElementById("b2"),
    b3 = document.getElementById("b3"),
    b4 = document.getElementById("b4"),
    b5 = document.getElementById("b5"),
    b6 = document.getElementById("b6"),
    b7 = document.getElementById("b7"),
    b8 = document.getElementById("b8"),
    b9 = document.getElementById("b9");
  //all the posibilities for winning the game
  if ((b1.textContent !== "") && (b1.textContent === b2.textContent) && (b1.textContent === b3.textContent)) {
    setWinner(b1, b2, b3);
  }
  if (b1.textContent !== "" && b1.textContent === b4.textContent && b1.textContent === b7.textContent) {
    setWinner(b1, b4, b7);
  }
  if (b1.textContent !== "" && b1.textContent === b5.textContent && b1.textContent === b9.textContent) {
    setWinner(b1, b5, b9);
  }
  if (b2.textContent !== "" && b2.textContent === b5.textContent && b2.textContent === b8.textContent) {
    setWinner(b2, b5, b8);
  }
  if (b3.textContent !== "" && b3.textContent === b6.textContent && b3.textContent === b9.textContent) {
    setWinner(b3, b6, b9);
  }
  if (b3.textContent !== "" && b3.textContent === b5.textContent && b3.textContent === b7.textContent) {
    setWinner(b3, b5, b7);
  }
  if (b4.textContent !== "" && b4.textContent === b5.textContent && b4.textContent === b6.textContent) {
    setWinner(b4, b5, b6);
  }
  if (b7.textContent !== "" && b7.textContent === b8.textContent && b7.textContent === b9.textContent) {
    setWinner(b7, b8, b9);
  }
}
//selectwinner function
function setWinner(a1, a2, a3) {
  a1.classList.add("win");
  a2.classList.add("win");
  a3.classList.add("win");
  if (a1.textContent === "X") {
    document.getElementById("turn").innerHTML = pl1 + " won the game";
  } else if (a1.textContent === "O") {
    document.getElementById("turn").innerHTML = pl2 + " won the game";
  }
    document.getElementById("congrats").style.visibility = "visible";
}
//function for replay
function playagain() {
  for (var i = 0; i < values.length; i++) {
    values[i].classList.remove("win"); //removing the win class
    values[i].textContent = ""; //re-initializing all the values to null
  }
  temp = 0; //re-initializing the temp value into 0
  turn.textContent = "Play";
}
