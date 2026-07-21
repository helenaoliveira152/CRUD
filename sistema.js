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
        if(alunos.length === 0){
            alert("Nenhum aluno cadastrado! ");
            return;
        }

        let texto = "";


        for(let i = 0; i < alunos.length; i++){
            texto +=  alunos[i].nome = "\n"
        }
        alert(texto);
}

        function removerAluno(){
            let nome = prompt("Digite o nome do aluno: ")

            let alunoo = buscarAlunos(nome);

            if(aluno === undefined){
                alert("Aluno não encontrado! ");
                return;

            }

            let posicao = alunos.indexOf(aluno);
            alunos.splice(posicao, 1);
            alert("Aluno removido com sucesso! ");
        }


        function lancarNota(){
            let nome = prompt('Digite o  nome do aluno: ');

            let aluno = buscarAlunos(nome);

                if(aluno === undefined){
                    alert("Aluno não encontrado! ");
                    return;
                }
            
                 let nota = Number(prompt("Digite a nota:"));

                if (nota < 0 || nota > 10) {
                 alert("Nota inválida.");
                return;
             }

        aluno.notas.push(nota);

        alert("Nota lançada com sucesso!");
    }


        function verBoletim(){
            let nome = prompt("Digite nome do aluno: ")

            let aluno = buscarAlunos(nome);

            if(aluno === undefined){
                alert("Aluno não encontrado! ")
                return;
            }

              let media = calcularMedia(aluno);
              let resultado = situacao(media);

            alert(
                "Nome: " + aluno.nome +
                "\nNotas: " + aluno.notas.join(", ") +
                "\nMédia: " + media.toFixed(2) +
                "\nSituação: " + resultado
            );
        }

        function totalDeAlunos(){
            alert("Total de alunos: " + alunos.length);
        }

        function mediaGeralDaTurma() {

         if (alunos.length === 0) {
        alert("Nenhum aluno cadastrado.");
        return;
    }

    let soma = 0;

            for (let i = 0; i < alunos.length; i++) {
             soma += calcularMedia(alunos[i]);
    }

    let mediaGeral = soma / alunos.length;

    alert("Média geral da turma: " + mediaGeral.toFixed(2));
}

        function listarAprovados() {

        let texto = "";
        let encontrou = false;

        for (let i = 0; i < alunos.length; i++) {

            let media = calcularMedia(alunos[i]);

        if (situacao(media) === "APROVADO") {
            texto += alunos[i].nome + " - Média: " + media.toFixed(2) + "\n";
            encontrou = true;
        }

    }

        if (encontrou) {
            alert(texto);
        } else {
            alert("Ainda não há alunos aprovados.");
        }

    }


    function submenuCadastro() {

    let opcao;

       do {

        opcao = Number(prompt(
            "MENU CADASTRO\n\n" +
            "1 - Cadastrar aluno\n" +
            "2 - Listar alunos\n" +
            "3 - Remover aluno\n" +
            "0 - Voltar"
        ));

        switch (opcao) {

            case 1:
                cadastrarAluno();
                break;

            case 2:
                listarAlunos();
                break;

            case 3:
                removerAluno();
                break;

            case 0:
                break;

            default:
                alert("Opção inválida!");

        }

    } while (opcao !== 0);

    }


      function submenuNotas() {

        let opcao;

        do {

        opcao = Number(prompt(
            "MENU NOTAS\n\n" +
            "1 - Lançar nota\n" +
            "2 - Ver boletim do aluno\n" +
            "0 - Voltar"
        ));

        switch (opcao) {

            case 1:
                lancarNota();
                break;

            case 2:
                verBoletim();
                break;

            case 0:
                break;

            default:
                alert("Opção inválida!");

        }

    } while (opcao !== 0);

}
