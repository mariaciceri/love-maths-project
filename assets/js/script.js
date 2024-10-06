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

function runGame() {

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