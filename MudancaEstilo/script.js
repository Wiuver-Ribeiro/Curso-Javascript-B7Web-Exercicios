const title = document.querySelector('h1');

const azul = () => {
  limpar();
  title.classList.add("azul");
}
const verde = () => {
  limpar();
  title.classList.add("verde");
}
const vermelho = () => {
  limpar();
  title.classList.add("vermelho");
}

const limpar = () => {
  title.classList.remove("azul");
  title.classList.remove("verde");
  title.classList.remove("vermelho");
}