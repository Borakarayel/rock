//check everything alright
//console.log("Hello Warrior");
//document.write("Hello World!")


//Random computer choice creator
function getComputerChoice(max) {
    return Math.floor(Math.random()*max)};
let computerMove= getComputerChoice(3);
if(computerMove === 0) {computerMove ="Rock"}
    else if (computerMove === 1){
        computerMove ="Paper"}
    else if (computerMove === 2){
        computerMove ="Scissors"};

console.log(computerMove) ;

//Get User choice
let userChoice = prompt("Please type Rock, Paper or Scissors !")
userChoice = userChoice.toUpperCase().charAt(0)+
userChoice.toLowerCase().slice(1);

//play a single round

if (userChoice === computerMove) {
    console.log("Draw!")}
else 
{
if (userChoice === "Rock" && computerMove === "Scissors") {
    console.log("Won!") }
else if (userChoice === "Rock" && computerMove === "Paper") {
    console.log("Lose!") }
else if (userChoice === "Paper" && computerMove === "Rock") {
    console.log("Won!") }
else if (userChoice === "Paper" && computerMove === "Scissors") {
    console.log("Lose!") }
else if (userChoice === "Scissors" && computerMove === "Rock") {
    console.log("Lose!") }
else if (userChoice === "Scissors" && computerMove === "Paper") {
    console.log("Won!") }
    }
