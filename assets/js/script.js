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
               runGame(gameType);
           }
       })
    }

    runGame("addition");
})
/**
 * the main game loop, called when the script is first loaded 
 * and after the users answer has been processed 
 */
function runGame(gameType) {
   
    //creates 2 random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;

    if(gameType === "addition") {
        displayAdditionQuestion(num1, num2);

    }else {
        alert(`unknown game type: ${gameType}`);
        throw`unknown game type: ${gameType}.Aborting!`;
    }
}

function checkAnswer() {

}
/**
 * get opperands and operator
 * directly from dom and returns correct answer
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innertext);
    let operand2 = parseInt(document.getElementById('operand2').innertext);
    let operator = document.getElementById("operator").innerText;

    if (operator ==="+"){
        return[operand1 +operand2, "addition"];
    } else{
        alert(`unimplemented operator and ${operator}`);
        throw `unimplimented operator ${operator}.Aborting!`;
    }

}
function incrementScore() {

}
function incrementWrongAnswer() {

}
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}
function displaySubtractQuestion() {

}
function displayMultolyQuestion() {

}