/* crud de alunos com opção de sair do sistema. os alunos devem conter o nome, 4 notas e a média.
*/
const readline = require('readline-sync');

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

//while (loop){
    console.clear();
    console.log("~~~~~~~~MENU DE CADASTROS~~~~~~~~ \n 0 - Sair do Sistema \n 1 - Listar Alunos \n 2 -Cadastrar Aluno \n 3 - Buscar Aluno \n 4 - Alterar Aluno \n 5 - Remover Aluno");
    const menu = readline.question("Escolha uma das opções e digite o número: ");
//pesquisar aluno tb    console.log(`Nome: ${alunos.nome} \n Notas: ${alunos.notas} \n Média: ${media}`);
    switch (menu) {
        case 1:
            console.log();
            break;
        case 2:
            console.log();
            break;

        default:
            console.log("programa encerrado");
            break;
    };

//}






