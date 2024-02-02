// Set up order of operations (load DOM then game); add event listeners to the buttons //
document.addEventListener("DOMContentLoaded", function() {
    let answerButtons = document.querySelectorAll("answer-buttons");
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

//check what the right answer should be// 
function calculateCorrectAnswer() { 
let targetNumber = parseInt(document.getElementById("target-number").value);
let fizzNumber = document.getElementById("fizz-number").value;
let buzzNumber = document.getElementById("buzz-number").value;

let correctAnswer = "";
if (targetNumber % fizzNumber === 0) {
    correctAnswer = "Fizz";
} else if (targetNumber % buzzNumber === 0) {
    correctAnswer = "Buzz";
} else if (targetNumber % fizzNumber !== 0 && targetNumber % buzzNumber !== 0) {
    correctAnswer = "No!";
} else if (targetNumber % fizzNumber === 0 && targetNumber % buzzNumber === 0) {
    correctAnswer = "FizzBuzz";
}
}

//read answer from user based on button click//
function userInputAnswer () {
    document.getElementById("fizz-btn").addEventListener("click", function() {
        userInputAnswer("Fizz");
      });
      
      document.getElementById("buzz-btn").addEventListener("click", function() {
        userInputAnswer("Buzz");
      });
      
      document.getElementById("no-btn").addEventListener("click", function() {
        userInputAnswer("No!");
      });
      
      document.getElementById("fizzbuzz-btn").addEventListener("click", function() {
        userInputAnswer("FizzBuzz");
      });
    }

// Check user answer against calculatedCorrectAnswer //
let correctAnswer = calculateCorrectAnswer();
let userAnswer = userInputAnswer();

let result = 
function(){
if (correctAnswer === userAnswer) {
  displayResult("Correct!");
} else {
  displayResult("Incorrect");
}
}

// Display the result in the element with id "result" //
function displayResult() {
    document.getElementById("display-result").innerText = ("result");
  }

// Get new target number to continue the game //
document.getElementById("next-target-number").addEventListener("click", setTargetNumbers);
document.getElementById("next-target-number").min = "10", max = "99";
function setNewTargetNumber () {
    TargetNumbers = Math.floor(Math.random()*100) + 3; 
    document.getElementById("next-target-number").innerHTML = TargetNumbers;
}
