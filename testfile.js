<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Disable Buttons</title>
</head>
<body>

<div id="user-answers" class="answer-btns">
    <div class="button-container-1"> 
        <button data-type="fizzbuzz" id="fizzbuzz-btn" class="answerButtons" onclick="getUserAnswer(event)">FizzBuzz</button>
        <button data-type="fizz" id="fizz-btn" class="answerButtons" onclick="getUserAnswer(event)">Fizz</button>
    </div>
    <div class="button-container-2">
        <button data-type="buzz" id="buzz-btn" class="answerButtons" onclick="getUserAnswer(event)">Buzz</button>
        <button data-type="no" id="no-btn" class="answerButtons"  onclick="getUserAnswer(event)">No!</button>
    </div>
</div>

<!-- Include the JavaScript file -->
<script src="script.js"></script>

</body>
</html>
