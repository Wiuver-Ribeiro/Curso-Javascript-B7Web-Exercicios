let dia = 7;
let diaNome = "";
switch (dia) {
  case 6:
  case 7:
    diaNome = "Final de semana";
    break;

    default:
      diaNome = "dia comercial, trabalhe...";
      break;
}

document.querySelector('.dia').innerHTML = `Hoje é <strong>${diaNome}</strong>`