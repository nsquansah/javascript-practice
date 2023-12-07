const secretNUmber = Math.floor(Math.random() * 100) + 1;
    
function guess(){
console.log(secretNUmber);
let userInput = document.getElementById("userInput").value //secretNUmber;
if(userInput !== ''){

let userPrompt = document.getElementById("userPrompt");
userInput = parseInt(userInput);

if(userInput < secretNUmber){
userPrompt.innerHTML = "Too low!";
}else if (userInput > secretNUmber){
userPrompt.innerHTML = "Too high!";
}else {
userPrompt.innerHTML = "You guessed right!"
}
}
}