//Highlight the correct answer in green after user clicks their answer 
function highlightCorrectAnswer() {
  const theAnswer = correctAnswer();  

  let correctOption = null;
  if (theAnswer === 'FizzBuzz') {
    correctOption = document.getElementById('fizzbuzz-btn');
  } else if (theAnswer === 'Buzz') {
    correctOption = document.getElementById('buzz-btn');
  } else if (theAnswer === 'No!') {
    correctOption = document.getElementById('no-btn');
  } else if (theAnswer === 'Fizz') {
    correctOption = document.getElementById('fizz-btn');
  }

  if (correctOption) {
    correctOption.classList.add('correct-answer');
  }
}


