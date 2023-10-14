const readline = require('readline-sync');

// objeto banco
const Banco = {
  conta: 66099,
  saldo: 1000.00,
  tipoConta: 'Conta Corrente',
  agencia: 'Agência 6969',
  
  // método para consultar saldo
  consultarSaldo: function() {
    return this.saldo;
  },

  // método para depositar
  depositar: function(valor) {
    if (valor > 0) {
      this.saldo += valor;
      return `Depósito de R$ ${valor} realizado com sucesso. Novo saldo: R$ ${this.saldo.toFixed(2)}`;
    } else {
      return 'Valor de depósito inválido. Tais liso, é?';
    }
  },

  // método para sacar
  sacar: function(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      return `Saque de R$ ${valor} realizado com sucesso. Novo saldo: R$ ${this.saldo.toFixed(2)}`;
    } else if (valor <= 0) {
      return 'Valor de saque inválido. Acho que você tá liso...';
    } else {
      return 'Saldo insuficiente para o saque, liso.';
    }
  },

  // Método para retornar o número da conta
  numeroDaConta: function() {
    return this.conta;
  }
};

console.log('Bem-vindo ao Banco');
console.log('Escolha uma opção:');
console.log('1. Consultar Saldo');
console.log('2. Realizar Depósito');
console.log('3. Realizar Saque');
console.log('4. Consultar Número da Conta');
console.log('5. Sair');

while (true) {
  const opcao = readline.question('Opção: ');

  switch (opcao) {
    case '1':
      console.log(`Saldo atual: R$ ${Banco.consultarSaldo().toFixed(2)}`);
      break;
    case '2':
      const valorDeposito = parseFloat(readline.question('Informe o valor a ser depositado: '));
      console.log(Banco.depositar(valorDeposito));
      break;
    case '3':
      const valorSaque = parseFloat(readline.question('Informe o valor a ser sacado: '));
      console.log(Banco.sacar(valorSaque));
      break;
    case '4':
      console.log(`Número da Conta: ${Banco.numeroDaConta()}`);
      break;
    case '5':
      console.log('Saindo do Banco. Volta logo, liso!');
      process.exit(0);
    default:
      console.log('Opção inválida.');
  }
}
