
function getComputerChoice(){
    let choice = Math.floor(Math.random() *3 );
    if (choice === 0){
        return ("Paper")
    }
    else if (choice ===1){
        return "Rock";
    }
    else {
        return "Scissors"
    }
}

function getHumanChoice(){
    let choice = prompt("What do you choose:'Rock', 'Paper' or 'Scissors'?");
    choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();
    return choice
}

let humanScore = 0;
let computerScore= 0;

function playRound(humanChoice,computerChoice){
    let gameOver= false;
    if (gameOver) return;
    if (humanChoice===computerChoice){
        score.textContent = "Tie";
        return;
    }
    if ((humanChoice==="Scissors" && computerChoice==="Paper") ||
       (humanChoice==="Rock" && computerChoice==="Scissors")||
       (humanChoice==="Paper" && computerChoice==="Rock"))
        {
        let hscore = document.querySelector("#hScore")
        score.textContent = ("Player won this round!");
        ++humanScore;
        hscore.textContent = `Player: ${humanScore}`  
    } else {
        
        score.textContent = "CPU Won this round";
        ++computerScore;
        let cscore = document.querySelector("#cScore")
        cscore.textContent = `CPU: ${computerScore}`;
    }

    if (humanScore === 5 || computerScore ===5){
        gameOver = true;
        if (humanScore === 5) {
            score.textContent = "🎉 Player wins the game!";
        } else {
        score.textContent = "💻 CPU wins the game!";
        }
        document.querySelectorAll(".button-container button").forEach(button => {
        button.disabled = true;
});
    }   
}

const score = document.querySelector("#Score");





    const scissors = document.querySelector("#scissors");
    scissors.addEventListener("click",() => {
    playRound("Scissors",getComputerChoice());
});
    const rock = document.querySelector("#rock");
    rock.addEventListener("click",() => {
    playRound("Rock",getComputerChoice());
});
    const paper = document.querySelector("#paper");
    paper.addEventListener("click",() => {
    playRound("Paper",getComputerChoice());
});





