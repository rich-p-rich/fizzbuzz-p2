document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            let gameType = this.getAttribute("data-type");
            alert(`You clicked ${gameType}`);
        });
    }    
})

// show / hide the 'How the games works' section //
document.getElementById("how-to-play").addEventListener("click", showHideGameplay);
function showHideGameplay() {
    document.getElementById("game-rules").classList.toggle("hide");
}

// conditions to ensure the FizzBuzz numbers are between 2 and 9, and cannot be the same //
document.getElementById("ready-fizzbuzz").addEventListener("click", readyFizzBuzz);
document.getElementById("ready-fizzbuzz").min = "2", max = "9";

// generate the Fizz and Buzz numbers //
function readyFizzBuzz() {
    FizzNumber = Math.floor(Math.random() * 8) + 2;
    document.getElementById("fizz-number").innerHTML = FizzNumber;
    BuzzNumber = Math.floor(Math.random() * 8) + 2;
    document.getElementById("buzz-number").innerHTML = BuzzNumber;
    // ensures the Fizz and Buzz numbers are not the same//
    if (BuzzNumber === FizzNumber) {
        BuzzNumber = Math.floor(Math.random() * 9) + 2;
    } 
}

// generate the sequence of Target numbers //
document.getElementById("set-target-numbers").addEventListener("click", setTargetNumbers);
document.getElementById("target-number").min = "10", max = "99";
function setTargetNumbers () {
    TargetNumbers = Math.floor(Math.random()*100) + 3; 
    document.getElementById("target-number").innerHTML = TargetNumbers; 
}

//allow only one answer in the answer checkbox//
function selectOnlyThis(id){
    var myCheckboxAnswer = document.getElementsByName("checkbox-answer");
    Array.prototype.forEach.call(myCheckboxAnswer,function(el){
      el.checked = false;
    });
    id.checked = true;
  }

//checks what the right answer should be// 
function calculateCorrectAnswer() { 
let targetNumber = parseInt(document.getElementById("target-number").value);
let fizzNumber = document.getElementById(fizz-number).value;
let buzzNumber = document.getElementById(buzz-number).value;

let correctAnswer = "";
if (targetNumber % fizzNumber === 0) {
    correctAnswer = "Fizz";
} else if (targetNumber % buzzNumber === 0) {
    correctAnswer = "Buzz";
} else if (targetNumber % fizzNumber !== 0 && targetNumber % buzzNumber !== 0 && targetNumber % fizzBuzz !== 0) {
    correctAnswer = "No!";
} else if (targetNumber % fizzNumber === 0 && targetNumber % buzzNumber === 0) {
    correctAnswer = "FizzBuzz";
}
}

//checks user answer// 
document.addEventListener(function() {
let answerCheckbox = document.getElementsByTagName("answer-checkbox");
   for (let answerCheckbox of answerCheckboxes) {
        answerCheckbox.addEventListener("click", function() 
        if (this.getAttribute("data-type")))
    }
    
}

let userAnswer = document.querySelector(input[checkbox-answer]).addEventListener("click".checked);
if (userAnswer && userAnswer.value === correctAnswer) {
    document.getElementById("result").innerText = "Correct!"
} else {document.getElementById("result").innerText = "Incorrect!"
}

//generate next target number//
document.getElementById("next-target-numbers").addEventListener("click", nextTargetNumbers);
document.getElementById("next-target-number").min = "10", max = "99";
function nextTargetNumbers () {
    TargetNumbers = Math.floor(Math.random()*100) + 3; 
    document.getElementById("next-target-number").innerHTML = NextTargetNumbers; 
}