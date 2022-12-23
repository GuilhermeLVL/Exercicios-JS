let resposta = document.getElementById(`resposta`);
function clicou() {
  let meses = [
    `janeiro`,
    `fevereiro`,
    `março`,
    `abril`,
    `maio`,
    `junho`,
    `julho`,
    `agosto`,
    `setembro`,
    `outubro`,
    `novembro`,
    `dezembro`,
  ];

  let mes = prompt(`Informe o mes:`);
  mes.toLowerCase();

  switch (mes) {
    case `janeiro`:
      resposta.innerHTML = `${mes} = Verao`;
      break;
    case `fevereiro`:
      resposta.innerHTML = `${mes} = Verao`;
      break;
    case `março`:
      resposta.innerHTML = `${mes} = Verao`;
      break;
    case `abril`:
      resposta.innerHTML = `${mes} = Outono`;
      break;
    case `maio`:
      resposta.innerHTML = `${mes} = Outono`;
      break;
    case `junho`:
      resposta.innerHTML = `${mes} = Outono`;
      break;
    case `junlho`:
      resposta.innerHTML = `${mes} = Inverno`;
      break;
    case `Agosto`:
      resposta.innerHTML = `${mes} = Inverno`;
      break;
    case `Setembro`:
      resposta.innerHTML = `${mes} = Inverno`;
      break;
    case `Outubro`:
      resposta.innerHTML = `${mes} = Primavera`;
      break;
    case `Novembro`:
      resposta.innerHTML = `${mes} = Primavera`;
      break;
    case `Dezebro`:
      resposta.innerHTML = `${mes} = Primavera`;
      break;

    default:
        resposta.innerHTML = `${mes} 
        - { I.N.D.E.F.I.N.I.D.O } -`
      break;
  }
}
