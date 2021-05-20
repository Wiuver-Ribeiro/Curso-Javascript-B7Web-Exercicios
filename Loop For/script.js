//FOR LOOP
let texto = "";
//for(auxiliar; condição; incremento){}
for(let i = 0; i < 50; i++ ) {
  texto += i+ "<br/>";
}

document.querySelector('.demo').innerHTML = texto;