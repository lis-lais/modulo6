const prompt = require('prompt-sync')();

let contatos = [];
  
function novoContato(callback) {
    const id = prompt('Insira o id: ');
    const nome = prompt('Nome: ');
    const tel = prompt('Telefone: ');
    const email = prompt('Email: ');
        const contato = {
            id: id.trim(),
            nome: nome.trim(),
            tel: tel.trim(),
            email: email.trim()
        };
        callback(contato);
};

function adicionarContato() {
    novoContato((contato) => {
        contatos.push(contato);
        console.log('Contato adicionado com sucesso!');
    });
}

function listarContato() {
    if (contatos.length === 0) {
        console.log('Nenhum contato cadastrado.');
    
        return; 
    }
    console.log('Contatos: ');
    contatos.forEach((contato, index) => {
        console.log(`${index + 1}. ID: ${contato.id}, Nome: ${contato.nome}, Telefone: ${contato.tel}, Email: ${contato.email}`);
    });

}

function atualizarContato() {
    if (contatos.length === 0) {
        console.log('Nenhum contato cadastrado.');
        return;
    }
    const id = prompt('Insira o id do contato que deseja atualizar: ');
    const index = parseInt(id.trim()) - 1;
    const contato = contatos[index];
    if (isNaN(index) || index < 0 || index >= contato.length) {
        console.log('Contato não encontrado.');
        return;
    }
    const nome = prompt(`Contato (atual: ${contato.nome})`);
    const tel = prompt(`Telefone (atual: ${contato.tel})`);
    const email = prompt(`Email (atual: ${contato.email})`);
        contato[index] = {
            id: contato.id,
            nome: nome.trim(),
            tel: tel.trim(),
            email: email.trim()
        };
        console.log('Contato atualizado com sucesso!');
}

function removerContato() {
    if (contatos.length === 0) {
        console.log('Nenhum contato cadastrado.');
        return;
    }
    const id = prompt('Insira o id do contato que deseja remover: ');
    const index = parseInt(id.trim()) - 1;
    if (isNaN(index) || index < 0 || index >= contatos.length) {
        console.log('Contato não encontrado.');
        return;
    }
    contatos.splice(index, 1);
    console.log('Contato removido com sucesso!');

};

module.exports = {
    listarContato,
    adicionarContato,
    atualizarContato,
    removerContato
};