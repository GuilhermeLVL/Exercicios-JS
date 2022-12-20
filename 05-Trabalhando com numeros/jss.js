let paragrafo = document.getElementById("paragrafo");

function clicou() {

   let numero = parseInt(prompt("Digite um numero:"));

   let numMult = numero * 2;
   let numDiv = numero / 2;

 paragrafo.innerHTML = `O dobro de ${numero} é ${numMult} e a metade é ${numDiv}`;

}
  