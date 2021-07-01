const cards = document.querySelectorAll('.memory-card');
let hasFlipped = false;
let firstCard, secondCard;
let  firstCardName, secondCardName;
let freezeBoard = false;
let resetGame = document.querySelector('.reset');
let game = document.querySelector('.game-container');

resetGame.addEventListener('click', (event) => {
    location.reload();
})

function flipCard() {
    if (freezeBoard) {
        return;
    }

    if (this === firstCard) {
        return;
    }

    this.classList.add('flip');

    if (!hasFlipped) {
        hasFlipped = true;
        firstCard = this;
        firstCardName = firstCard.getAttribute('data-name');
    }
    else {
        hasFlipped = false;
        secondCard = this;
        secondCardName = secondCard.getAttribute('data-name');
        checkForMatch();
    }

    
}

function checkForMatch() {
    let isMatch = firstCardName === secondCardName;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

let unflipCards = () => {
    freezeBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        freezeBoard = false;
    }, 1000);
}


(function shuffleCards() {
    cards.forEach((card) => {
        card.style.order = Math.floor(Math.random() * 16);
    })
})();

cards.forEach(card => card.addEventListener('click', flipCard));