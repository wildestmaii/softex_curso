///valores padrão
const readline = require('readline-sync')

//Para fazer isso, você definirá o valor da mesma forma que define o valor de
//uma variável: nomeDoParametro = 'valorPadrao'.

//Por exemplo:

function exibirSaudacao(nome, saudacao = 'Hello') {

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


function saudacao(nome) {
    ola = "olá, ";
    const saudacao = readline.question("qual o seu nome?");
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



function contagemRegressiva(inicio) {

}

//4- Escreva uma função chamada apresentacao que aceite três parâmetros: nome,
//idade e profissao. A função deve exibir no console uma mensagem de apresentação
//no formato "Olá, eu sou [nome], tenho [idade] anos e sou [profissao].", utilizando
//valores padrão para os parâmetros caso nenhum seja fornecido.

function apresentacao() {

    const idade = readline.question("escreva nome idade e profissão ");
    const info = readline.question("Digite a info: ");
    respostaPadrao = ["Maiara", idade, info]

    if (resposta = !respostaPadrao) {
        console.log("Olá, eu sou" + resposta[0] + ", tenho " + resposta[1] + "anos e sou " + resposta[2]);
    };

}
////////

function apresentacao(nome, idade, profissao) {
    //nome const readline.question("escreva seu nome:");
    //idade const readline.question("escreva sua idade:");
    //profissao const readline.question("escreva suaprofissão");

    //if nome
};



//5- Crie uma função chamada mensagemPersonalizada que receba um parâmetro texto
//para uma mensagem e um parâmetro estilo para o estilo da mensagem (por
//exemplo, "normal", "negrito", "itálico"), com um valor padrão de estilo sendo
//"normal". A função deve exibir no console o texto fornecido com o estilo especificado.

function mensagemPersonalizada(texto, estilo) {

}





/////////////////////////////////////////////////////


function criarMensagemDeSaudacao(nome) {
    const mensagem = `Olá, ${nome}`;
    return mensagem;
}


////////////////////////////////

//1- Crie uma função chamada somar que aceite dois números como parâmetros e retorne a soma deles.

function somar(var1, var2) {
    const resultado = var1 + var2;
    return resultado;
}


//2- Escreva uma função chamada ehPar que aceite um número como parâmetro e
//retorne true se o número for par e false caso contrário.

function ehPar(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}


//3- Crie uma função chamada maiorNumero que receba três números como parâmetros e retorne o maior deles.

function maiorNumero(num1, num2, num3) {



}


//4- Escreva uma função chamada calcularIMC que receba o peso e a altura de uma
//pessoa como parâmetros e retorne o índice de massa corporal (IMC) calculado.




//5- Crie uma função chamada contarVogais que aceite uma string como parâmetro e
//retorne o número de vogais (a, e, i, o, u) presentes na string.




//6- Escreva uma função chamada celsiusParaFahrenheit que receba uma temperatura
//em graus Celsius como parâmetro e retorne o valor equivalente em Fahrenheit.




//7- Crie uma função chamada gerarSenha que aceite um parâmetro tamanho (número
//inteiro) e retorne uma senha aleatória com o tamanho especificado.



