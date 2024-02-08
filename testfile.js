(function() {
    var link = $('link');
    var button = $('button');
 
    button.click(function () {
        if (button.data('file', 'day')) {
            $('#day-button').attr('disabled', true);
            $('#night-button').removeAttr('disabled');
            link.attr('href', 'night.css');
        } else {
            $('#day-button').removeAttr('disabled');
            $('#night-button').attr('disabled', true);
            link.attr('href', 'day.css');
        }
    });
})();

let input = document.querySelector(".click");
let button = document.querySelector(".button");
button.disabled = true;
input.addEventListener("change", stateHandle);

function stateHandle() {
    if(document.querySelector(".input").value === "") {
        button.disabled = true;
    } else {
        button.disabled = false;
    }

}



<script>
function enableButton2() {
    document.getElementById("button2").disabled = false;
}
</script>
</head>
<body>
<input type="button" id="button1" value="button 1" onclick="enableButton2()"  />
<input type="button" id="button2" value="button 2" disabled />
</body>




element.addEventListener("click", function(){ alert("Hello World!"); });


element.addEventListener("click", enableAnswerButtons()); 