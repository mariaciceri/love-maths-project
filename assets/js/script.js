//wait for DOM to finish loading before starting the game
//get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    console.log(buttons)

    for(let button of buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "submit") { //this. refer to the item in the array we are iterating through
                checkAnswer();
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
        displayAdditionQuestion(num1, num2);
    }
    else if(gameType === "subtract") {
        displaySubtractionQuestion(num1, num2);
    }
    else if(gameType === "multiply") {
        displayMultiplicationQuestion(num1, num2);
    }
    else if(gameType === "divide") {
        displayDivisionQuestion(num1, num2);
    }
    else {
        alert(`Unkown game type ${gameType}`);
        throw `Unkown game type ${gameType}. Aborting!`;
    }
}

/**
 * Check the answer with the first element in the array returned from calculateCorrectAnswer
 */
function checkAnswer() {
    let usersAnswer = parseInt(document.getElementById("answer-box").value); //must use value because is an input
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = usersAnswer === calculatedAnswer[0];

    if(isCorrect) {
        alert(`Hey! You got it right!`)
        incrementScore();
    }
    else {
        alert(`Awww, not this time! You answered ${usersAnswer}. The correct value is ${calculatedAnswer[0]}!`)
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}
 /**
  * gets the operands and the operator directly from the dom, and return the correct answer.
  */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText); // innerText retrieves the rendered text of an element, meaning it only returns what is actually visible to the user.
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if(operator === "+") {
        return [operand1 + operand2, "add"]
    }
    else if(operator === "-") {
        return [operand1 - operand2, "subtract"]
    }
    else if(operator === "x") {
        return [operand1 * operand2, "multiply"]
    }
    else if(operator === "/") {
        return [Math.floor(operand1 / operand2), "divide"]
    }
    else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

/**
 * gets the current score from the DOM and increments it by 1 if the answer is correct
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

/**
 * gets the current score from the DOM and increments it by 1 if the answer is wrong
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(oper1, oper2) {
    document.getElementById("operand1").textContent = oper1;
    document.getElementById("operand2").textContent = oper2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractionQuestion(oper1, oper2) {
    document.getElementById("operand1").textContent = oper1;
    document.getElementById("operand2").textContent = oper2;
    document.getElementById("operator").textContent = "-";
}

function displayMultiplicationQuestion(oper1, oper2) {
    document.getElementById("operand1").textContent = oper1;
    document.getElementById("operand2").textContent = oper2;
    document.getElementById("operator").textContent = "x";
}

function displayDivisionQuestion(oper1, oper2) {
    document.getElementById("operand1").textContent = oper1 > oper2 ? oper1 : oper2;
    document.getElementById("operand2").textContent = oper1 > oper2 ? oper2 : oper1;
    document.getElementById("operator").textContent = "/";
}