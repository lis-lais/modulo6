const prompt = require('prompt-sync')();

function caesarCipher(str, shift) {
    let result = ''; // Inicializa a string resultante

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        // Verifica se o caractere é uma letra
        if (char >= 'a' && char <= 'z') {
            // Cifra para letras minúsculas
            let newChar = String.fromCharCode(((char.charCodeAt(0) - 'a'.charCodeAt(0) + shift) % 26) + 'a'.charCodeAt(0));
            result += newChar; // Adiciona a nova letra à string resultante
        } else if (char >= 'A' && char <= 'Z') {
            // Cifra para letras maiúsculas
            let newChar = String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) + shift) % 26) + 'A'.charCodeAt(0));
            result += newChar; // Adiciona a nova letra à string resultante
        } else {
            result += char; // Adiciona o caractere original se não for letra
        }
    }

    return result; // Retorna a string cifrada
}

// Solicita a string e o shift do usuário
const inputString = prompt('Digite a string para cifrar: ');
const shiftAmount = parseInt(prompt('Digite o valor do shift: '), 10);

// Exibe o resultado
console.log(caesarCipher(inputString, shiftAmount));
