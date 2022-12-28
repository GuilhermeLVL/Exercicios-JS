function calcula(){

    let resultado = document.getElementById(`resultado`);

    let numero = document.getElementById(`numero`);

    let valor = numero.value

    if (numero.value <= 21 && numero.value >= 1){

        for(let i = 1; i < numero.value; i++){
            valor *= i
          resultado.innerHTML += ` ${i} = ${valor}<br>`
  
        }

    } 
    


}