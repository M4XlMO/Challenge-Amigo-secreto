// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if(nombreAmigo == ""){
        alert("Por favor, inserte un nombre.");
    }
    else{
        amigos.push(nombreAmigo);
        limpiarCaja();
        listarAmigos();
        return;
    }
}    
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
//console.log(amigos);    


function listarAmigos(){
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";
    for (i=0; i < amigos.length; i++){
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}   

function sortearAmigo(){
    if(amigos.length == 0){
        alert("Antes de sortear, ingrese al menos un amigo.");
    }
    else{
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSecreto = amigos[indiceAleatorio];
        let muestraAmigo = document.getElementById('resultado');
        muestraAmigo.innerHTML = `<h1>${amigoSecreto}</h1>`;
    }
}