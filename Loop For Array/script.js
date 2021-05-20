//FOR LOOP ARRAY
let carros = ['Ferrari', 'Fusca', 'Corola', 'Palio', 'Gol'];

let html = '<ul>'

  for(let i in carros) {
    html+= `<li>${carros[i]}</li>`
  }
  html += '</ul>';

document.querySelector('.demo').innerHTML = html;