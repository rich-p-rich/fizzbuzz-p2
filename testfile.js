// Initial values of btn1Ready and btn2Ready are undefined
let btn1Ready;
let btn2Ready;

// generate the Fizz and Buzz numbers and ensure they are not identical
document.getElementById("ready-fizzbuzz").addEventListener("click", readyFizzBuzz);

function readyFizzBuzz() {
  // Your existing code for generating Fizz and Buzz numbers
}

// generate the sequence of Target numbers
document.getElementById("set-target-numbers").addEventListener("click", setTargetNumbers);
function setTargetNumbers() {
  // Your existing code for generating Target numbers
}

// clear the answer field with 'new target number'
function clearResult() {
  // Your existing code for clearing result
};

// enable user answer buttons after Ready FizzBuzz and Set TargetNumber are clicked 
function enableAnsBtns() {
  if (btn1Ready && btn2Ready) {
    document.querySelector("#user-answers").style.display = 'flex';
  } 
}
