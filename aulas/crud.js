/* crud de alunos com opção de sair do sistema. os alunos devem conter o nome, 4 notas e a média.
*/
const readline = require('readline-sync');

//while (loop){


    const alunos = [
        {id: 0,
        nome: 'Maiara',
        notas: [5, 7, 10, 9]
        },
        {id: 1,
        nome: 'Evelyn',
        notas: [2, 3, 0, 10]
        }
    ];


    console.log("~~~~~~~~MENU DE CADASTROS~~~~~~~~ \n 1 - Listar Alunos \n 2 - Cadastrar Aluno \n 3 - Atualizar Aluno \n 4 - Deletar Aluno \n 5 - Sair do Sistema");
    const menu = readline.question("Escolha uma das opções e digite o número: ");
//pesquisar aluno tb    console.log(`Nome: ${alunos.nome} \n Notas: ${alunos.notas} \n Média: ${media}`);
    
    switch (menu) {
        case 1:
            console.log();
            break;
        case 2:
            //console.log();
            break;

        default:
            console.log("programa encerrado");
            break;
    };

//}