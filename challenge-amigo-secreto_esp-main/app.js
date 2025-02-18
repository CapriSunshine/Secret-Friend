// El principal objetivo de este desafío es fortalecer tus habilidades en lógica 
// de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friends = [];

function agregarAmigo() {
    let newFriend = document.getElementById("amigo").value;
    console.log(newFriend);
    if (newFriend !="") {
    friends.push(newFriend);
    console.log(friends);}
    else { 
        alert("Por favor, inserte un nombre");
    }
    clean();
    }

function clean () {
    document.getElementById("amigo").value = ""; 
}