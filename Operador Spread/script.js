// let numeros = [1,2,3,4,5];
// let outros = [...numeros, 6,7,8,9,10];

// console.log(outros)

// let info = {
//   nome: "Wiuver",
//   sobrenome: "Ribeiro",
//   idade: 20
// }

// let newInfo = {...info, cidade: "Morrinhos"};

// console.log(newInfo)

function addInfo(info) {
  let newInfos = {
    ...info,
    idade: 19,
    isMarried: false,
    profissao: "Técnico em sistemas para internet",
  };
  return newInfos;
}
let res = addInfo({nome: "Wiuver", sobrenome: "Ribeiro"})
console.log(res)