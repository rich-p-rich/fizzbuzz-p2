// Set both buttons to 'false' so that default setting = not displayed until FizzBuzzNumbers and Target Numbers are clicked
// The function to enable the answer button display is line 51, the function is called at lines 21 and 40 for the FizzBuzz and TargetNumbers respectively 
let btn1Ready = false; // This is the 'Ready FizzBuzz' button
let btn2Ready = false; // This is the 'Ready Target Number' button


// Set up order of operations (load DOM then game); 
document.addEventListener("DOMContentLoaded", function () {
  });

// Toggle between 'show' and 'hide' for the 'How the games works' section
document.getElementById("click-for-rules").addEventListener("click", showHideGameplay);

// Show or hide the gameplay explanation when clicked in the header
function showHideGameplay() {
  document.getElementById("game-rules").classList.toggle("hide");
}

// Conditions to ensure the FizzBuzz numbers are between 2 and 9
parseInt(document.getElementById("ready-fizzbuzz").addEventListener("click", readyFizzBuzz));
parseInt(document.getElementById("ready-fizzbuzz").min = "2");
parseInt(document.getElementById("ready-fizzbuzz").max = "9");

// Generate the Fizz and Buzz numbers and ensure they are not identical
document.getElementById("ready-fizzbuzz").addEventListener("click", readyFizzBuzz);

//Generate the FizzBuzz numbers 
let FizzNumber;
let BuzzNumber; 

function readyFizzBuzz() {
  FizzNumber = Math.floor(Math.random() * 8) + 2;
  document.getElementById("fizz-number").innerText = FizzNumber;
  do {
    BuzzNumber = Math.floor(Math.random() * 8) + 2;
  } while (BuzzNumber === FizzNumber);
  document.getElementById("buzz-number").innerText = BuzzNumber;
  //set condition 1 of 2 to enable answer buttons (next is Target Number)
  btn1Ready = true;
  enableAnswerButtons();
  resetScore();
  clearResult();
}

// Generates the Target numbers
document.getElementById("set-target-numbers", "next-target-number").addEventListener("click", setTargetNumbers);

// Generate the Target Number, either by clicking 'Set' or 'Next' Target Number 
let TargetNumbers;

function setTargetNumbers() {
  clearResult();
  do {
    TargetNumbers = Math.floor(Math.random() * 100) + 1;
    document.getElementById("target-number", "next-target-number").innerText = TargetNumbers;
  } while (TargetNumbers < 10);
  //set condition 2 of 2 to enable answer buttons (previous is Ready FizzBuzz)
  btn2Ready = true;
  enableAnswerButtons();
}

// Enable answer button display after FizzBuzz and Set Target Number are clicked 
function enableAnswerButtons() {
  if (btn1Ready && btn2Ready) {
    document.querySelector("#user-answers").style.display = 'flex';
  }
}

// Calculate the correct answer
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
    correctAnswer = "No";
  }
  return correctAnswer;
}

// Check user answer against correct answer and display correct / incorrect on-screen
// getUserAnswer refers to the 'onclick' attribute used at index.html line 77 and following to capture the user input
function getUserAnswer(evt) {
  console.log(evt);
  const theAnswer = correctAnswer();
  let userChoice = '';
  
  if (evt !== null) {
     if (evt.currentTarget.id === 'fizzbuzz-btn') {
      userChoice = 'FizzBuzz'; 
      //check if correct answer is FizzBuzz
      if (theAnswer === 'FizzBuzz') {
        document.getElementById("display-result").innerHTML = "Correct!";
        countCorrect();
      } else {
        document.getElementById("display-result").innerHTML = "Incorrect!";
        countIncorrect();
      }
    } else if (evt.currentTarget.id === 'buzz-btn') {
      userChoice = 'Buzz'; 
      //check if correct answer is Buzz
      if (theAnswer === 'Buzz') {
        document.getElementById("display-result").innerHTML = "Correct!";
        countCorrect();
      } else {
        document.getElementById("display-result").innerHTML = "Incorrect!";
        countIncorrect();
      }
    } else if (evt.currentTarget.id === 'no-btn') {
      userChoice = 'No'; 
      //check if correct answer is No
      if (theAnswer === 'No') {
        document.getElementById("display-result").innerHTML = "Correct!";
        countCorrect();
      } else {
        document.getElementById("display-result").innerHTML = "Incorrect!";
        countIncorrect();
      }
    } else if (evt.currentTarget.id === 'fizz-btn') {
      userChoice = 'Fizz';
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
// Thid line es completes the line 'The correct answer was ...' in the HTML   
document.getElementById("user-choice").textContent = userChoice;
document.getElementById("right-answer").textContent = theAnswer;
}

// Restrict user to one answer per Target Number by disabling all answer buttons after user choice
let answerButtons = document.querySelectorAll(".answerButtons");
answerButtons.forEach(function (button) {
  button.addEventListener("click", restrictAnswers);
});

// Disable the answer buttons after the user has clicked on one
function restrictAnswers() {
  let answerButtons = document.querySelectorAll(".answerButtons");
  answerButtons.forEach(function (button) {
    button.disabled = true;
  });
}

// Enable answer buttons with new Target Number / Reset score / FizzBuzz button
let allowButtons = document.querySelectorAll(".allowAnsBtns");
allowButtons.forEach(function (button) {
  button.addEventListener("click", allowAnswerButtons);
});

// Enable the answer buttons again after clicking New Target Number / Reset score / Set Target Number FizzBuzz button
function allowAnswerButtons() {
  let answerButtons = document.querySelectorAll(".answerButtons");
  answerButtons.forEach(function (button) {
    button.disabled = false;
  });
}

// Clear the answer field with 'new target number'
function clearResult() {
  document.getElementById("display-result").innerText = "";
  document.getElementById("user-choice").textContent = " ";
  document.getElementById("right-answer").textContent = " ";
}

// Keep score of correct and incorrect answers 
// ! This is based closely on the LoveMaths walk-through project on the CodeInstitut platform
function countCorrect() {
  let oldScore = parseInt(document.getElementById("correct-answers").innerText);
  document.getElementById("correct-answers").innerText = ++oldScore;
}
function countIncorrect() {
  let oldScore = parseInt(document.getElementById("incorrect-answers").innerText);
  document.getElementById("incorrect-answers").innerText = ++oldScore;
}

// Reset score to zero
function resetScore() {
  document.getElementById("correct-answers").innerText = "0";
  document.getElementById("incorrect-answers").innerText = "0";
}
