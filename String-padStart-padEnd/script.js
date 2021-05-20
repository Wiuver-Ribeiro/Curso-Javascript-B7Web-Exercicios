// let telefone = "0325";
// console.log(telefone.padEnd(9, '*'));
// console.log(telefone.padStart(8, '*'));

// Exemplo de cartão

let cartao = "123456789011";

let lastDigit = cartao.slice(-4); // pega o 4 ultimos números

let cartaoMascarado = lastDigit.padStart(16, '*');

console.log(`Este é o seu cartão ${cartaoMascarado} ?`);