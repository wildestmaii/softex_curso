// função sem parametros
function saudacao() {
    console.log("Olá! Bem-vindo à calculadora.");
  }
  
// função com parametros
function somar(a, b) {
    return a + b;
  }
  
// arrow function
const subtrair = (a, b) => a - b;
  
// testando as funções
saudacao();
  
const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));
  
const soma = somar(numero1, numero2);
const subtracao = subtrair(numero1, numero2);
  
alert("A soma dos números é: " + soma);
alert("A subtração dos números é: " + subtracao);
  