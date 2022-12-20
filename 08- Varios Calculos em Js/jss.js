let info = document.getElementById("analise");

let calc1 = document.getElementById("calculos1");
let calc2 = document.getElementById("calculos2");
let calc3 = document.getElementById("calculos3");
let calc4 = document.getElementById("calculos4");
let calc5 = document.getElementById("calculos5");
let calc6 = document.getElementById("calculos6");
let calc7 = document.getElementById("calculos7");


function clicou(){
    
let num = parseFloat(prompt("Informe um numero:"));

info.innerHTML = `O nuero a ser analisado aqui será ${num}`;

calc1.innerHTML = `O valor absoluto é ${num}`;
calc2.innerHTML = `A sua parte inteira é ${parseInt(num)}`;
calc3.innerHTML = `${num.toFixed()}`;

calc4.innerHTML = `A sua raiz é ${Math.sqrt(num)}`

calc5.innerHTML = `A raiz cubica é ${Math.cbrt(num)}`

calc6.innerHTML = `A potecia de ${num} é ${Math.pow(num,2)}`
calc7.innerHTML = `A potencia de ${num
} é ${Math.pow(num,3)}`
}

//tofixed = Arredonda pra cima