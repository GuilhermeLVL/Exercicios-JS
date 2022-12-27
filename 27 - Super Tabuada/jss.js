let tabuada = document.getElementById(`tabuada`);

function calcula(){
let resposta = document.getElementById(`resposta`);
let numero = document.getElementById(`numero`);

resposta.innerHTML = `
${numero.value} X 1 = ${numero.value * 1}<br>
${numero.value} X 2 = ${numero.value * 2}<br>
${numero.value} X 3 = ${numero.value * 3}<br>
${numero.value} X 4 = ${numero.value * 4}<br>
${numero.value} X 5 = ${numero.value * 5}<br>
${numero.value} X 6 = ${numero.value * 6}<br>
${numero.value} X 7 = ${numero.value * 7}<br>
${numero.value} X 8 = ${numero.value * 8}<br>
${numero.value} X 9 = ${numero.value * 9}<br>
`
}