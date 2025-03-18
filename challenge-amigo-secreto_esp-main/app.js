let nombres = [];

function agregarAmigo() {
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim();

    if (nombre !== "") {
        nombres.push(nombre);
        actualizarLista();
        inputNombre.value = "";
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length < 2) {
        alert("Debe haber al menos 2 participantes para el sorteo.");
        return;
    }
    
    let amigoSecreto = nombres[Math.floor(Math.random() * nombres.length)];
    mostrarResultado(amigoSecreto);
}

function mostrarResultado(amigo) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";
    let li = document.createElement("li");
    li.textContent = `El amigo sorteado es: ${amigo}`;
    resultadoDiv.appendChild(li);
}
