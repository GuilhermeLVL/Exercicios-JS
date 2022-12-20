let contador = document.getElementById("contador");

let num = 0;

function contaMais (){
    num++;
    contador.innerHTML = `<p> O contador está com <mark>${num}</mark> cliques </p>`
}
function zeraConta() {
    num = 0;
    contador.innerHTML = null;
}