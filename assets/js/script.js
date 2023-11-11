const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const resetBtn = document.querySelector('.reset');
const scoreDisplay = document.querySelector('.score');

let score = 0;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);

    score += 1;
    updateScore();
};

const loop = setInterval(() => {
    console.log('loop');

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 70) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './assets/images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        clearInterval(loop);
    }
}, 10);

function resetPage() {
    location.reload();
}

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}

document.addEventListener('keydown', jump);