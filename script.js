'use strict';
let randNum = Math.trunc(Math.random() *20) +1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess =Number(document.querySelector('.guess').value);
    if( !guess) {
        displayMessage('⛔ No number')
    } else if( guess === randNum) {
        displayMessage('🥳 Correct Number!')
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = randNum;
        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if(guess !== randNum){
        if ( score > 1 ){
            displayMessage(guess > randNum ? '⬆️ Too High!': '⬇️ Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('😏 You Lost!');
            document.querySelector('.score').textContent = 0;
        }
        
    } 
});

document.querySelector('.again').addEventListener('click',function(){
    randNum = Math.trunc(Math.random() *20) +1;
    score = 20;
    displayMessage('😎 Start Guessing....!')
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';

});