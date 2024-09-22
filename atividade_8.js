const prompt = require('prompt-sync')();

function sumOfUniqueEvenNumbers(numbers) {
    const uniqueEvenNumbers = [...new Set(numbers.filter(num => num % 2 === 0))];
    return uniqueEvenNumbers.reduce((acc, num) => acc + num, 0);
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
    const evenNumbers = sumOfUniqueEvenNumbers(numbers);
    console.log(`A soma dos números pares únicos é: ${evenNumbers}`);
}

num();