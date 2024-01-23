let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3); //Math.random give random number between 0 to 1 i.e 0.234531451345 or 0.0245545345,etc.
    return option[randIdx];
};

const drawGame = () => {
    msg.innerText = "game was draw :| ";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else{
        msg.innerText = `You Lose;(  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
};

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();

    if(userChoice=== compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice==="scissors"?false:true;
        }
        else if(userChoice==="scissors"){
            userWin = compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});