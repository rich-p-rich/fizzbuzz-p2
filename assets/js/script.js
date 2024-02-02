// Set up order of operations (load DOM then game); add event listeners to the buttons //
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
} else if (targetNumber % fizzNumber !== 0 && targetNumber % buzzNumber !== 0 && targetNumber % fizzBuzz !== 0) {
    correctAnswer = "No!";
} else if (targetNumber % fizzNumber === 0 && targetNumber % buzzNumber === 0) {
    correctAnswer = "FizzBuzz";
}
}

//read answer from user based on button click//
document.getElementById("fizz-btn").addEventListener("click", function() {checkUserAnswer("Fizz");});
document.getElementById("buzz-btn").addEventListener("click", function() {checkUserAnswer("Buzz");});
document.getElementById("no-btn").addEventListener("click", function() {checkUserAnswer("No!");});
document.getElementById("fizzbuzz-btn").addEventListener("click", function() {checkUserAnswer("FizzBuzz");});

//check user answer against calculatedCorrectAnswer// 
function checkUserAnswer (userAnswer) {
    let correctAnswer = calculateCorrectAnswer();
    if (userAnswer === correctAnswer) {
        displayResult("Correct!")
    } else {
        displayResult("Incorrect")
    }
}