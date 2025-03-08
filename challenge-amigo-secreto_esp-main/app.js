// El principal objetivo de este desafío es fortalecer tus habilidades en lógica 
// de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friends = [];
listaAmigos.innerHTML = "";

//Funcion que añade amigos con el botón y va añadiendo la lista.
function addFriend() {
    let newFriend = document.getElementById("amigo").value;
    if (newFriend !="" && newFriend !=" ") {
    friends.push(newFriend);
    console.log(friends);
    listfriends();
} else { 
        alert("Por favor, inserte un nombre");
    }
        clean();
    }   

//Funcion que añade nombres a la lista
function listfriends(){
    for (let i = friends.length - 1; i >= 0; i--) {
        let list = document.querySelector("#listaAmigos");
        list.innerHTML += `<li>${friends[i]}</li>`
    return;
    }
}

//Funcion que limpia el imput.
function clean () {
    document.getElementById("amigo").value = ""; 
}

//Función que sortea el amigo
function secretFriend (){
    if (friends.length >= 1) {
        let randomFriend = Math.floor(Math.random() * friends.length);
        console.log(randomFriend);
    let winner = document.getElementById("resultado");
    winner.innerHTML = friends[randomFriend-1];
    } else { 
        alert("Por favor, inserte los nombres de sus amigos");
    }
}

