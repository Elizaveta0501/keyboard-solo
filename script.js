const words = ['animation', 'biography', 'fantasy', 'western', 'action', 'adventure', 'comedy', 'drama', 'horror', 'thriller'];

const content = document.querySelector('.word');
let currentMessage;
let currentPlace;
let maxPlace;


addEventListener('load', function() {
    addWord();
});


addEventListener('keydown', function(event) {
    const pressKey = event.key;
    const currentSpan = document.querySelector('#letter' + currentPlace);
    if (currentMessage[currentPlace] != pressKey) {
        currentSpan.classList.add('w');
    } else {
        currentSpan.classList.remove('w');
        currentSpan.classList.add('c');
        currentPlace++;
        if (currentPlace > maxPlace) {
            addWord();
        }
    }
});


function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function getRandomWord() {
    const randomNumber = generateRandomInt(0, words.length - 1);
    return words[randomNumber];
}


function addWord() {
    content.innerHTML = '';
    const fragment = new DocumentFragment();
    currentMessage = getRandomWord().slice('');

    for (let i = 0; i < currentMessage.length; i++) {
        const letterSpan = document.createElement('span');
        letterSpan.textContent = currentMessage[i];
        letterSpan.setAttribute('id', 'letter' + i);
        fragment.appendChild(letterSpan);
    }

    content.appendChild(fragment);
    currentPlace = 0;
    maxPlace = currentMessage.length - 1;
}