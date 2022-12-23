let resposta = document.getElementById('resposta');

let click = 0;

function clicou() {
click++

    if (click <= 9) {
        
        resposta.innerHTML += `  <br> &#x1F449 ${click}`
    
       
     } else if(click <=10){
    
       resposta.innerHTML += `  <br> &#x1F3C1 ${click}`  
     }
     else if (click = 10) {
        click = 0;
    }

}
