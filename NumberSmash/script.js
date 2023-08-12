var timer = 60;
var hitNum  = 0;
var score = 0;

function runTimer(){
    var timeIs = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".timerVal").textContent = timer;
        }
        else{
            clearInterval(timeIs);
            document.querySelector("#pbtm").innerHTML = "<h1>Game Over</h1>";
        }
    },1000);
}

function increaseScore(){
    score += 10;
    document.querySelector(".score").textContent = score;
}
function decreaseScore(){
    score -= 10;
    document.querySelector(".score").textContent = score;
}

function makeBubble(){
    var Bubbles = "";

    for(var i=1; i<=175; i++){
        var hitrn = Math.ceil(Math.random()*10);
        Bubbles += `<div id="bubble">${hitrn}</div>` ;
    }
    document.querySelector("#pbtm").innerHTML = Bubbles;
}

function hitNumber(){
    hitNum = Math.ceil(Math.random()*10);
    document.querySelector(".hitBox").textContent = hitNum;
}

function mouseClick(){
    document.querySelector("#pbtm").addEventListener("click", function(details) {
        var onClickNum = Number(details.target.textContent)
        if(hitNum === onClickNum){
            hitNumber();
            increaseScore();
            makeBubble();
        }
        else if ((hitNum !== onClickNum) && (score <= 0)) {
            
        }
        else {
            decreaseScore();
        }
    })
}

makeBubble();
runTimer();
hitNumber();
mouseClick()