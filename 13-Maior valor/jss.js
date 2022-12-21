let valor = document.getElementById("valor");

function clicou(){
let num1 = parseInt(prompt("Informe um numero:"));
let num2 = parseInt(prompt("Informe outro nuero:"));

if (num1 > num2){
    valor.innerHTML = `Analisadno os alores ${num1} e ${num2}, o a maior valor é ${num1}`
}else if (num1 < num2){
    valor.innerHTML = `Analisadno os alores ${num1} e ${num2}, o a maior valor é ${num2}`
}else if (num1 == num2){
    valor.innerHTML = `Analisadno os alores ${num1} e ${num2}, os valores sao iguais${num1} e ${num2}`
}
}