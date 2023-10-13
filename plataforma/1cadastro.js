const readline = require('readline-sync');

const nome = readline.question('Nome: ');
const salario = parseFloat(readline.question('Salário: '));
const idade = parseInt(readline.question('Idade: '));
const diploma = readline.keyInYN('Possui Diploma? (Sim ou Não): ');

console.log("Nome: " + nome);
console.log("Salário: " + salario);
console.log("Idade: " + idade);
console.log("Possui Diploma: " + (diploma ? "Sim" : "Não"))

console.log("Nome: " + nome, "Salário: " + salario, "idade: " + idade, "Diploma: " + diploma)