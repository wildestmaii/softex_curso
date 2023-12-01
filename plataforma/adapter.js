class Frango {
    cantar() {
      console.log('Cócóricó!');
    }
  
    voarCurtoDistancia() {
      console.log('Voando curtas distâncias.');
    }
  }

class Pato {
    grasnar() {
      console.log('Quack!');
    }
  
    voarLongoDistancia() {
      console.log('Voando longas distâncias.');
    }
}

class AdaptadorPato extends Frango {
    constructor(pato) {
      super();
      this.pato = pato;
    }
  
    cantar() {
      this.pato.grasnar();
    }
  
    voarCurtoDistancia() {
      this.pato.voarLongoDistancia();
    }
}

class AdaptadorPatoDemo {
    static executar() {
      const pato = new Pato();
      const adaptadorPato = new AdaptadorPato(pato);
  
      console.log('Pato fazendo sons e voando longas distâncias:');
      pato.grasnar();
      pato.voarLongoDistancia();
  
      console.log('\nFrango fazendo sons e voando curtas distâncias (usando o adaptador):');
      adaptadorPato.cantar();
      adaptadorPato.voarCurtoDistancia();
    }
}

AdaptadorPatoDemo.executar();