// scripts.js
const sentences = [
    "-Hello, i'm Tameem Tantawy.",
    "-I'm a student at the University Of South Florida.",
    "-Majoring in CS to become a software engineer."
];

let currentSentenceIndex = 0;
let currentCharacterIndex = 0;
const typingSpeed = 80; // Speed of typing (in milliseconds)
const erasingSpeed = 40; // Speed of erasing (in milliseconds)
const delayBetweenSentences = 2000; // Delay between sentences (in milliseconds)

function type() {
    const typedTextElement = document.getElementById('typed-text');
    if (currentCharacterIndex < sentences[currentSentenceIndex].length) {
        typedTextElement.textContent += sentences[currentSentenceIndex].charAt(currentCharacterIndex);
        currentCharacterIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenSentences);
    }
}

function erase() {
    const typedTextElement = document.getElementById('typed-text');
    if (currentCharacterIndex > 1) {
        typedTextElement.textContent = sentences[currentSentenceIndex].substring(0, currentCharacterIndex - 1);
        currentCharacterIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
        setTimeout(type, typingSpeed);
    }
}

// Start the typing effect
document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(type, typingSpeed);
});
document.getElementById('About-button').addEventListener('click', () => {
    document.getElementById('About').scrollIntoView({ block: 'center', behavior: 'smooth' });
});

document.getElementById('Experience-button').addEventListener('click', () => {
    document.getElementById('Experience').scrollIntoView({ block: 'start', behavior: 'smooth' });
});

document.getElementById('Projects-button').addEventListener('click', () => {
    document.getElementById('Projects').scrollIntoView({ block: 'start', behavior: 'smooth' });
});
