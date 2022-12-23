let resposta = document.getElementById('resposta');

let click = 0;
let div = click % 2

function clicou() {

    click++

    if (click <= 9 && click % 2 == !0) {
        resposta.innerHTML += `<br> &#x1F449 ${click}`;
    }
    else if (click <= 9 && click % 2 == 0) {
        resposta.innerHTML += `<br> <mark><strong>&#x1F449 ${click}</strong></mark>`;
    }
    else if (click == 10) {
        resposta.innerHTML += `<br> &#x1F3C1 ${click}`
    } else if (click > 10) {

        click = 0
    }
}
