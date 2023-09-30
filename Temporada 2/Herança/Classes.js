class Participante{
    constructor(nome, cpf, dataDeNascimento){
        this.nome = nome;
        this.cpf = cpf;
        this.dataDeNascimento = dataDeNascimento;
    }
}

//Extends indica quem é a classe mãe
class Aluno extends Participante{
    constructor(nome, cpf, dataDeNascimento, matricula){
        //Super chama o construtor da classe mãe
        super(nome, cpf, dataDeNascimento)
        this.matricula = matricula;
    }
}

class Professor{
    constructor(nome, cpf, dataDeNascimento, siape, formacao){
        this.nome = nome;
        this.cpf = cpf;
        this.dataDeNascimento = dataDeNascimento;
        this.siape = siape;
        this.formacao = formacao
    }
}

class EventoAcademico{
    constructor(){
        this.listaDeParticipantes = []
    }


    cadastrarParticipante(participante){
        this.listaDeParticipantes.push(participante)
    }
}
