//check everything alright
//console.log("Hello Warrior");
//document.write("Hello World!")


//Random computer choice creator
function getComputerChoice(max) {
    return Math.floor(Math.random()*max)};
    //
let computerSelection= getComputerChoice(3);
if(computerSelection === 0) {computerSelection ="Rock"}
    else if (computerSelection === 1){
        computerSelection ="Paper"}
    else if (computerSelection === 2){
        computerSelection ="Scissors"};

//Get User choice
let playerSelection = "Paper" /*prompt("Please type Rock, Paper or Scissors !")
playerSelection = playerSelection.toUpperCase().charAt(0)+
playerSelection.toLowerCase().slice(1);*/

console.log(playerSelection) ;
console.log(computerSelection) ;

//play a single round func
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Draw!")}
    else { if (playerSelection === "Rock" &&
     computerSelection === "Scissors") {
        console.log("Won!") }
    else if (playerSelection === "Rock" &&
     computerSelection === "Paper") {
        console.log("Lose!") }
    else if (playerSelection === "Paper" &&
     computerSelection === "Rock") {
        console.log("Won!") }
    else if (playerSelection === "Paper" &&
     computerSelection === "Scissors") {
        console.log("Lose!") }
    else if (playerSelection === "Scissors" &&
     computerSelection === "Rock") {
        console.log("Lose!") }
    else if (playerSelection === "Scissors" &&
     computerSelection === "Paper") {
        console.log("Won!") }
        } 
}
console.log(playRound(playerSelection, computerSelection));