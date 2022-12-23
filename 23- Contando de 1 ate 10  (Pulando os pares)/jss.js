let resultado = document.getElementById('resultado');

let click = 0;

function clicou (){
click++

if (click <= 10 && click % 2 == 0){
    resultado.innerHTML += `<br>${click}`
}else if (click > 10){
    click = 0;
}
}