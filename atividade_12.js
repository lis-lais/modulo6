const prompt = require('prompt-sync')();

const elementos = prompt('Digite separando por vírgulas: ');

function removeDuplicates(array) {
    return Array.from(new Set(array)); //Cria um Set que automaticamente remove duplicatas.        //Converte o Set de volta para um array.
}

const numArray = elementos.split(',');

if (numArray.length === 0) {
    console.log('Nenhum elemento foi digitado.');
} else {
    const uniqueElements = removeDuplicates(numArray);
    console.log(`${uniqueElements.join(', ')}`); //Converte o array de números únicos em uma string onde os números são separados por vírgulas
}