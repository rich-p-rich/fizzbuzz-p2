// show / hide the 'How the games works' section //
document.getElementById("how-to-play").addEventListener("click", showHideGameplay);
function showHideGameplay() {
    document.getElementById("game-rules").classList.toggle("hide");
}

// generate the Fizz and Buzz numbers //
document.getElementById("ready-fizzbuzz").addEventListener("click", readyFizzBuzz);
function readyFizzBuzz() {
    FizzNumber = Math.floor(Math.random() * 8) + 2;
    document.getElementById("fizz-number").innerHTML = FizzNumber;
    BuzzNumber = Math.floor(Math.random() * 8) + 2;
    document.getElementById("buzz-number").innerHTML = BuzzNumber;
}

// generate the sequence of Target numbers //
document.getElementById("set-target-numbers").addEventListener("click", setTargetNumbers);
function setTargetNumbers () {
    TargetNumbers = Math.floor(Math.random()*100) + 3; 
    document.getElementById("target-number").innerHTML = TargetNumbers; 
}

//calculate the correct answer//
if (TargetNumbers % FizzNumber === 0) {
    document.getElementById("checkbox").innerText = "Buzz";
}

if (TargetNumbers % BuzzNumber === 0) {
    document.getElementById("checkbox").innerText = "Buzz";
}

if (TargetNumbers % FizzNumber === 0 && targetNumber % BuzzNumber === 0) {
    document.getElementById("checkbox").innerText = "FizzBuzz";
}
else {
    document.getElementById("checkbox").innerText = "No!";
  }

  //check user answer against correct answer calculated above //
function checkAnswer () {
let userAnswer = 
}
