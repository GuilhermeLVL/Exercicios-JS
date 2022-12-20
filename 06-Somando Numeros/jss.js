let resultado = document.getElementById("resultado");

function clicou() {
    let num1 = parseInt(prompt("Digite um numero:"));
    let num2 = parseInt(prompt("Digite outro numero:"));
    let soma = num1 + num2;

    resultado.innerHTML=`<p> A soma entre <mark>${num1}</mark> e <mark>${num2}</mark> é igual a <strong>${soma}!</strong> </p>`
    
}