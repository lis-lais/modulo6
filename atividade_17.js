const prompt = require('prompt-sync')();

function drawEvenNumberTriagle (n) {

    if (n < 0) {
        console.log('O número precisa ser positivo.');
        return;
    }

    for (let i = 0; i < n; i++) {
        let line = '';
        for (let j = 0; j < i; j++) {
            line += '* ';
            
        }
        console.log(line.trim());
    }

}

function getEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

function input() {
    const numbers = prompt('Digite os números separados por vírgulas: ');
    return numbers.split(',').map(num => parseInt(num.trim()));

}

function num() {
    const numbers = input();

    if (numbers.length === 0) {
        console.log('A lista de números está vazia.');
        return;
    }    
    const evenNumbers = getEvenNumbers(numbers);
    console.log(`Números pares: ${evenNumbers.join(',')}`);
    drawEvenNumberTriagle(evenNumbers.length);
}

num();