function pegarTemperatura() {
  return new Promise(function(resolve, reject) {
    console.log('Pegando temperatura...');
    setTimeout(function(){
      resolve('40 na sombra!')
    },2000)
  })
}
let temperatura = pegarTemperatura();

temperatura
.then(function(resultado){
  console.log(`TEMPERATURA: ${resultado}`)
})
temperatura.catch(function(error) {
  console.log(`Eita deu erro: [${error}]`);
})