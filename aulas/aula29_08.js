/// Lista de Exercícios de Objetos
// const readline = require('readline-sync')

/*
Como você cria um objeto vazio, chamado pessoa em JavaScript?
*/
const pessoa = {
    nome: "João"
}


/*
Como você adiciona a propriedade "nome" com o valor "João" a um objeto chamado "pessoa"?
*/


pessoa.nome = "João";


/*
Como você acessa o valor da propriedade "idade" de um objeto chamado "usuario"?
*/

const usuario = {
    idade: [1, 4, 6, 8]
}
console.log(usuario.idade);


/*
Suponha que você tenha um objeto "produto" com a propriedade "preco" definida como 50. Como você altera o valor dessa propriedade para 75?
*/

const produto = {
    preco: 50
}

produto.preco = readline.question("digite");

/*
Como você remove a propriedade "email" de um objeto chamado "contato"?
*/


delete contato.email;


/*
Como você adiciona uma propriedade "endereco" com o valor "Rua A, 123" a um objeto existente chamado "cliente"?
*/

const cliente = {
    
}

cliente.endereco = "Rua A, 123";

/*
Se você tem um objeto "empresa" com uma propriedade "departamentos", como você acessa o nome do primeiro departamento?
*/

console.log(empresa.departamentos[0]);

/*
Suponha que você tenha um objeto "aluno" com a propriedade "notas" contendo [85, 90, 78]. Como você altera a segunda nota para 95?
*/
 
const aluno = {
    notas: [85, 90, 78]
}

aluno.notas(1) = 95


/*
Se você tem um objeto "dados" com uma propriedade "valores" contendo [10, 20, 30], como você remove o segundo valor (20) desse array?
*/

delete dados.valores(1)

/*
Como você cria um objeto com as propriedades "titulo" (com o valor "Livro") e "autor" (com o valor "Maria")?
*/

const livraria = {
    titulo = 'Livro',
    autor = 'Maria';
}






////Enumerates

/*
const DiasDaSemana = {
  DOMINGO: 'Domingo',
  SEGUNDA: 'Segunda-feira',
  TERCA: 'Terça-feira',
  QUARTA: 'Quarta-feira',
  QUINTA: 'Quinta-feira',
  SEXTA: 'Sexta-feira',
  SABADO: 'Sábado'
};

console.log(DiasDaSemana.QUARTA); // Saída: Quarta-feira
*/


/*
Suponha que você está desenvolvendo um aplicativo de agendamento e precisa representar os dias da semana. 
Como você usaria enums para isso e qual seria o benefício?
*/

const agendamentos = {
    SEGUNDA: 'Segunda',
    TERCA: 'Terça',
    SEXTA: 'Sexta',
};

console.log(agendamentos);


//saber o dia agendado dos pacientes 


/*
Você está construindo um jogo e precisa representar os diferentes tipos de inimigos. Como você usaria enums para essa situação?
*/

const inimigos = {
    ORC: 'Gargamel',
    HUMANO: 'Xavier',
    BRUXA: 'Ravena'
};



// listar os nome e atributos de cada um

/*
Você está criando um aplicativo de reserva de passagens aéreas e precisa representar os diferentes tipos de classe
 (Econômica, Executiva, Primeira Classe). Como você usaria enums para isso?
*/








//listar a classe e os lugares diponíveis

/*
Imagine que você está desenvolvendo um aplicativo de tarefas e deseja categorizar as 
tarefas em "Trabalho", "Estudo" e "Lazer". Como você usaria enums para esse cenário?
*/




/*
Em um aplicativo de e-commerce, você precisa definir os diferentes status de um pedido:
 "Em processamento", "Enviado" e "Entregue". Como você usaria enums para isso?
*/


//listar o numero do pedido e a situação que e encontra


