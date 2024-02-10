const answerButtons = document.querySelectorAll('.answerButtons');
const nextButton = document.getElementById('.enable-answers');

function restrictAnswers() {
  answerButtons.forEach(function(button) {
    button.disabled = true;
  });
}

function enableAnswers() {
  answerButtons.forEach(function(button) {
    button.disabled = false;
  });
}