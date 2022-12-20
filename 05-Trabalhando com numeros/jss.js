let paragrafo = document.getElementById("paragrafo");

let numMult = numero * 2;
let numDiv = numero / 2;

function clicou() {
   let numero = parseInt(prompt("Digite um numero:"));
   paragrafo.innerHTML = `O dobro de ${numero} é ${numMult} e a metade é ${numDiv}`
}