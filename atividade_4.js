const prompt = require('prompt-sync')();

const numeros = prompt('Digite os números separados por vírgulas: ');

function getUniqueValues(array) {
    return Array.from(new Set(array)); //Cria um Set que automaticamente remove duplicatas.        //Converte o Set de volta para um array.
}

const numArray = numeros.split(',')
    .map(num => parseFloat(num.trim()))
    .filter(num => !isNaN(num));

if (numArray.length === 0) {
    console.log('Nenhum número foi digitado.');
} else {
    const uniqueNumbers = getUniqueValues(numArray);
    console.log(`${uniqueNumbers.join(', ')}`); //Converte o array de números únicos em uma string onde os números são separados por vírgulas
}