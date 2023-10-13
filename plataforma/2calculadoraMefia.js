var nota1 = Number(prompt('Digite a primeira nota:'));
var nota2 = Number(prompt('Digite a segunda nota:'));
var nota3 = Number(prompt('Digite a terceira nota:'));


if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {

  var media = (nota1 + nota2 + nota3) / 3;


  prompt('A média das notas é: ' + media);
} else {
  alert('Insira notas válidas');
}