//exercícios
//aula anterior
//1- Crie uma função recursiva chamada somaRecursiva que receba um número
//inteiro positivo n como argumento e calcule a soma de todos os números
//inteiros de 1 até n.




//2- Escreva uma função chamada fibonacci que receba um número n como
//parâmetro e retorne o n-ésimo termo da sequência de Fibonacci. Lembre-se de
//implementar essa função de forma recursiva.





////////////////////////////////////////////////////////
const readline = require('readline-sync')

//1- Crie um programa que recebe do teclado um número e tenta dividir por
//zero dentro de um bloco try...catch. Capture o erro e o exiba "Erro:
//Divisão por zero" no console.
    

    try {
        const variavel = readline.question;
        const divisor = 0;
        const divisao = variavel / divisor;

    } catch (erro) {
        if (divisao = 0) {
        console.log("erro");
        }
    }


//2- Crie um programa que recebe do teclado uma string não numérica em um
//número utilizando parseInt dentro de um bloco try...catch. Capture o erro
//e o exiba "Erro: Conversão inválida" no console.


try{
    var parseInt = "bom dia";

} catch (erro){
    if (parseInt = 0) {
        console.log("Erro: Conversão inválida");
}
    }


//3- Crie um programa que recebe do teclado um objeto e tente acessar uma
//propriedade inexistente desse objeto dentro de um bloco try...catch.
//Capture o erro e o exiba "Erro: Propriedade não encontrada" no console.


try{
    var algo = new Object();
    algo.frase = readline.question;
} catch {
    if (algo = 0) {
        console.log("Erro: Propriedade não encontrada")
    }
}

console.log("teste");