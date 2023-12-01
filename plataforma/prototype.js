// classe abstrata
class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
      this.modelo = modelo;
      this.marca = marca;
      this.cor = cor;
      this.numeroRodas = numeroRodas;
    }
  
    // metodo clone
    clone() {
      const clone = new this.constructor();
      for (let key in this) {
        if (this.hasOwnProperty(key)) {
          clone[key] = this[key];
        }
      }
      return clone;
    }
  
    // informações do veiculo
    represent() {
      return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}`;
    }
}
  
// primeira subclasse para carro
class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
      super(modelo, marca, cor, numeroRodas);
      this.numeroPortas = numeroPortas;
    }
  
    // clone com adicionais da subclasse
    clone() {
      const clone = super.clone();
      clone.numeroPortas = this.numeroPortas;
      return clone;
    }
}
  
// segunsda subclasse para moto
class Moto extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, cilindradas) {
      super(modelo, marca, cor, numeroRodas);
      this.cilindradas = cilindradas;
    }
  
    // clone com adicionais da subclasse
    clone() {
      const clone = super.clone();
      clone.cilindradas = this.cilindradas;
      return clone;
    }
}
  
// classe para manipulação dos veiculos
class Aplicacao {
    constructor() {
      // array com seis veiculos usando clone
      this.veiculos = [
        new Carro('Sedan', 'Toyota', 'Azul', 4, 4),
        new Moto('Sport', 'Honda', 'Vermelha', 2, '500cc'),
        new Carro('Hatchback', 'Ford', 'Preto', 4, 5),
        new Moto('Cruiser', 'Harley-Davidson', 'Prata', 2, '1200cc'),
        new Carro('SUV', 'Chevrolet', 'Branco', 4, 5),
        new Moto('Touring', 'BMW', 'Verde', 2, '1600cc'),
      ];
    }
  
    // clonando o array e imprimindo as representações
    clonarEVetMostrar() {
      const veiculosClonados = this.veiculos.map((veiculo) => veiculo.clone());
      veiculosClonados.forEach((clone) => {
        console.log(clone.represent());
      });
    }
}

const aplicacao = new Aplicacao();
aplicacao.clonarEVetMostrar();

