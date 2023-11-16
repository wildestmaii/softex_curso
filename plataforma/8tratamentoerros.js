const readline = require('readline-sync');

function calcularDivisao() {
    try {
        let numero1 = parseFloat(readline.question("Digite o primeiro número para realizar a divisão:"));
        let numero2 = parseFloat(readline.question("Digite o segundo número para realizar a divisão:"));

        // condição e tratamento de erro
        if (isNaN(numero1) || isNaN(numero2)) {
            throw new Error("Por favor, insira números válidos.");
        }

        let resultado = numero1 / numero2;

        // nova condição e tratamento de erro
        if (!isFinite(resultado)) {
            throw new Error("A divisão resulta em um valor infinito.");
        }

        console.log(`O resultado da divisão é: ${resultado}`);
    } catch (error) {
        // retorno do programa de acordo com o erro encontrado
        console.error(`Ocorreu um erro: ${error.message}`);
    } finally {
        console.log("Operação de divisão concluída.");
    }
}

calcularDivisao();
