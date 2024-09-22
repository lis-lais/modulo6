const prompt = require('prompt-sync')();

const string = prompt('Digite o que deseja inverter: ');

function reverseString(strings) {
    const stringsArray = strings.split("").reverse().join("");
        console.log(stringsArray);
}  

reverseString(string);