let saida  = document.getElementById('saida');

function clicou (){
    let nome = prompt("Qual o nome do aluno?")
    let nota1 = parseInt(prompt("Informe a nota da primera prova:"))
    let nota2 =parseInt(prompt("Informe a nota da segunda prova:"))

    let media = (nota1 + nota2)/2

    saida.innerHTML = `<br>Calculando a media final de ${nome}<br>`;

    saida.innerHTML += `As notas obitidas foram ${nota1} e ${nota2}<br>`;

    saida.innerHTML += `A media final será ${media}<br>`;

    let mensagem = '';
    

    if (media >= 10 && media < 15 ){
mensagem = "Parabens!"
    }else if(media >= 15){
        mensagem = 'Incrivel!'
    }else{
        mensagem = 'Nao foi dessa vez'
    }

   
    saida.innerHTML += `A mensagem que temos é:  <strong style='color:red;'>${mensagem}</strong><br>`
}