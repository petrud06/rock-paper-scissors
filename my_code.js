
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
    if (humanChoice===computerChoice){
        console.log("TIE!");
        return;
    }
    if ((humanChoice==="Scissors" && computerChoice==="Paper") ||
       (humanChoice==="Rock" && computerChoice==="Scissors")||
       (humanChoice==="Paper" && computerChoice==="Rock"))
        {
  
        console.log("Player won this round!");
        humanScore++;  
    } else {
        console.log("CPU Won this round");
        computerScore++;
    }
    console.log(`Score: Player ${humanScore} vs CPU ${computerScore}`)
}


function playGame(){
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()
    playRound(humanSelection,computerSelection)
}

for (let i = 0; i < 5; i++){
    playGame()

}
if (humanScore < computerScore){
    console.log("CPU WON!!!")
}else{
    console.log("Player WON!!!")
};