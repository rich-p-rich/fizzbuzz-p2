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
function readyFizzBuzz() {
  FizzNumber = Math.floor(Math.random() * 8) + 2;
  document.getElementById("fizz-number").innerText = FizzNumber;
  do {
    BuzzNumber = Math.floor(Math.random() * 8) + 2;
  } while (BuzzNumber === FizzNumber);
  document.getElementById("buzz-number").innerText = BuzzNumber;
}

// generate the sequence of Target numbers
parseInt(document.getElementById("set-target-numbers").addEventListener("click", setTargetNumbers));
function setTargetNumbers() {
  {
    clearResult();
    TargetNumbers = Math.floor(Math.random() * 100) + 1;
    parseInt(document.getElementById("target-number").innerText = TargetNumbers).TargetNumbers;
  } while (TargetNumbers < 10) {
    TargetNumbers = Math.floor(Math.random() * 100) + 1;
    parseInt(document.getElementById("target-number").innerText = TargetNumbers);
  }
}

// clear the answer field with 'new target number'
function clearResult() {
  document.getElementById("display-result").innerText = "";
};

// calculate the correct answer
function correctAnswer() {
  let targetNumber = parseInt(document.getElementById("target-number").innerText);
  let fizzNumber = parseInt(document.getElementById("fizz-number").innerText);
  let buzzNumber = parseInt(document.getElementById("buzz-number").innerText);

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
  return correctAnswer;
}

// Display the result based on user's answer
function displayResult() {
  let userAnswer = getUserAnswer();
  let correct = correctAnswer();
  let output = "";
  if (correct === userAnswer) {
    output = "Correct!";
    scoreCorrect();
  } else {
    output = "Incorrect!";
    scoreIncorrect();
  }
  document.getElementById("display-result").innerText = output;
}



function getUserAnswer(evt) {
  console.log(evt);
  const theAnswer = correctAnswer();
  if (evt !== null) {
    if (evt.currentTarget.id === 'fizz-btn') {
      //check if correct answer is Fizz
      if (theAnswer === 'Fizz') {
        document.getElementById("display-result").innerHTML = "Correct!"
      } else {
        document.getElementById("display-result").innerHTML = "Incorrect!"
      }
    } else if (evt.currentTarget.id === 'buzz-btn') {
      //check if correct answer is Buzz
      if (theAnswer === 'Buzz') {
        document.getElementById("display-result").innerHTML = "Correct!"
      } else {
        document.getElementById("display-result").innerHTML = "Incorrect!"
      }
    } else if (evt.currentTarget.id === 'no-btn') {
      //check if correct answer is No
      if (theAnswer === 'No!') {
        document.getElementById("display-result").innerHTML = "Correct!"
      } else {
        document.getElementById("display-result").innerHTML = "Incorrect!"
      }
    } else if (evt.currentTarget.id === 'fizzbuzz-btn') {
      //check if correct answer is FizzBuzz
      if (theAnswer === 'FizzBuzz') {
        document.getElementById("display-result").innerHTML = "Correct!"
      } else {
        document.getElementById("display-result").innerHTML = "Incorrect!"
      }
    }
  }
}

// Get new target number to continue the game
parseInt(document.getElementById("next-target-number").addEventListener("click", setTargetNumbers));
document.getElementById("next-target-number").min = "10", max = "99";