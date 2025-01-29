//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let nomeAmigo = "";


function adicionarAmigo() {
    
    nomeAmigo = document.querySelector("input").value;
    console.log(nomeAmigo);

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nomeAmigo);
        console.log(amigos);
        campo = document.querySelector('input');
        campo.value = '';
        console.log(amigos.length)
    }
    atualizaListaDeAmigos()
}

function atualizaListaDeAmigos() {
    lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let n = 0; amigos.length > n; n++) {
        novoItem = document.createElement("li")
        novoItem.textContent = amigos[n];
        lista.appendChild(novoItem);

    }

}

function sortearAmigo() {
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
    } else {
        indice = Math.floor(Math.random()*amigos.length);
        amigoSecreto = amigos[indice];
        sorteio = document.getElementById("resultado");
        sorteio.innerHTML = amigoSecreto
        console.log(amigos.length)

    }
}