const prompt = require('prompt-sync')();

function verificarNum(input) {
    const num = parseInt(input);
    if (isNaN(num)) {
        console.log('Você digitou um valor inválido.');
        return false;
    } else if (num <= 1) {
        console.log(`${num} não é um número primo.`);
        return false;
    }
    return num;
}

function numPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const input = prompt('Digite um número para verificar se é primo: ');
const num = verificarNum(input);

if (num !== false) {
    if (numPrimo(num)) {
        console.log(`${num} é um número primo.`);
    } else {
        console.log(`${num} não é um número primo.`);
    
    }
}
