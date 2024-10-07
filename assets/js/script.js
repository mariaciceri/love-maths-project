//wait for DOM to finish loading before starting the game
//get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    console.log(buttons)

    for(let button of buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "submit") { //this. refer to the item in the array we are iterating through
                alert("You clicked submit");
            }
            else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    };

    runGame("add");
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the users answer has been processed
 */

function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 26) + 1;
    let num2 = Math.floor(Math.random() * 26) + 1;

    if(gameType === "add") {
        displayAdditionQuestion(num1, num2)
    }
    else {
        alert(`Unkown game type ${gameType}`);
        throw `Unkown game type ${gameType}. Aborting!`;
    }
}

function checkAnswer(answer) {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(oper1, oper2) {
    document.getElementById("operand1").textContent = oper1;
    document.getElementById("operand2").textContent = oper2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractionQuestion() {
    
}

function displayMultiplicationQuestion() {
    
}

function displayDivisionQuestion() {
    
}