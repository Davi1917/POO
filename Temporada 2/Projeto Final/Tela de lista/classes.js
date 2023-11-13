class Farmacia{
    constructor(nome,email, foto, telefone, endereco ){
        this.nome = nome;
        this.email = email;
        this.foto = foto;
        this.telefone = telefone;
        this.endereco = endereco;

    }
}
class Produto{
    constructor(id, nome, valor , numeroCas, foto, quantidade){
        this.id = id;
        this.nome = nome;
        this.valor = valor;
        this.numeroCas = numeroCas;
        this.foto = foto;
        this.quantidade = quantidade;
        
    }
}
class Pagamento{
    constructor(quantidadeDoProduto,valorTotal, formaDePagamento ){
        this.quantidadeDoProduto = quantidadeDoProduto;
        this.valorTotal = valorTotal;
        this.formaDePagamento = formaDePagamento;
    }
}
class PerfilDoPaciente{
    constructor(rg, cpf, id, endereco, telefone, login, senha, email, dataDeNascimento, foto ){
        this.rg = rg;
        this.cpf = cpf;
        this.cidade = id;
        this.id = endereco;
        this.estado = telefone;
        this.login = login;
        this.senha = senha;
        this.email = email;
        this.dataDeNascimento = dataDeNascimento;
        this.foto = foto;
    }
}

class MarcarConsulta{
   constructor(numeroDaConsulta, horario, data){
        this.numeroDaConsulta = numeroDaConsulta;
        this.horario = horario;
        this.data = data;
    }
}
class PerfilDoMedico{
    constructor(nome, especialzacao, foto){
        
    }
}
