let resposta = document.getElementById(`resposta`);

function clicou(){

let ano = parseInt(prompt(`Em que ano voce nasceu?`));
let anoAtual = new Date().getFullYear();

let idadeAtual = anoAtual - ano

resposta.innerHTML = `Voce tem ${idadeAtual} anos`
}