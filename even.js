var card=document.getElementById('card');
var message=document.getElementById('message');
card.addEventListener('mouseover',function(){

    card.style.backgroundColor="green";
    // card.innerHTML="you Hovered";
    message.innerHTML="you are IN";
});
card.addEventListener('mouseout',function(){

    card.style.backgroundColor="blue";
    // card.innerHTML="you Hovered out";
    message.innerHTML="you are OUT";
});

card.addEventListener('click',function(){

    card.style.backgroundColor="yellow";
    // card.innerHTML="you clicked Me!";
    message.innerHTML="you clicked!";
});

var card = document.getElementById('card');
var message = document.getElementById('message');
var beepSound = document.getElementById('beep');

card.addEventListener('mouseover', function () {
    card.style.backgroundColor = "green";
    message.innerHTML = "you are IN";
});

card.addEventListener('mouseout', function () {
    card.style.backgroundColor = "blue";
    message.innerHTML = "you are OUT";
});

card.addEventListener('click', function () {
    card.style.backgroundColor = "yellow";
    message.innerHTML = "you clicked!";
});

function updateClock() {
    var date = new Date();
    var hours = date.getHours().toString().padStart(2, '0');
    var mins = date.getMinutes().toString().padStart(2, '0');
    var secs = date.getSeconds().toString().padStart(2, '0');

    document.getElementById('clock').innerHTML = `${hours}:${mins}:${secs}`;

  
    if (secs === "00") {
        beepSound.currentTime = 0;
        beepSound.play();
    }
}

window.setInterval(updateClock, 1000);
updateClock();
