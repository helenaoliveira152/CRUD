let alunos = [   

     {
        nome: "Ana",
        notas: [8, 7, 9]
    },
    {
        nome: "Carlos",
        notas: [10, 6]
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




