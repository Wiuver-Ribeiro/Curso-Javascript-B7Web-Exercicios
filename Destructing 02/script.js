let pessoa = {
  nome: "Wiuver",
  sobrenome: "Ribeiro",
  idade: 19,
  social: {
    facebook: "wiuver-ribeiro",
    instagram: {
      profile: "@_wiuver",
      followers: 1928,
    },
    linkedin: "wiuver-ribeiro"
  },
}

//Descontrução do objetos = Desctructing

function getFullName({nome, sobrenome}) {
  return `${nome} ${sobrenome}`
}

let res = getFullName(pessoa);
console.log(res);