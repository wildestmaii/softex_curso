//1. Crie uma classe Pessoa com os atributos nome, idade e email.

class Pessoa {
    // Atributos
    nome: string;
    email: string;
    idade: number;
    // Método construtor
    constructor(nome: string, email: string, idade: number) {
      this.nome = nome;
      this.email = email;
      this.idade = idade;
    }
  }
  
//2. Crie uma classe Aluno que herda da classe Pessoa e tenha um atributo adicional matricula.

class Aluno extends Pessoa {
    matricula: number;
  
    constructor(nome: string, email: string, idade: number, matricula: number) {
      super(nome, email, idade);
      this.matricula = matricula;
    }
  }

//3. Crie uma classe Retangulo com os atributos largura e altura e métodos para calcular a área e o perímetro.

class Retangulo {
    // Atributos
    largura: number;
    altura: number;
    // Método construtor
    constructor(largura: number, altura: number) {
      this.largura = largura;
      this.altura = altura;
    }
    // Método
    area(): void {
        console.log("faça sozinho: base vezes altura.");
    }
    perimetro(): void {
        console.log("a mimir");
    }
}

//4. Crie uma classe Círculo com o atributo raio e métodos para calcular a área e a circunferência.

class Circulo {
    // Atributos
    raio: number;
    // Método construtor
    constructor(raio: number) {
      this.raio = raio;
    }
    // Método
    area(): void {
        console.log("faz sozinho peste");
    }
    perimetro(): void {
        console.log("dois pirraio");
    }
}




//5. Crie uma classe ContaBancaria com os atributos saldo e numeroConta e métodos para depositar, sacar e verificar o saldo.

class ContaBancaria {
  // Atributos
  saldo: number;
  numeroConta: number;
  // Método construtor
  constructor(saldo: number, numeroConta: number) {
    this.saldo =  saldo;
    this.numeroConta = numeroConta;
  }
  // Método
  depositar(): void {
      console.log("guardei seu dinheiro 3:)");
  }
  sacar(): void {
      console.log("proibido sacar");
  }
  verificarSaldo(): void {
    console.log("zerado... e tu vai me morder é? uma hora dessas? cara de percata!");
}
}


//1. Crie uma classe Produto com os atributos nome, preco e quantidade e métodos para calcular o valor total (preço * quantidade).

class Produto {
  // Atributos
  nome: string;
  preco: number;
  quantidade: number;
  // Método construtor
  constructor(nome: string, preco: number, quantidade: number) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
  // Método
  valorTotal(): void {
      console.log("999 reais, amg...");
  }
}


//2. Crie uma classe Triangulo com os atributos lado1, lado2 e lado3 e um método para verificar se é um triângulo válido.

class Triangulo {
  // Atributos
  lado1: number;
  lado2: number;
  lado3: number;
  // Método construtor
  constructor(lado1: number, lado2: number, lado3: number) {
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
  }
  // Método
  realOuFake(): void {
      console.log("Fake natty!");
  }
}



//3. Crie uma classe Livro com os atributos titulo, autor e anoPublicacao e um método para exibir informações do livro.

class Livro {
  // Atributos
  titulo: string;
  autor: string;
  anoPublicacao: number;
  // Método construtor
  constructor(titulo: string, autor: string, anoPublicacao: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
  }
  // Método
  exibirLivro(): void {
      console.log("vai na livraria!");
  }
}



//4. Crie uma classe Agenda que permite adicionar, listar e remover contatos (nomes e números de telefone).

class Agenda {
  // Atributos
  nome: string;
  numero: number;
  // Método construtor
  constructor(nome: string, numero: number) {
    this.nome = nome;
    this.numero = numero;
  }
  // Método
  exibirLivro(): void {
      console.log("ngm usa numero de telefone mais... vai pro instagram!");
  }
}


//5. Crie uma classe CarroEsportivo que herda da classe Carro (usada no exemplo anterior) e tenha métodos adicionais para acelerar rapidamente e produzir um som esportivo.

class Carro {
  // Atributos
  marca: string;
  modelo: string;
  ano: number;
  // Método construtor
  constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  // Método
  acelerar(): void {
    console.log("Acelerando o carro...");
  }
}


class CarroEsportivo extends Carro{
  // Atributos
  nitro: number;
  escapamento: string;
  // Método construtor
  constructor(marca: string, modelo: string, ano: number, nitro: number, escapamento: string) {
    super(marca, modelo, ano);
    this.nitro = nitro;
    this.escapamento = escapamento;
  }
  // Método
  acelerar(): void {
      console.log("ngm usa numero de telefone mais... vai pro instagram!");
  }
  somEscape(): void {
    console.log("tu é tanga?");
  }
}







