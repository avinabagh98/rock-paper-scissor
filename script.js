let userSc = 0;
let compSc = 0;
let choices = document.querySelectorAll(".choice");
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");
let msgContainer = document.querySelector(".msg-container");



// random choice generator
const arr = ["stone", "paper", "scissors"]
function randomChoiceGen() {
    let num = Math.floor(Math.random() * 3)
    return(arr[num])
}


//draw updater function
let drawGame = ()=>{
    msgContainer.classList.remove("hide");
    msgContainer.innerText = "It's a draw!!"
};


//Score updater function
let scoreUpdate = (userScore, userSc, compScore, compSc)=>{
    userScore.innerText = userSc;
    compScore.innerText = compSc;
};

//Getting user choice & Computer choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        msgContainer.classList.add("hide");             // reset the draw container
        let userChoice = choice.getAttribute("id")
        console.log(userChoice, "selected by you")
        let compChoice = randomChoiceGen();             //compuer generating
        console.log(compChoice, "selected by computer")
        gameLog(userChoice, compChoice);
        scoreUpdate(userScore, userSc, compScore, compSc);
    });
});



//Game logic
let gameLog = (userChoice, compChoice)=>{
    if(userChoice === compChoice){
        console.log("Draw");
        drawGame();
    }
    else{
        if(userChoice==="stone"){
            compChoice==="scissors" ? userSc++ : compSc++;
            console.log(`user = ${userSc} comp = ${compSc}`)
            
        }
        else if(userChoice==="paper"){
            compChoice==="scissors" ? compSc++ : userSc++;
            console.log(`user = ${userSc} comp = ${compSc}`)
        }
        else if(userChoice==="scissors"){
            compChoice==="stone"? compSc++ : userSc++
            console.log(`user = ${userSc} comp = ${compSc}`)
        }
    }    
};
