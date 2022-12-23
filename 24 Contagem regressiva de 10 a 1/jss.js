let resultado = document.getElementById('resultado');

let click = 11;

function clicou (){
click--

if (click > 0 ){
    resultado.innerHTML += `<br>${click}`
}else if (click == 0){
    click = 11;
}
}