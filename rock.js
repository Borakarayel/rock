//check everything alright
console.log("Hello World");
document.write("Hello World!")


//Random computer choice creator
function getComputerChoice(max) {
return Math.floor(Math.random()*max)};
let computerMove= getComputerChoice(3);
if(computerMove === 0) {console.log("Rock")}
    else if (computerMove === 1){console.log("Paper")}
    else if (computerMove === 2){console.log("Scissors")};
