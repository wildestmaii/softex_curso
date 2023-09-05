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

    switch (menu) {
        case 1:
            console.log("Lista dos alunos: ")
            for (const aluno of alunos) { 
                function calcularMedia(notas) {
                    const soma = notas.reduce((a, b) => a + b, 0);
                    const media = soma / notas.length;
                    return media;
                }
                const media = calcularMedia(aluno.notas);
            };
            console.log(`Matricula: ${a.matricula} \n Nome: ${a.nome} \n Média : ${media}`);
            break;
        case 2:
            console.log();
            break;

        default:
            console.log("programa encerrado");
            break;
    };

//}


/*cópia do prof case 1
console.log("listando alunos");

let soma = 0;

console.log(`Matrícula: ${a.matricula}`);
//[...]

for (let i = 0; i < a.notas.length; i++) {
    console.log(`\t Nota ${i + 1}: ${a.notas.[i]}`);
}

let media = soma / a.notas.length;
console.log(`\t Média: ${media}`);
readline.KeyInPause();
break;

*/




