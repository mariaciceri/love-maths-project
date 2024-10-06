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
                alert(`You clicked ${gameType}`);
            }
        });
    };
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the users answer has been processed
 */

function runGame() {
    let num1 = Math.floor(Math.random() * 26) + 1;
    let num2 = Math.floor(Math.random() * 26) + 1;
}

function checkAnswer(answer) {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractionQuestion() {
    
}

function displayMultiplicationQuestion() {
    
}

function displayDivisionQuestion() {
    
}