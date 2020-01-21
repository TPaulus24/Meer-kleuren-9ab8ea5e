var achtergrond;
var text;

function myFunctionBackground() {
    achtergrond = document.getElementById('colorinput').value;
}

function myFunctionText() {
    text = document.getElementById('colorinput').value;
}

function myFunction() {
    document.body.style.backgroundColor = achtergrond;
    document.getElementById("text").style.color = text;
}