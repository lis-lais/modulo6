const prompt = require('prompt-sync')();

function reverseString(sentence) {
    const words = sentence.split(' ');
    const reverseWords = words.map(word => word.split('').reverse().join('')).join(' ');
    return reverseWords;
}

function reverseWordsInSentence() {
    const sentence = prompt('Digite a frase: ');
    console.log(reverseString(sentence));
}

reverseWordsInSentence();
