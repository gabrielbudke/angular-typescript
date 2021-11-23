// 1. VARIÁVEIS
// 1.1 Definindo a variável com o tipo string
let message: string = "Help me, Obi-Wan Kenobi! You're my only hope!";
console.log(message);

// 1.2 Definindo a variável com o tipo number
let episode: number = 4;
console.log("This is episode " + episode);
episode = episode + 1;
console.log("Next episode is " + episode);

// 1.3 Definindo uma variável com o tipo 'any'
let favoriteDroid;
favoriteDroid = "BB-8";
favoriteDroid = 10;
console.log("My favorite droid is " + favoriteDroid);

// 2. FUNÇOES
// 2.1 Definindo funções
const isEnoughToBeatMF = function (parsecs: number): boolean {
   return parsecs < 12;
};

let distance = 14;
console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance) ? "YES" : "NO"}`);

// 2.2 Declarando uma varíável que recebe uma função
let call = (name: string) => console.log(`Do you copy, ${name}?`);
call("R2");

// 2.3 Declarando uma função com parâmetro padrão
function inc(speed: number, inc: number = 1): number {
   return speed + inc;
}

console.log(`inc(5, 1) = ${inc(5, 1)}`);
console.log(`inc(5) = ${inc(5)}`);
