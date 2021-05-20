const subirTela = () => {
  window.scrollTo({
    top:0, 
    left:0,
    behavior: 'smooth',
  })
}

const escondeBotao = () => {
  if(window.scrollY === 0) {
    document.querySelector('.scrollbutton').style.display = 'none';
  }
  else {
    document.querySelector('.scrollbutton').style.display = 'block';
  }
}

// setInterval(escondeBotao,10); //Primeira opção
window.addEventListener('scroll',escondeBotao);