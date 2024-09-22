const prompt = require('prompt-sync')();

function removeDuplicates(array) {
    return [...new Set(array)];
}
function sortUniqueNumbers(numbers) {
    const uniqueNumbers = removeDuplicates(numbers);
    return uniqueNumbers.sort((a, b) => a - b);
}

function input() {
    const numbers = prompt('Digite os números separados por vírgulas: ');
    return numbers.split(',').map(num => parseInt(num.trim()));
}


function num() {
    const numbers = input();
    if (numbers.length === 0 || numbers.every(isNaN)) {
        console.log('A lista de números está vazia.');
        return input();
    } 
    const orderNumbers = sortUniqueNumbers(numbers);

    console.log(`Números únicos ordenados: ${orderNumbers}`);
}

num();