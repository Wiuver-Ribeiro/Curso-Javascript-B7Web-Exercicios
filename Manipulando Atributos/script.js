function alterar(filename, animalname) {
  document.querySelector('.imagem').setAttribute('src', `./image/${filename}`);
  document.querySelector('.imagem').setAttribute('data-animal', animalname);
   document.querySelector('h1').innerText = ""
  
}

function pegarAnimal() {
  const animal = document.querySelector('.imagem').getAttribute('data-animal');
  alert(animal);
}