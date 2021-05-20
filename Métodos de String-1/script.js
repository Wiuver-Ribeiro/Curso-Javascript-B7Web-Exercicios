let nome = "Wiuver Afonso Ribeiro";
//Cada pedaço que for cortado vai ser jogado em uma posição de um array
//Gera um array
let resultado = nome.split(' '); //Corta ondem tem um espaço
//Array de 3 elementos.
console.log(resultado); // (3) ['Wiuver', 'Afonso', 'Ribeiro] 

//Exemplo:
let numero = "1,2,3,4,5,6,7,8,9,10";

let numeros = numero.split(',');
console.log(numeros); // (10)  ["1","2","3","4","5","6","7","8","9","10"];
