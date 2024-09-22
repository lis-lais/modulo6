const prompt = require('prompt-sync')();

function countVowels() {
    const sentence = prompt('Digite a frase: ');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let i = 0; i < sentence.length; i++) {
        if (vowels.includes(sentence[i].toLowerCase())) {
            count++;
        }
    }

    console.log(`Número de vogais: ${count}`);
}

countVowels();