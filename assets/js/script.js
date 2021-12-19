
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons ){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type")=== "submit"){
                checkAnswer();
            }else{
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if(event.key==="Enter"){
            checkAnswer();
        }
    })

    runGame("addition");

})

/**
 * this is the main game loop, will generate a random number between 1 and 25
 */


function runGame(gameType){

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    let num1 = Math.floor(Math.random() * 25 ) + 1 ;
    let num2 = Math.floor(Math.random() * 25 ) + 1 ;

    if (gameType==="addition"){
        displayAdditionQuestion(num1, num2);
    } else if(gameType==="multiply"){
        displayMultiplyQuestion(num1,num2);
    } else if(gameType==="subtract"){
        displaySubtractQuestion(num1,num2);
    } else if(gameType==="division"){
        displayDivisionQuestion(num1,num2);
    } else{
        alert(`unknown game type ${gameType}`);
        throw`unknown game type ${gameType}. Aborting!`;
    }
}

function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if(isCorrect){
        alert("you got the answer right!!");
        incrementScore();
    }else{
        alert(`you got it wrong!You answered ${userAnswer}, the correct answer was ${calculatedAnswer[0]}`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
    
}

/**
 * gets the operands and operator directly from the DOM and then returns the correct answer
 */

function calculateCorrectAnswer(){

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+"){
        return [operand1 + operand2, "addition"];
    } else if(operator === "x"){
        return [operand1 * operand2, "multiply"];
    } else if(operator === "-"){
        return [operand1 - operand2, "subtract"];
    } else if(operator === "/"){
        return [parseInt(operand1 / operand2), "division"];
    } else{
        alert(`unimplemented operator ${operator}`);
        throw (`unimplemented operator ${operator}. Aborting!`);
    }

}

function incrementScore(){
   let oldscore = parseInt(document.getElementById("score").innerText);
   document.getElementById("score").innerText = ++oldscore;

}

function incrementWrongAnswer(){
    let oldscore = parseInt(document.getElementById("incorrect").innerText);
   document.getElementById("incorrect").innerText = ++oldscore;

}
    

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}

function displayDivisionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "/";

    if(operand2 >= operand1){
        document.getElementById('operand2').textContent = operand1;
        document.getElementById('operand1').textContent = operand2; 
        operand1++;
    }

    
    
}
