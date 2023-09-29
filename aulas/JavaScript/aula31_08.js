//slide JS M02A01
const readline = require('readline-sync')


//1. Faça um programa que leia o nome do aluno, três notas e mostre o nome e a média(aritmética) do aluno.

const nome = "mai";
const notas = [6, 7, 4];

const media = (notas(0) + notas(1) + notas(2)) / 3; //??????????????????????????????????????????

console.log(nome, media);



//2. Faça um programa com Javascript para verificar se um determinado ano, fornecido pelo usuário, é bissexto. Um ano é bissexto se 
//for divisível por 400 ou se for divisível por 4 e não for divisível por 100.Exemplos: 1988, 1992, 1996, 2000. Repare que 1900 não é bissexto.


const ano = readline.question('Digite o ano: ')
  //4 400 100
  if (ano % 400){
    console.log('este ano não é bissexto.')
  }


  //
  



//3. Uma determinada empresa vende seus produtos em quatro diferentes estados. Cada estado possui uma taxação de imposto diferente 
//sobre o produto (MG: 7%; SP: 12%; RJ: 15%; MS: 8%). Faça um programa em Javascript, que o usuário entre com o valor e o estado destino do 
//produto e o programa retorne o preço final do produto acrescido do imposto correspondente ao estado onde será vendido. O programa deve mostrar 
//uma mensagem de erro caso o estado fornecido não esteja na lista de estados válidos.



//160 x 25% = 160 (25/100) = 160 x 0,25 = 40.

/*var salario = 1000;
var percentual = 0.07;
var aumento = salario * percentual;
var novo_salario = salario + aumento;

alert(novo_salario)
*/


 const estado = readline.question('Digite o estado: ');
 const produto = readline.question('Digite o valor: ');

  


 if(produto = ['MG', 'mg', 'Mg']){
  var percentual = 0.07;
  var aumento = produto * percentual;
  var total = produto + aumento;
  console.log(total)
 };

 if(produto = ['SP', 'sp', 'Sp']){
  var percentual = 0.012;
  var aumento = produto * percentual;
  var total = produto + aumento;
  console.log(total)
 };

 if(produto = ['RJ', 'rj', 'Rj']){
  var percentual = 0.015;
  var aumento = produto * percentual;
  var total = produto + aumento;
  console.log(total)
 };

 if(produto =['MS', 'Ms', 'ms']){
  var percentual = 0.8;
  var aumento = produto * percentual;
  var total = produto + aumento;
  console.log(total)
 };
 


//4. Faça um programa que calcule e mostre a soma dos 50 primeiros números pares. Faça três versões desse programa, cada uma usando uma estrutura 
//de repetição diferente (for, while, do-while). Qual das três estruturas é a mais adequada para este programa? Por que?


//



//5. Faça um programa em Javascript que receba do usuário um número N e depois imprima os N primeiros números naturais ímpares.


//




//6. Uma empresa contrata um encanador a R$ 30,00 por dia. Crie um programa que solicite o número de dias trabalhados pelo encanador e imprima a
//quantia líquida que deverá ser paga, sabendo-se que são descontados 8% para pagamento de impostos e taxas devidas.

const valorBase = 30;
const diasTrabalhados = readline.question('Digite quantos dias o encanador trabalhou: ');


var salarioBruto = valorBase * diasTrabalhados;
var desconto = 0.08;
var calculo = salarioBruto + desconto;
var salarioFinal = salarioBruto + calculo;

console.log(salarioFinal)



//7. Faça um programa para ler um horário (hora:minuto:segundo) de início e a duração, em segundos, de uma experiência biológica. O programa 
//deve informar o horário (hora:minuto:segundo) de término da mesma.



//


//8. Uma empresa paga R$ 10,00 por hora normal trabalhada e R$ 15,00 por hora extra. Escreva um programa que leia o total de horas normais e 
//o total de horas extras trabalhadas por um empregado em um ano e calcule o salário anual deste trabalhador.

var pagamentoNormal = 10;
var pagamentoExtra = 15;
var horasNormais = readline.question('Digite quantas horas normais o colaborador trabalhou: ');
var horasExtra = readline.question('Digite quantas horas normais o colaborador trabalhou: ');

var salario =  (pagamentoNormal * horasNormais) + (pagamentoExtra * horasExtra);

console.log(salario);





//9. Elabore um programa em JS para que leia três números e mostre-os em ordem crescente.


var primeiro = readline.question('Digite um número');
var segundo = readline.question('Digite outro número');
var terceiro = readline.question('Digite um terceiro número');

if(primeiro > segundo){
  
}



/*10. Crie um programa de conversão entre as temperaturas Celsius, Farenheit e Kelvin usando funções para isso. O programa deve ler a opção 
escolhida pelo usuário, que escolhe uma determinada conversão entre escalas termométricas e, em seguida, o programa solicita a temperatura 
a ser convertida. As opções de conversão são as seguintes: utilize o switch case
1.	de Celsius para Fahrenheit.
2.	de Celsius para Kelvin.
3.	de Fahrenheit para Celsius.
4.	de Fahrenheit para Kelvin.
5.	de Kelvin para Celsius.
6.	de Kelvin para Fahrenheit
*/



//



//11. Fazer uma função que recebe um mês e um ano como parâmetros e retorna o número de dias daquele mês daquele 
//ano. Dica: um ano é bissexto quando é múltiplo de 4 e não múltiplo de 100, ou também quando é múltiplo de 400.




//




//12. Faça uma função que recebe, por parâmetro, a hora de início e a hora de término de um jogo, ambas subdivididas em 2 valores 
//distintos: horas e minutos. A função deve retornar, a duração do jogo em minutos, considerando que o tempo máximo de duração de um 
//jogo é de 24 horas e que o jogo pode começar em um dia e terminar no outro.



//




//13. Escreva a função para cálculo do N-ésimo termo da série de Fibonacci utilizando recursividade.




//