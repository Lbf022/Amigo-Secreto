// Inicializa a lista de amigos vazia
let listaDeNomes = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let campoInput = document.getElementById("amigo"); // Pegando pelo ID correto
    let nomeNoCampo = campoInput.value.trim(); // Remove espaços extras

    if (nomeNoCampo === "") {
        alert("Tem que por um nome no campo!");
        return;
    }

    console.log(nomeNoCampo);

    listaDeNomes.push(nomeNoCampo); // Adiciona o nome ao array
    limparCampo(); // Limpa o campo de entrada

    atualizarListaAmigos(); // Atualiza a lista exibida
}

// Função para atualizar a lista exibida no HTML
function atualizarListaAmigos() {
    let listaElement = document.getElementById("listaAmigos");

    if (listaDeNomes.length === 0) {
        listaElement.style.display = "none"; // Oculta a lista se estiver vazia
    } else {
        listaElement.style.display = "block"; // Mostra a lista quando houver amigos
        listaElement.innerHTML = ""; // Limpa a lista antes de atualizar

        for (let amigo of listaDeNomes) {
            let item = document.createElement("li");
            item.textContent = amigo;
            listaElement.appendChild(item);
        }
    }

    document.getElementById("resultado").innerHTML = ""; // Esconde o resultado ao adicionar novos amigos
}

// Função para limpar o campo de entrada
function limparCampo() {
    document.getElementById("amigo").value = "";
}

// Função para sortear um amigo
function sortearAmigo() {
    if (listaDeNomes.length === 0) {
        alert("A lista está vazia! Adicione amigos antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeNomes.length);
    let amigoSorteado = listaDeNomes[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `🎉 Amigo sorteado: <strong>${amigoSorteado}</strong> 🎉`;
    document.getElementById("listaAmigos").style.display = "none"; // Oculta a lista após o sorteio
}

