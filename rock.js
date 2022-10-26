const choices = ["rock", "paper", "scissors"];
const winners = [];

function game (){
    for(let i=1; i<=5; i++){
    playRound(i);
    }
    LogWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round)
}


function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]
}

function playerChoice(){
    let input = prompt("Type Rock, Paper or Scissors.");
    while (input == null){
        input = prompt("Type Rock, Paper or Scissors.And click OK!");
    }
    input = input.toLowerCase();

    let check = validateInput(input);
    while (check == false) {
        input = prompt(
        "Type Rock, Paper or Scissors. Careful with the spelling! Capitalization doesn't matter!");
    while (input == null ){
            input = prompt("Type Rock, Paper or Scissors.And click OK!")
        }
    input = input.toLowerCase();
    check = validateInput(input);
    }
    return input;
}

function validateInput(typedvalue) {
    return choices.includes(typedvalue)
}

function checkWinner(choiceP, choiceC){
    if(choiceC === choiceP) {return "Tie"}
    else if ((choiceP === "rock" && choiceC === "scissors")||
    (choiceP === "scissors" && choiceC === "paper")||
    (choiceP === "paper" && choiceC === "rock")) {return "Player"}
    else {return "Computer"}
}

function LogWins(){
    let playerWins = winners.filter((item) => item=="Player").length; 
    let computerWins = winners.filter((item) => item=="Computer").length;
    let ties = winners.filter((item) => item=="Tie").length;
    console.log("Results: ");
    console.log("Player wins: ", playerWins);
    console.log("Computer wins: ", computerWins);
    console.log("Ties: ", ties);
   
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log("Round: ", round);
    console.log("Player chose the: ", playerChoice);
    console.log("Computer chose the: ", computerChoice);
    console.log("+1 Point to: ", winner);
    console.log("#######################");
}

game()
