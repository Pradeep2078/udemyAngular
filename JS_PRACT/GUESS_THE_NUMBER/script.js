'use strict';

// Initially generate random number
let random = 0;

let resultMessage = document.querySelector('.message')
let randomNumber = document.querySelector('.number');
let guessInput = document.querySelector('.guess');
let checkBtn = document.querySelector('.check');

checkBtn.addEventListener('click', matchNumber);

function matchNumber() {
    let numberInput = guessInput.value;
    if(numberInput == random) {
        resultMessage.textContent = "Correct Number!!";  // display message if number will succesful matches.
        document.body.style.cssText = 'background-color: #00FF00;';   // color change if input matched the guesses number.
        guessInput.setAttribute('disabled','true');   // after success input match disabled input box.
    } else if(numberInput > random) {
        resultMessage.textContent = "Too High!!"
    } else {
        resultMessage.textContent = "Too Low!!"
    }
    console.log(`Number is ${numberInput}`)
}

function randomGenerate(){
    random = Math.round(Math.random()*20);
    randomNumber.textContent = random;
    console.log("Random--->",random)
    return random
}

console.log("OUTSIDE----->",randomGenerate())