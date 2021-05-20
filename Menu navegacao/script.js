const btnEl = document.querySelector('#menu-opener');

btnEl.addEventListener('click',() => {
  document.querySelector('#menu-area').classList.toggle('menu-area')
})