console.log("Script Loaded!");

var keyA = document.getElementById("a");

var audio1 = new Audio("audio/boom.wav");
var audio2 = new Audio("audio/clap.wav");
var audio3 = new Audio("audio/hihat.wav");
var audio4 = new Audio("audio/kick.wav");
var audio5 = new Audio("audio/openhat.wav");
var audio6 = new Audio("audio/ride.wav");
var audio7 = new Audio("audio/snare.wav");
var audio8 = new Audio("audio/tink.wav");
var audio8 = new Audio("audio/tom.wav");

document.body.onkeypress = function(input){
    var key = input.keyCode;
    if(key == 13){
        console.log("Enter key is pressed");
        audio1.play();
        keyA.classList.add("shadow");
    }
}
document.body.onkeyup = function(input){
    var key = input.keyCode;
    if(key == 13){
        keyA.classList.remove("shadow");
    }
}