// show / hide the 'How the games works' section //
document.getElementById("how-to-play").addEventListener("click", showHideGameplay);
function showHideGameplay() {
    document.getElementById("game-rules").classList.toggle("hide");
}

// conditions to ensure the FizzBuzz numbers are between 2 and 9, and cannot be the same //
document.getElementById("ready-fizzbuzz").addEventListener("click", readyFizzBuzz);
document.getElementById("ready-fizzbuzz").min = "2", max = "9";
document.getElementById("ready-fizzbuzz").max = "9";

// generate the Fizz and Buzz numbers //
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

//allow only one answer in the answer checkbox//
function selectOnlyThis(id){
    var myCheckboxAnswer = document.getElementsByName("checkbox-answer");
    Array.prototype.forEach.call(myCheckboxAnswer,function(el){
      el.checked = false;
    });
    id.checked = true;
  }

//calculate the correct answer and check user input//
function checkAnswer () {
        let userAnswer = parseInt(document.getElementsByName("checkbox-answer").checked);    
        let checkedAnswer = calculateCorrectAnswer();
        let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Correct!");
    } else {
        alert("Incorrect!")
    }

    runGame(calculatedAnswer[1]);
}
    
//checks what the right answer should be// 

function calculateCorrectAnswer() {

    let TargetNumbers = document.getElementById("target-number").value;
        TargetNumbers = parseInt (TargetNumbers);

        let fizzCheckbox = document.getElementById("answerFizz").checked;
        let buzzCheckbox = document.getElementById("answerBuzz").checked;
        let noCheckedbox = document.getElementById("answerNo").checked;
        let fizzBuzzCheckbox = document.getElementById("answerFizzBuzz").checked;

    if (fizzCheckbox) {
        if (targetNumber % fizzNumber === 0) {
            document.getElementById("answerFizz").innerText = "Correct!";
        } }

    if (buzzCheckbox) {
        if (targetNumber % buzzNumber === 0) {
            document.getElementById("answerBuzz").innerText = "Correct!";
        }  }       
        
    if (noCheckedbox) {
        if (targetNumber % fizzNumber !== 0 && targetNumber % buzzNumber !== 0 && targetNumber % fizzBuzz !== 0) {
                document.getElementById("answerNo").innerText = "Correct!";
            } }
    
    if (fizzBuzzCheckbox) {
        if (targetNumber % fizzNumber === 0 && targetNumber % buzzNumber === 0) {
                    document.getElementById("answerFizzBuzz").innerText = "Correct!";
            }                  
    }
    }
