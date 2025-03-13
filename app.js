let nomeDeAmigos = []


//Implementa uma função para agregar amigos
function adicionarAmigo () {
    let inserirNome = document.querySelector('input');
// Verifica se o campo de input está vazio
    if (inserirNome.value == "") {
        alert ('Por favor, insira um nome!');
    } else { 
//Adiciona o nome na lista de amigos
        nomeDeAmigos.push(inserirNome.value); 
    }
inserirNome.value = "";
atualizarListaAmigos();
}

//Implementa uma função para atualizar a lista de amigos
function atualizarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

nomeDeAmigos.forEach(function(amigo) {
    let li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
});
}

//Implementa uma função para sortear os amigos
function sortearAmigo() {
    if (nomeDeAmigos.length === 0) {
        alert ('Não há amigos para sortear!');
        return;

    }
    let numeroDoAmigo = Math.floor(Math.random() * nomeDeAmigos.length);
    let amigoSorteado = nomeDeAmigos[numeroDoAmigo];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Seu amigo secreto é: ${amigoSorteado}`;

    nomeDeAmigos.splice(numeroDoAmigo, 1);
    atualizarListaAmigos()
}