

let resposta = document.getElementById(`resposta`);

let enviar = document.getElementById(`enviar`);

enviar.addEventListener(`click`, function(e){
    e.preventDefault();
    let numero = document.getElementById(`numero`);

    const value = numero.value;

    for( let i = 0;i<= value;  i++){
       
     resposta.innerHTML += `${i}<br>`;
    }
    if(value == i){
        value ==0;
    }


   


});


