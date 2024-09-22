const prompt = require('prompt-sync')();
const { listarContato, adicionarContato, atualizarContato, removerContato } = require('./contato');

function mostrarMenu() {
    console.log('---------------Menu---------------');
    console.log('1. Adicionar contato');    
    console.log('2. Listar contatos');
    console.log('3. Atualizar contato');
    console.log('4. Remover contato');
    console.log('5. Sair');
    const opção = prompt('Escolha uma opção: '); {
        switch (opção.trim()) {
            case '1':
                adicionarContato();
                break;
            case '2':
                listarContato();
                break;
            case '3':
                atualizarContato();
                break;
            case '4':
                removerContato();
                break;
            case '5':
                console.log('Saindo do programa.');
                process.exit();
                break;
            default:
                console.log('Opção inválida, tente novamente.');
                mostrarMenu();
                break;
        }
        mostrarMenu();
    }
}

mostrarMenu();

module.exports = mostrarMenu;