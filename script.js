let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
//comp choice to be generated 
const genCompChoice = () => {
   const options = ["rock", "paper", "scissors"];
   const randIdx = Math.floor(Math.random() * 3);
   return options[randIdx];
};

const showWinner = (Userwin, userChoice, compChoice) => {
   if(Userwin) {
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
   }else {
      compScore++;
      compScorePara.innerText = compScore;
      msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
   }
};
const drawGame = () => {
   msg.innerText = "Game was drawen. Play again ! ";
   msg.style.backgroundColor = "blue";
};

const playgame = (userChoice) => {
   // console.log("user choice = ", userChoice);
   const compChoice = genCompChoice();
   // console.log("comp choice = ", compChoice);

   if(userChoice === compChoice) {
      //drawe game
      drawGame();
   }else {
      let Userwin = true;
      if(userChoice == "rock") {
         Userwin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
         Userwin = compChoice === "scissors" ? false : true;
      } else {
         Userwin = compChoice === "rock" ? false : true;
      }
      showWinner(Userwin, userChoice, compChoice);
   }
};

choices.forEach((choice) => {
   // console.log(choice);
   choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playgame(userChoice);
   });
});