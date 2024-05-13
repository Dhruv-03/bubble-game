let timer = 60;
let randomNumber = 0;
let score = 0;
const makeBubble = () => {
    let bubble = "";

    for (let i = 0; i < 120; i++) {
        bubble += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }
    document.querySelector('#p-bottom').innerHTML = bubble;
}

const runTimer = () => {
    const gameTimer = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector('.p-items:nth-child(2) .container').innerText = timer;
        }
        else {
            clearInterval(gameTimer);
            document.querySelector('#p-bottom').innerHTML = `GAME OVER! <br> Your score: ${score}`;
        }
    }, 1000)
}

const bubbleToHit = () => {
    randomNumber = Math.floor(Math.random() * 10);
    document.querySelector('.p-items:nth-child(1) .container').textContent = randomNumber;
}

const incrScore = () => {
    score += 10;
    document.querySelector('.p-items:nth-child(3) .container').textContent = score;
}

const startGame = () => {
    document.querySelector('.start').addEventListener('click', () => {
        document.querySelector('#p-bottom').innerHTML = "";
        makeBubble();
        runTimer();
        bubbleToHit();
    })

}

//using the concept of Event-Bubbling i.e. if the event is not able to listen from a element then that event will listen from it's parent element and so on.
//instead of adding eventlistener to all the bubbles, add listener to the bottom panel which is the parent of all the bubbles.
document.querySelector('#p-bottom').addEventListener('click', (details) => {
    let value = Number(details.target.textContent);

    if (value === randomNumber) {
        incrScore();
        makeBubble();
        bubbleToHit();
    }

})




startGame();
