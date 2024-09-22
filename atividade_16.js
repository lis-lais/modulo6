const prompt = require('prompt-sync')();

function drawTriangle () {
    const height = prompt('Qual a altura do triângulo? ');
    const width = prompt('Qual a largura do triângulo? ');

    if (isNaN(height) || isNaN(width) || height <= 0 || width <= 0) {
        console.log('Os valores digitados devem ser positivos.');
        return drawTriangle();
    }
    // Garante que a largura seja ao menos igual à altura
    const baseWidth = Math.max(width, height);

    for (let i = 0; i < height; i++) {
        let line = '';
        for (let j = 0; j < baseWidth; j++) {
            // Preenche a linha com '*' apenas dentro da área do triângulo
            if (j <= i || j === 0 || i === height - 1) {
                line += '*';
            } else {
                line += ' ';
            }
        }
        console.log(line);
    }
}

drawTriangle();