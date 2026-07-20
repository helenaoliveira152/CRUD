let alunos = [   

     {
        nome: "Ana",
        notas: [8, 7, 9]
    },
    {
        nome: "Carlos",
        notas: [10, 6]
    },
    {
        nome: "Joana",
        notas: [8, 9, 10]
    },
    {
        nome: "Yasmin",
        notas: [8, 10, 8]
    }
];

function buscarAlunos(nome){
    for(let i = 0; i < alunos.length; i++){
        if (alunos[i].nome.toLowerCase() === nome.toLowerCase()) {
            return alunos[i];

        }
    }
    return undefined;
}
        
console.log(buscarAlunos("Ana"));


    function calcularMedia(alunos){
        if(alunos.notas.length === 0){
            return 0;
        }

        let soma = 0;

        for(let i = 0; i < alunos.notas.length; i++){
            soma += alunos.notas[i]
        }

        return soma / alunos.notas.length;
    }

console.log(calcularMedia(alunos[0]));


    function situacao(media){
            if(media >= 6){
        return "APROVADO";
    }
    else if(media >= 4){
        return "RECUPERACAO";
    }
    else{
        return "REPROVADO";
    }

}

let media = calcularMedia(alunos[0]);
console.log(situacao(media));


     
    function cadastrarAluno(){
        let nome = prompt("Digite o nome do aluno: ")

        if(buscarAlunos(nome)!== undefined){
                alert("Aluno já esta cadastrado! ")
                return;
        }

        alunos.push({
            nome: nome,
            notas: []
        });


        alert("Aluno cadastrado com sucesso! ");

}

    function listarAlunos(){

}