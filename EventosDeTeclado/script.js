function mostrarValor(event) {
  if(event.keyCode === 13) {
    //ctrlKey = true Contra pressionado e a telcha enter juntos
    const input = document.querySelector('input');
    console.log(input.value);
    input.value = '';
  }
}