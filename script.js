let boxes = document.querySelectorAll(".box");
let msgCon = document.querySelector(".msg-container");
let rstGame = document.querySelector(".reset-btn");
let xBtn = document.querySelectorAll(".xbtn");
let pO = document.querySelector(".pO");
let pX = document.querySelector(".pX");
let body = document.querySelector("body");
let pointBtn = document.querySelector(".point-btn");

let turn = true;

const winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let idx = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      //player O
      turn = false;
      box.innerText = "X";
      box.style.color = "green";
    } else {
      //player X
      turn = true;
      box.innerText = "O";
      box.style.color = " rgb(148, 51, 51)";
    }
    idx++;
    checkWinner();
    xDisable();
    box.disabled = true;
  });
});

let winX = 0;
let winO = 0;
let checkWinner = () => {
  for (let pattern of winningPattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        msgCon.innerText = `congratulation winner is"${pos1}"`;
        boxesDisable();
        if (pos1 === "X") {
          winX++;
          pX.innerText = `"${winX}"`;
        } else {
          winO++;
          pO.innerText = ` "${winO}"`;
        }
        if (winX === 5) {
          msgCon.innerText = `Tic Tac toe Master Player"${pos1}"`;
        } else if (winO === 5) {
          msgCon.innerText = `Tic Tac toe Master Player"${pos1}"`;
        } else if (idx === 9) {
          msgCon.innerText = `DRAW`;
        }
      }
    }
  }
};

// boxes btn disable enable fun
const boxesDisable = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const boxesEnable = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    msgCon.innerText = "";
  }
};

// Reset button
let resetGame = () => {
  turn = true;
  idx = 0;
  boxesEnable();
  xEnable();
  msgCon.classList.add("class", "hide");
};

rstGame.addEventListener("click", resetGame);

// turn btn
xBtn.forEach((X) => {
  X.addEventListener("click", () => {
    if (turn) {
      turn = false;
      X.innerText = "Turn O";
    } else {
      turn = true;
      X.innerText = "Turn X";
    }
  });
});

// turn btn disable and enable fun
let xEnable = () => {
  for (let X of xBtn) {
    X.disabled = false;
    X.innerText = "Turn X";
  }
};

let xDisable = () => {
  for (let X of xBtn) {
    X.disabled = true;
    X.innerText = "Turn X";
  }
};

// points reset-btn
pointBtn.addEventListener("click", () => {
  winX = 0;
  winO = 0;
  pX.innerText = `"0"`;
  pO.innerText = `"0"`;
});
