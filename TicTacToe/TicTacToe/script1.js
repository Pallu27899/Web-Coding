var player1 = "";
var player2 = "";
var turn = player1;
let clickmusic = new Audio("clickmusic.wav");
let winmusic1 = new Audio("win2.wav");

let gameover = false;

// function to change the turn

const changeTurn = () => {
  return turn === player1 ? player2 : player1;
};

start.addEventListener("click", () => {
  resetfun();
  player1 = prompt("Please Enter First Player Name");
  player2 = prompt("Please Enter Second Player Name");
  turn = player1;
  document.getElementById("player1").innerText = "Player 1 : " + player1;
  document.getElementById("player2").innerText = "Player 2 : " + player2;
  document.getElementById("turnplayer").innerText = "Turn for " + turn;

  let boxes = document.getElementsByClassName("box");
  Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      clickmusic.play();
      boxtext.innerText = turn;
      turn = changeTurn();
      checkWins();
      if (!gameover) {
        document.getElementsByClassName("turnplayer")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

});


// // function to change the turn

// const changeTurn = () => {
//   return turn === player1 ? player2 : player1;
// };

const checkWins = () => {
  let boxtexts = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[2]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[2]].innerText !== ""
    ) {
      document.querySelector(".turnplayer").innerText = boxtexts[e[0]].innerText + " Won";
      gameover = true;
      winmusic1.play();
      if(boxtexts[e[0]].innerText == player1){
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px";
      }else{
        document.querySelector(".imgbox").getElementsByTagName("img")[1].style.width = "200px";
      }

      // setTimeout(resetfun(), 5000);
    }

  });
};

// game Logic

// let boxes = document.getElementsByClassName("box");
// Array.from(boxes).forEach((element) => {
//   let boxtext = element.querySelector(".boxtext");
//   element.addEventListener("click", () => {
//     if (boxtext.innerText === "") {
//       clickmusic.play();
//       boxtext.innerText = turn;
//       turn = changeTurn();
//       checkWins();
//       if (!gameover) {
//         document.getElementsByClassName("turnplayer")[0].innerText =
//           "Turn for " + turn;
//       }
//     }
//   });
// });

// Reset button

document.getElementById("reset").addEventListener("click", resetfun);
function resetfun() {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  document.getElementById("turnplayer").innerText = "";
  document.getElementById("player1").innerText = "";
  document.getElementById("player2").innerText = "";
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";
  document.querySelector(".imgbox").getElementsByTagName("img")[1].style.width = "0px";
  winmusic1.pause();
}



