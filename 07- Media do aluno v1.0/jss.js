let nome = document.getElementById('nome');
let notas = document.getElementById('notas');
let resultado = document.getElementById('resultado');


function clicou() {

    let nomes = "";

    let num1 = 0;
    let num2 = 0;

    nomes = prompt("Qual o nome do aluno?");

    num1 = parseInt(prompt(`Qual foia primeira nota de ${nome}?`));
    num2 = parseInt(prompt(`Qual foi a sefunda nota de ${nome}?`));

    let media = (num1 + num2) / 2;


    nome.innerHTML = `Calculando a media final de ${nomes}`;

    notas.innerHTML = `As notas obidas foram ${num1} e ${num2}`;

    resultado.innerHTML = `A media final será ${media}`;

}