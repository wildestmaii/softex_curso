var nome: string = "Mai";
console.log("o nome dela é ${nome}");

console.log("olá");

var quanto: number = 5;

//const x: null =

let gato: string = "Mai";

//const alternativa: boolean =  ;

//const materia: Array = "opa";

var cozinha: Object = "garfo";


/////////////////////////

enum usuarios{
'administrador',
'aluno',
'convidado',
};

function autenticador(usuario: usuarios): void{
    if (usuario === usuarios.administrador){
        console.log("conexão feita com suceso, bem vindo!")

    } if(usuario === usuarios.aluno){
        console.log("conexão feita com suceso, bem vindo!")

    } else(usuario === usuarios.convidado){ //?
        console.log("conexão feita com suceso, mas suas permissões são limitadas! crie uma conta para mais funcionalidades.")
    }
}

usuarios = 'convidado'