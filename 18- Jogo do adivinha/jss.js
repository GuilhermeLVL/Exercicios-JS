let resposta = document.getElementById('resposta');

//Gerador de numeros aleatorios 0 a 100
let numale = Math.floor(Math.random() * 100)

function clicou() {
    let num = parseInt(prompt("Informe um numero:"));

    if (num == numale) {
        resposta.innerHTML = `<br>Vocer acertou, estava pensando em ${num}<br>`
    } else if (num > numale) {
        resposta.innerHTML += `<br>Tente um nuemro MENOR!<br>`
    } else if (num < numale) {
        resposta.innerHTML += `<br>Tente um numero MAIOR!<br>`
    }
}