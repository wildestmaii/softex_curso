class OperacaoStrategy {
    execute(valor1, valor2) {
      throw new Error('Execute deve ser implementado pelas subclasses');
    }
  }

class AdicaoStrategy extends OperacaoStrategy {
    execute(valor1, valor2) {
      return valor1 + valor2;
    }
}

class SubtracaoStrategy extends OperacaoStrategy {
    execute(valor1, valor2) {
      return valor1 - valor2;
    }
}

class MultiplicacaoStrategy extends OperacaoStrategy {
    execute(valor1, valor2) {
      return valor1 * valor2;
    }
}

class Calculadora {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    setStrategy(strategy) {
      this.strategy = strategy;
    }
  
    calcular(valor1, valor2) {
      return this.strategy.execute(valor1, valor2);
    }
}
  
const calculadora = new Calculadora();
const valor1 = parseInt(prompt('Digite o primeiro valor:'));
const valor2 = parseInt(prompt('Digite o segundo valor:'));
const operacao = prompt('Digite a operação:').toLowerCase();
let strategy;
  
switch (operacao) {
    case 'adição':
      strategy = new AdicaoStrategy();
      break;
    case 'subtração':
      strategy = new SubtracaoStrategy();
      break;
    case 'multiplicação':
      strategy = new MultiplicacaoStrategy();
      break;
    default:
      console.log('Operação inválida.');
      process.exit(1);
}
  
calculadora.setStrategy(strategy);
const resultado = calculadora.calcular(valor1, valor2);
console.log(`Resultado da operação: ${resultado}`);