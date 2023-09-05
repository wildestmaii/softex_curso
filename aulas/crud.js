/* crud de alunos com opção de sair do sistema. os alunos devem conter o nome, 4 notas e a média.
*/
const readline = require('readline-sync');

//while (loop){


    const aluno1 = {
        matricula: 0,
        nomes: 'Maiara',
        notaa: [5, 7, 10, 9]
    };
    const aluno2 = {
        matricula: 1,
        nomes: 'Evelyn',
        notas: [3, 6, 6, 9]
    };


    console.log("~~~~~~~~MENU DE CADASTROS~~~~~~~~ \n 1 - Listar Alunos \n 2 - Cadastrar Aluno \n 3 - Atualizar Aluno \n 4 - Deletar Aluno \n 5 - Sair do Sistema");
    const menu = readline.question("Escolha uma das opções e digite o número: ");

    
    switch (menu) {
        case 1:
            console.log(aluno1, aluno2);
            break;
        case 2:
            //console.log();
            break;

        default:
            console.log("programa encerrado");
            break;
    };

//}
