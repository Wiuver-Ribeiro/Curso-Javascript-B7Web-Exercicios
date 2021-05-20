let pessoa = {
  nome: "Wiuver",
  sobrenome: "Ribeiro",
  idade: 19,
  social: {
    facebook: "wiuver-ribeiro",
    instagram: "@_wiuver",
    linkedin: "wiuver-ribeiro"
  },
  nomeCompleto: function () {
    return `Nome completo: ${this.nome} ${this.sobrenome}`;
  }
}

//Descontrução do objetos = Desctructing
const {nome, sobrenome, idade } = pessoa;

console.log(name, sobrenome, idade)