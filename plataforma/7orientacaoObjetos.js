// Objeto material 1
class Carro {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.ligado = false;
      this.velocidade = 0;
    }
// Mtodos
    ligar() {
      this.ligado = true;
      console.log(`${this.marca} ${this.modelo} está ligado.`);
    }
  
    desligar() {
      this.ligado = false;
      this.velocidade = 0;
      console.log(`${this.marca} ${this.modelo} está desligado.`);
    }
  
    acelerar() {
      if (this.ligado) {
        this.velocidade += 10;
        console.log(`${this.marca} ${this.modelo} está acelerando para ${this.velocidade} km/h.`);
      } else {
        console.log(`${this.marca} ${this.modelo} precisa estar ligado para acelerar.`);
      }
    }
}
  
const meuCarro = new Carro('Fiat', 'Uno escada', 2010);
meuCarro.ligar();
meuCarro.acelerar();
meuCarro.desligar();


// Objeto material 22
class Smartphone {
    constructor(marca, modelo, armazenamento) {
      this.marca = marca;
      this.modelo = modelo;
      this.armazenamento = armazenamento;
      this.bateria = 100;
    }
  
    telefone(numero) {
      console.log(`Ligando para ${numero}...`);
      this.bateria -= 5;
    }
  
    zapZap(contato, mensagem) {
      console.log(`Enviando mensagem para ${contato}: ${mensagem}`);
      this.bateria -= 2;
    }
  
    camera() {
      console.log(`Tirando uma foto...`);
      this.bateria -= 3;
    }
}
  
const meuSmartphone = new Smartphone('Xiaomi', 'Xiaomi 12', '256 GB');
meuSmartphone.telefone('4002-8922');
meuSmartphone.zapZap('Cara de Percata', 'E tu vai me morder, é');
meuSmartphone.camera();
  

// objeto abstrato 1
class ContaBancaria {
    constructor(numeroConta, saldo, titular) {
      this.numeroConta = numeroConta;
      this.saldo = saldo;
      this.titular = titular;
    }
  
    depositar(valor) {
      this.saldo += valor;
      console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    }
  
    sacar(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
      } else {
        console.log(`Saldo insuficiente para sacar R$${valor}.`);
      }
    }
  
    verificarSaldo() {
      console.log(`Saldo da conta de ${this.titular}: R$${this.saldo}`);
    }
  }
  
const minhaConta = new ContaBancaria('12345', 500, 'Maiara Meneses');
minhaConta.depositar(500);
minhaConta.sacar(300);
minhaConta.verificarSaldo();


// Objeto abstrato 2
class AnimalDeEstimacao {
    constructor(nome, especie, idade) {
      this.nome = nome;
      this.especie = especie;
      this.idade = idade;
    }
  
    alimentar() {
      console.log(`${this.nome} está sendo alimentado.`);
    }
  
    brincar() {
      console.log(`${this.nome} está brincando.`);
    }
  
    acariciar() {
      console.log(`${this.nome} está sendo acariciado.`);
    }
  }
  
const bichinho = new AnimalDeEstimacao('Mimi', 'Gato', 8);
bichinho.alimentar();
bichinho.brincar();
bichinho.acariciar();
  