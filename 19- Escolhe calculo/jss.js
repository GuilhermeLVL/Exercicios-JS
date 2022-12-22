let calculando = document.getElementById('calculando');
let resposta = document.getElementById('resposta');



function clicou() {
    calculando.innerHTML = 'Calculando';

    let num1 = parseInt(prompt('Informe o primeiro numero:'));
    let num2 = parseInt(prompt('Informe o segundo numero:'));

    let operacao = parseInt(prompt(`Valores informados ${num1} e ${num2}
Informe a operacao desejada:
[1] Somar
[2] Subtrair
[3] Multiplicar
[4] Dividir
`));

    switch (operacao) {
        case 1:
            let soma = num1 + num2
            resposta.innerHTML = `${num2} + ${num1} = ${soma}`
            break;

        case 2:
            let subtrair = num1 - num2
            resposta.innerHTML = `${num1} - ${num2} = ${subtrair}`;
            break;
        case 3:
            let mlti = num1 * num2;
            resposta.innerHTML = `${num1} * ${num2} = ${mlti}`;
            break;

        case 4:
            let divid = num1 / num2;
            resposta.innerHTML = `${num1} / ${num2} = ${divid}`;
            break;

        default:
            break;
    }
}
