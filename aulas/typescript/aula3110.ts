// Exemplo de classes com composição

class Carro {
    motor: Motor;
    rodas: Roda[];
  
    constructor() {
      this.motor = new Motor();
      this.rodas = [new Roda(), new Roda(), new Roda(), new Roda()];
    }
  }
  
  class Motor {
    potencia: number;
  
    constructor() {
      this.potencia = 200;
    }
  }
  
  class Roda {
    tamanho: number;
  
    constructor() {
      this.tamanho = 18;
    }
  }
  
  // Exemplo de classes com agregação
  
  class Time {
    jogadores: Jogador[];
  
    constructor() {
      this.jogadores = [];
    }
  
    adicionarJogador(jogador: Jogador) {
      this.jogadores.push(jogador);
    }
  }
  
  class Jogador {
    nome: string;
    posicao: string;
  
    constructor(nome: string, posicao: string) {
      this.nome = nome;
      this.posicao = posicao;
    }
  }
  
  // Exemplo de interfaces com composição
  
  interface Pessoa {
    nome: string;
    endereco: Endereco;
  }
  
  interface Endereco {
    rua: string;
    numero: number;
    cidade: string;
  }
  
  // Exemplo de interfaces com agregação
  
  interface Time {
    nome: string;
    jogadores: Jogador[];
  }
  
  interface Jogador {
    nome: string;
    posicao: string;
  }
  