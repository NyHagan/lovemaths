
document.addEventListener("DOMContentLoaded", function(){
     let buttons = document.getElementsByTagName("button");
     for(let button of buttons ){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type")=== "submit"){
                alert("you clicked the submit button");
            }else{
                let gameType = this.getAttribute("data-type");
                alert(`you clicked ${gameType}`);
            }
        })
     }
})

/**
 * this is the main game loop, will generate a random number between 1 and 25
 */


function runGame(){
    let num1 = Math.floor(Math.random() * 25 ) + 1 ;
    let num2 = Math.floor(Math.random() * 25 ) + 1 ;
}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}