let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg ");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame = () => {
  msg.innerText = "Game was Draw. Play ";
};
const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore; 
    msg.innerText = "you win !";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = "you lose";
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  const compChoice = genComputerChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

document.getElementById('reset-btn').addEventListener('click', () => {
    document.getElementById('user-score').textContent = '0';
    document.getElementById('comp-score').textContent = '0';
    document.getElementById('msg').textContent = 'Play your move!';
});
