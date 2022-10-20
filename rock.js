//check everything alright
//console.log("Hello Warrior");
//document.write("Hello World!")


//Random computer choice creator
function getComputerChoice(max) {
return Math.floor(Math.random()*max)};
let computerMove= getComputerChoice(3);
if(computerMove === 0) {console.log("Rock")}
    else if (computerMove === 1){
        console.log("Paper")}
    else if (computerMove === 2){
        console.log("Scissors")};

//Get User choice
let userChoice = prompt("Please type Rock, Paper or Scissors !")
userChoice = userChoice.toUpperCase().charAt(0) + 
userChoice.toLowerCase().slice(1);

document.write(userChoice)