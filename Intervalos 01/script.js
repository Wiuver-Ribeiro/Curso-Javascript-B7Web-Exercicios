let timer;
const comecar = () => {
  timer = setInterval(showTime,1000);
}

const parar = () => {
  clearInterval(timer);
}

const showTime = () => {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let horas = `${hour}:${minutes}:${seconds}`;

  document.querySelector('#demo').innerHTML = horas;
}
