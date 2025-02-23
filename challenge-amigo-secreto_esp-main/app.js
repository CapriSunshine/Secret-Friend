// El principal objetivo de este desafío es fortalecer tus habilidades en lógica 
// de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friends = [];
listaAmigos.innerHTML = ""

//Funcion que añade amigos con el botón y va añadiendo la lista.
function addFriend() {
    let newFriend = document.getElementById("amigo").value;
    if (newFriend !="") {
    friends.push(newFriend);
    console.log(friends);
} else { 
        alert("Por favor, inserte un nombre");
    }
    listfriends();
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


let randomNum = Math.floor(Math.random() * 10);
console.log(randomNum);  // Número entre 0 y 9

//Funcion que limpia el imput.
function clean () {
    document.getElementById("amigo").value = ""; 
}
