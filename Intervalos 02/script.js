let timer;
const comecar = () => {
 timer = setTimeout(()=> {
    document.querySelector('#demo').innerHTML = "Rodoou!";
  },2000)
}

const parar = () => {
  clearTimeout(timer);
  console.log("Parado com sucesso!");
}