// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[]; 

function agregarAmigo() {
    // Obtener el nombre desde el input
    let nombreAmigo = document.getElementById('amigo').value;
    // Validar que no esté vacío
    if (nombreAmigo === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al arreglo
    amigos.push(nombreAmigo);
    document.getElementById('amigo').value = '';
    document.getElementById('resultado').innerHTML = '';
    // Mostrar la lista actualizada
    mostrarAmigos();
}

function mostrarAmigos(){
    // Obtener el contenedor de la lista y limpiarlo
    let lista =document.getElementById('listaAmigos');
    lista.innerHTML = "";

    // Recorrer el arreglo e insertar cada amigo en la lista
    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
     // Mostrar mensaje si no hay amigos para sortear
    let amigoSecreto = document.getElementById('resultado');
 
    if (amigos.length === 0){
        amigoSecreto.innerHTML = "No hay amigos para sortear.";
        return;
    }

    // Elegir un amigo al azar
    let seleccionarAmigo = Math.floor(Math.random()*amigos.length);
    let amigoSorteado = amigos[seleccionarAmigo];

    // Mostrar el resultado y eliminar al amigo sorteado del arreglo
    amigoSecreto.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    document.getElementById('listaAmigos').innerHTML = '';
    amigos.splice(seleccionarAmigo, 1);
}