/* Display the result based on user's answer
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
}*/