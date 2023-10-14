var valor1 = parseFloat(prompt('Digite o primeiro valor:'));
var valor2 = parseFloat(prompt('Digite o segundo valor:'));

var operador = prompt('Escolha o operador (+, -, *, /):');

var resultado;

switch (operador) {
  case '+':
    resultado = valor1 + valor2;
    break;
  case '-':
    resultado = valor1 - valor2;
    break;
  case '*':
    resultado = valor1 * valor2;
    break;
  case '/':
    if (valor2 !== 0) {
      resultado = Math.floor(valor1 / valor2);
      var resto = valor1 % valor2;
      alert('Resultado da divisão: ' + resultado);
      alert('Resto da divisão: ' + resto);
    } else {
      alert('Erro: Divisão por zero não é permitida.');
    }
    break;
  default:
    alert('Operador inválido. Use +, -, *, ou /.');
}


if (operador !== '/') {
  alert('Resultado: ' + resultado);
}