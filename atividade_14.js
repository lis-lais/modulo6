const prompt = require('prompt-sync')();

function removeDuplicatesAndCountVowels(string) {
    const uniqueChars = removeDuplicates(string);
    const vowelCount = countVowels(uniqueChars);
    
    console.log(`String com caracteres únicos: ${uniqueChars}`);
    console.log(`Número de vogais: ${vowelCount}`);
}

function removeDuplicates(array) {
    // Converte a string em um conjunto de caracteres únicos e depois de volta para uma string
    return Array.from(new Set(array)).join('');
}

function countVowels(array) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (vowels.includes(array[i].toLowerCase())) {
            count++;
        }
    }

    return count;
}

// Lê a entrada do usuário
const string = prompt('Digite uma string: ');

// Chama a função principal com a entrada do usuário
removeDuplicatesAndCountVowels(string);
