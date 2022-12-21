let resultado = document.getElementById(`resultado`);

function clicou (){

    //Pegando informacoes do sistema
    let dia = new Date().getDay();
    let mes = new Date().getDate();
    let ano = new Date().getFullYear();
    let hora = new Date().getHours();
    let minutos = new Date().getMinutes();
    let segundos  = new  Date().getSeconds();

    let diaS = ["Domingo","Segunda","Terca","Quarta","Quinta","Sexta","Sabado"]

    

    resultado.innerHTML = `Dia:${dia} <br>
    Mes:${mes} <br>
    Ano:${ano} <br>
    Dia da semana:${diaS[dia]} <br>
    Hora:${hora} <br>
    Minutos:${minutos} <br>
    Segundos:${segundos} <br>`;
}