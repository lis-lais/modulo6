const prompt = require('prompt-sync')();

const numeros = prompt('Digite os números separados por vírgulas: ');

function findMax(array) {
    return Math.max(...array);
}

const numArray = numeros.split(',')
    .map(num => parseFloat(num.trim()))
    .filter(num => !isNaN(num));

if (numArray.length === 0) {
    console.log('Nenhum número válido foi digitado.');
} else {
    const maxNumber = findMax(numArray);
    console.log(`O número máximo do array é: ${maxNumber}`);
}



