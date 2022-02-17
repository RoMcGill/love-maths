// wait for dom to finish loading before running the game 
//get the button elements and add event listeners

document.addEventListener("DOMContentLoaded",function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
       button.addEventListener("click",function(){
           if (this.getAttribute("data-type") ==="submit"){
               alert("you clicked submit");

           } else {
               let gameType = this.getAttribute("data-type");
               alert(`you clicked ${gameType}`);
           }
       })
    }
})

function runGame() {
    let num1 = math.floor(math.random() * 25) +1;
    let num2 = math.floor(math.random() * 25) +1;

}

function checkAnswer() {

}
function calculateCorrectAnswer() {

}
function incrementScore() {

}
function incrementWrongAnswer() {

}
function displayAdditionQuestion() {

}
function displaySubtractQuestion() {

}
function displayMultolyQuestion() {

}