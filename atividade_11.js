const prompt = require('prompt-sync')();

function caesarCipher(str, shift) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char >= 'a' && char <= 'z') {
            let newChar = String.fromCharCode(((char.charCodeAt(0) - 'a'.charCodeAt(0) + shift) % 26) + 'a'.charCodeAt(0));
            result += newChar;
        } else if (char >= 'A' && char <= 'Z') {
            let newChar = String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) + shift) % 26) + 'A'.charCodeAt(0));
            result += newChar;
        } else {
            result += char; // Adiciona o caractere original se não for letra
        }
    }

    return result;
}

function encryptSentenceWithCaesarCipher(sentence, shift) {
    // Divide a frase em palavras
    const words = sentence.split(' ');
    // Cifra cada palavra e junta de volta em uma string
    const encryptedWords = words.map(word => caesarCipher(word, shift));
    return encryptedWords.join(' '); // Retorna a frase cifrada
}

// Solicita a string e o shift do usuário
const inputSentence = prompt('Digite a frase para cifrar: ');
const shiftAmount = parseInt(prompt('Digite o valor do shift: '), 10);

// Exibe o resultado
console.log(encryptSentenceWithCaesarCipher(inputSentence, shiftAmount));
