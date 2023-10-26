class Game {
  estado: boolean;
  volume: number;
  fase: number;

  constructor(estado: boolean, volume: number, fase: number) {
    this.estado = estado;
    this.volume = volume;
    this.fase = fase;
  }


  iniciar(): void {
    this.estado = true;
    console.log("O jogo foi iniciado.");
  }

  sair() {
    this.estado = false;
    console.log("Você saiu da partida.");
  }

escolherFase(fase: number) {
  console.log(`Fase escolhida: ${fase}`);
  }
  
ajustarVolume() {
  this.volume++;
  console.log(`Volume ajustado para ${this.volume}`);
}
}

class Personagem extends Game {
  vida: number;
  vitorias: number;
  nome: string;
  
  constructor(vida: number, vitorias: number, nome: string) {
    super();
    this.vida = vida;
    this.vitorias = vitorias;
    this.nome = nome;
  }

  atacar() {
    console.log("Atacando o inimigo!");
  }

  defender() {
    console.log("Você se defendeu do ataque do inimigo!");
  }
}

////////
class Arma extends Game {
  super();
  revolver: string;
  chinela: string;
  espada: string;
  
  constructor(revolver: string, chinela: string, espada: string) {
    this.revolver = revolver;
    this.chinela = chinela;
    this.espada = espada;
  }

const jogador1 = new Personagem(100, 5, true, false);
const jogador2 = new Personagem(80, 3, false, true);
const espada = new Arma("espada");
  
jogador1.iniciar();
jogador1.atacar(jogador2);
jogador1.sair();
espada.usar();