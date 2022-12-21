let resposta = document.getElementById(`resposta`);


function gerar(){

let min = 1;
let max = 100;
let dif = max - min;
let aleatorio = Math.random();
let num = min + Math.trunc(dif *  aleatorio)
    

    resposta.innerHTML += `Acabei de pesar no numero ${num}!<br>`
    
}

function limpar(){
resposta.innerHTML =  null;
}