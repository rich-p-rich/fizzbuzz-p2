// Check user answer against correct answer and display correct / incorrect on-screen
function getUserAnswer(evt) {
  console.log(evt);
  const theAnswer = correctAnswer();
  if (evt !== null) {
    if (evt.currentTarget.id === 'fizzbuzz-btn') {
      //check if correct answer is FizzBuzz
      if (theAnswer === 'FizzBuzz') {
        document.getElementById("display-result").innerHTML = "Correct!";
        countCorrect();
        highlightCorrectAnswer();
      } else {
        document.getElementById("display-result").innerHTML = "Incorrect!";
        countIncorrect();
      }
    } else if (evt.currentTarget.id === 'buzz-btn') {
      //check if correct answer is Buzz
      if (theAnswer === 'Buzz') {
        document.getElementById("display-result").innerHTML = "Correct!";
        countCorrect();
        highlightCorrectAnswer();
      } else {
        document.getElementById("display-result").innerHTML = "Incorrect!";
        countIncorrect();
      }
    } else if (evt.currentTarget.id === 'no-btn') {
      //check if correct answer is No
      if (theAnswer === 'No!') {
        document.getElementById("display-result").innerHTML = "Correct!";
        countCorrect();
        highlightCorrectAnswer();
      } else {
        document.getElementById("display-result").innerHTML = "Incorrect!";
        countIncorrect();
      }
    } else if (evt.currentTarget.id === 'fizz-btn') {
      //check if correct answer is Fizz
      if (theAnswer === 'Fizz') {
        document.getElementById("display-result").innerHTML = "Correct!";
        countCorrect();
        highlightCorrectAnswer();
      } else {
        document.getElementById("display-result").innerHTML = "Incorrect!";
        countIncorrect();
      }
    }
  }

// These two lines complete the lines 'You chose ...' and 'The correct answer was ...' in the HTML   
document.getElementById("user-choice").textContent = theAnswer;
document.getElementById("right-answer").textContent = theAnswer;
}

