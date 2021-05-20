let lista = [
  {id: 1, name: "Wiuver", lastName: "Ribeiro"},
  {id: 2, name: "Ayeska", lastName: "Ferreira"},
  {id: 3, name: "Djoan", lastName: "Carmo"},
  {id: 4, name: "Débora", lastName: "Leandra"},
];
let lista2 = [];

// lista2 = lista.map(item => item * 2); //Map

// lista2 = lista.filter(function(item) { //Filter
//   return item < 20;
// })

// list2 = lista.every(function(item) {
//   return item > 20;
// })

// lista2 = lista.some(function(item) {
//   return item > 20;
//   // return (item > 2)? "SIM" : "NÃO";
// })

// lista2 = lista.find(function(item) {
//   return (item == 16) ? true : false;
// })

lista2 = lista.find(function(item) {
  return (item.name == "Wiuver") ? "Existe" : "Não existe";
})
// let pessoa = lista.findIndex(function(item) {
//   return (item.name == "Ayeska") ? true : false;
// })

let pessoa = lista.findIndex(item => item.name == "Djoan" ? true : false)

let res = pessoa;

console.log(res)