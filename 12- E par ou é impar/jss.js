let resultado = document.getElementById("resultado");
function clicou (){
    let num = prompt('Informe um numero:');

    numDiv = num % 2

    if (numDiv == 0){
        resultado.innerHTML = `O numero ${num} que foi digitado é <strong> PAR! </strong>`
    }else{
        resultado.innerHTML = `O numero ${num} que foi digitado é <strong> IMPAR! </strong>`
    }
}