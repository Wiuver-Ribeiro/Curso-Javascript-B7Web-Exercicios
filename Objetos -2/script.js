let carros = [
  'Palio',
  'Uno',
  'Corolla',
  'Ferrari',
];

let carro = {
  nome: "Honda Civic",
  modelo: "Esportivo",
  ano: 2021,
  placa: "OMJ03593",
  status: "Legalizado",
  cor: "Preto",
  ligado: false,
  ligar: function () {
    this.ligado = true;
    this.acelerar();
  },
  acelerar: function () {
    if (this.ligado) {
      console.log("VRUM VRUM")
    } else {
      console.log(`O caro ${this.nome} não quer ligar!`);
    }
  }
};

carro.ligar();
