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
console.log(amigos);    


function listarAmigos(){
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";
    for (i=0; i < amigos.length; i++){
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}   

