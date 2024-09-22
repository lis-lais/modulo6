const prompt = require('prompt-sync')();

function getEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);

}
function input() {
    const numbers = prompt('Digite os números separados por vírgulas: ');
    return numbers.split(',').map(num => parseInt(num.trim()));
}
function validarNum(input) {
    const numbers = parseInt(input);
    if (isNaN(numbers) || numbers < 0) {
        console.log('Você digitou um valor inválido.');
        return false;
    }
    return true;
}
function num() {
    const numbers = input();
    const numPares = numbers.filter(validarNum);

    if (numPares.length === 0) {
        console.log('A lista de números está vazia.');
        return input();
    }    
    const evenNumbers = getEvenNumbers(numPares);
    console.log(`Números pares: ${evenNumbers.join(',')}`);
}

num();