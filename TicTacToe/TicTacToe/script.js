var player1 = "";
var player2 = "";
var turn = player1;
let clickmusic = new Audio("clickmusic.wav");
let winmusic1 = new Audio("win2.wav");

let gameover = false;

const changeTurn = () => {
  return turn === player1 ? player2 : player1;
};

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
       document.getElementById("player1_img").style.width = "400px";
      }else{
        document.getElementById("player2_img").style.width = "400px";
      }
    }

  })
}

document.getElementById("reset").addEventListener("click", resetfun);
function resetfun() {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  document.getElementById("turnplayer").innerText = "";
  document.getElementById("player1").innerText = "";
  document.getElementById("player2").innerText = "";
  document.getElementById("player1_img").style.width = "0px";
  document.getElementById("player2_img").style.width = "0px";
  winmusic1.pause();
}

start.addEventListener("click", () =>{
  resetfun();
  console.log("start clicked");
  player1 = prompt("Please Enter First Player Name. (It should be no more than 6 characters in length)");
  player2 = prompt("Please Enter Second Player Name. (It should be no more than 6 characters in length)");

  turn = player1;
  document.getElementById("player1").innerText = "Player 1 : " + player1;
  document.getElementById("player2").innerText = "Player 2 : " + player2;
  document.getElementById("turnplayer").innerText = "Turn for " + turn;

  let boxes = document.getElementsByClassName("box");
  Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
      if(boxtext.innerHTML === ""){
      clickmusic.play();
      boxtext.innerText = turn;
      turn = changeTurn();
      checkWins();
      if (!gameover) {
        document.getElementsByClassName("turnplayer")[0].innerText =
          "Turn for " + turn;
      }
      }
    })
  })
});