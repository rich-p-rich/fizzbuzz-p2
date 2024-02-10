let btn1Ready = false;
let btn2Ready = false;

// Set up order of operations (load DOM then game); add event listeners to the buttons
document.addEventListener("DOMContentLoaded", function () {
  let answerButtons = document.querySelectorAll(".answer-buttons");
})

// toggle between 'show' and 'hide' for the 'How the games works' section
document.getElementById("click-for-rules").addEventListener("click", showHideGameplay);
function showHideGameplay() {
  document.getElementById("game-rules").classList.toggle("hide");
}

// conditions to ensure the FizzBuzz numbers are between 2 and 9
parseInt(document.getElementById("ready-fizzbuzz").addEventListener("click", readyFizzBuzz));
parseInt(document.getElementById("ready-fizzbuzz").min = "2", max = "9");

// generate the Fizz and Buzz numbers and ensure they are not identical
document.getElementById("ready-fizzbuzz").addEventListener("click", readyFizzBuzz);

function readyFizzBuzz() {
  FizzNumber = Math.floor(Math.random() * 8) + 2;
  document.getElementById("fizz-number").innerText = FizzNumber;
  do {
    BuzzNumber = Math.floor(Math.random() * 8) + 2;
  } while (BuzzNumber === FizzNumber);
  document.getElementById("buzz-number").innerText = BuzzNumber;
  //set condition 1 of 2 to enable answer buttons (next is Target Number)
  btn1Ready = true;
  enableAnswerButtons()
}

// generate the sequence of Target numbers
document.getElementById("set-target-numbers", "next-target-number").addEventListener("click", setTargetNumbers);
   
function setTargetNumbers() {
  clearResult();
  do {
    TargetNumbers = Math.floor(Math.random() * 100) + 1;
    document.getElementById("target-number", "next-target-number").innerText = TargetNumbers;
  } while (TargetNumbers < 10);
  //set condition 2 of 2 to enable answer buttons (previous is Ready FizzBuzz)
  btn2Ready = true;
  enableAnswerButtons()
}

// Reveal the answer buttons once FizzBuzzNumbers and Target Numbers are clicked
function enableAnswerButtons() {
  if (btn1Ready && btn2Ready) {
    document.querySelector("#user-answers").style.display = 'flex'
  } 
}

// calculate the correct answer
function correctAnswer() {
  let targetNumber = parseInt(document.getElementById("target-number").innerText);
  let fizzNumber = parseInt(document.getElementById("fizz-number").innerText);
  let buzzNumber = parseInt(document.getElementById("buzz-number").innerText);

  let correctAnswer = "";
  if (targetNumber % fizzNumber === 0 && targetNumber % buzzNumber === 0) {
    correctAnswer = "FizzBuzz";
  } else if (targetNumber % fizzNumber === 0) {
    correctAnswer = "Fizz";
  } else if (targetNumber % buzzNumber === 0) {
    correctAnswer = "Buzz";
  } else if (targetNumber % fizzNumber !== 0 && targetNumber % buzzNumber !== 0) {
    correctAnswer = "No!";
  }
  return correctAnswer;
}

//Check user answer against correct answer and display on-screen
function getUserAnswer(evt) {
  console.log(evt);
  const theAnswer = correctAnswer();
  if (evt !== null) {
    if (evt.currentTarget.id === 'fizzbuzz-btn') {
      //check if correct answer is FizzBuzz
      if (theAnswer === 'FizzBuzz') {
        document.getElementById("display-result").innerHTML = "Correct!";
        countCorrect();
      } else {
        document.getElementById("display-result").innerHTML = "Incorrect!";
        countIncorrect();
      }
    } else if (evt.currentTarget.id === 'buzz-btn') {
      //check if correct answer is Buzz
      if (theAnswer === 'Buzz') {
        document.getElementById("display-result").innerHTML = "Correct!";
        countCorrect();
      } else {
        document.getElementById("display-result").innerHTML = "Incorrect!";
        countIncorrect();
      }
    } else if (evt.currentTarget.id === 'no-btn') {
      //check if correct answer is No
      if (theAnswer === 'No!') {
        document.getElementById("display-result").innerHTML = "Correct!";
        countCorrect();
      } else {
        document.getElementById("display-result").innerHTML = "Incorrect!";
        countIncorrect();
      }
    } else if (evt.currentTarget.id === 'fizz-btn') {
      //check if correct answer is Fizz
      if (theAnswer === 'Fizz') {
        document.getElementById("display-result").innerHTML = "Correct!";
        countCorrect();
      } else {
        document.getElementById("display-result").innerHTML = "Incorrect!";
        countIncorrect();
      }
    }
  }
}

// clear the answer field with 'new target number'
function clearResult() {
  document.getElementById("display-result").innerText = "";
};

// Keep score of correct and incorrect answers 
function countCorrect () {
  let oldScore = parseInt(document.getElementById("correct-answers").innerText);
  document.getElementById("correct-answers").innerText = ++oldScore;
}
function countIncorrect () {
  let oldScore = parseInt(document.getElementById("incorrect-answers").innerText);
  document.getElementById("incorrect-answers").innerText = ++oldScore;
}

//Reset score to zero
function resetScore() {
  document.getElementById("correct-answers").innerText = "0";
  document.getElementById("incorrect-answers").innerText = "0";
};

/*function resetScore () {
  clearResult();
  let resetScore = 0; 
  parseInt(document.getElementById("reset-scores").addEventListener("click", resetScore));
  document.getElementById("score-correct").innerText = resetScore; 
  document.getElementById("score-incorrect").innerText = resetScore;
}*/
