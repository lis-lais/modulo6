const prompt = require('prompt-sync')();
function getOddNumbers () {
    let num = prompt('Digite um número: ');
    num = parseInt(num);

    while (isNaN(num) || num % 2 === 0) {
        console.log('O número digitado não é válido ou é par. Tente novamente.');
        num = prompt('Digite um número: ');
        num = parseInt(num);
    }

    console.log(`O número ${num} é impar.`);

}
getOddNumbers();