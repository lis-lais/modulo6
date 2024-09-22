const prompt = require('prompt-sync')();

const userNames = prompt('Digite os nomes separados por espaço: ');

function greetUsers(names) {
    const namesArray = names.split(' ');

    namesArray.forEach(name => {
        console.log(`Olá, ${name}!`);
    });
}

greetUsers(userNames);