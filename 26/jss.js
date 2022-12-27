

function resultado (){

 let resposta = document.getElementById(`resposta`); 
 
 
const numero1 = document.getElementById(`numero1`)


const numero2 = document.getElementById(`numero2`)


if(numero1.value > numero2.value){
    for(let i = numero2.value; i <= numero1.value;i++ ){
     resposta.innerHTML += `${i}<br>`  
    }
    
}else if( numero1.value < numero2.value){
for(let i = numero2.value; i >= numero1.value; i--){
    resposta.innerHTML += `${i}<br>`
}

}

}

