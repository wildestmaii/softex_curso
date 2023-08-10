///valores padrão
const readline = require('readline-sync')

//Para fazer isso, você definirá o valor da mesma forma que define o valor de
//uma variável: nomeDoParametro = 'valorPadrao'.

//Por exemplo:

function exibirSaudacao(nome, saudacao='Hello') {

console.log(`${saudacao}, ${nome}`);

}


//Ao chamar a função, você poderá decidir se deseja ou não especificar o valor
//da saudação, conforme mostrado aqui:

exibirSaudacao("Ana");

// exibe "Hello, Ana!"

exibirSaudacao("Ana", "Olá");

// exibe "Olá, Ana!"








//1- Crie uma função chamada saudacao que aceita um parâmetro nome para uma
//pessoa e exiba no console a saudação "Olá, [nome]!" utilizando um valor padrão
//para nome caso nenhum seja fornecido.

 
    function saudacao (ola, nome) {
        ola = "olá, ";
        nome const readline.question("qual o seu nome?");
        console.log(saudacao);
    }



//2- Escreva uma função chamada calculadora que receba dois números (num1 e num2)
//e um operador matemático (operacao) como parâmetros. A função deve realizar a
//operação matemática entre num1 e num2 (por exemplo, adição, subtração,
//multiplicação, divisão) com um valor padrão de operação sendo "+".

    function calculadora(num1, num2) {
        resultado = num1 + num2
        console.log(resultado)
    }


//3- Crie uma função chamada contagemRegressiva que aceite um parâmetro inicio para
//iniciar a contagem regressiva. A função deve exibir no console uma contagem
//regressiva a partir do número fornecido até 1, utilizando um valor padrão de início igual a 10.



    function contagemRegressiva(inicio){
        
    }

//4- Escreva uma função chamada apresentacao que aceite três parâmetros: nome,
//idade e profissao. A função deve exibir no console uma mensagem de apresentação
//no formato "Olá, eu sou [nome], tenho [idade] anos e sou [profissao].", utilizando
//valores padrão para os parâmetros caso nenhum seja fornecido.

function apresentacao( nome, idade, profissao){
    resposta const readline.question("escreva nome idade e profissão");
    respostaPadrao = ["Maiara", "22", "estudante"]

    if resposta (=! respostaPadrao) {
        console.log("Olá, eu sou" + resposta(0) + ", tenho " + resposta(1) + "anos e sou " + resposta(2));
    };

}
////////




//5- Crie uma função chamada mensagemPersonalizada que receba um parâmetro texto
//para uma mensagem e um parâmetro estilo para o estilo da mensagem (por
//exemplo, "normal", "negrito", "itálico"), com um valor padrão de estilo sendo
//"normal". A função deve exibir no console o texto fornecido com o estilo especificado.


    function

