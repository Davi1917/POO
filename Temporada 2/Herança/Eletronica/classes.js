class Produto {
    constructor(descricao, precoUnitario, fabricante){
        this.descricao = descricao;
        this.precoUnitario = precoUnitario;
        this.fabricante = fabricante;
    }
}

class Celular extends Produto {
    constructor(descricao, precoUnitario, fabricante, armazenamento, ram, processador, tamanhoDaTela){
        super(descricao, precoUnitario, fabricante)
        this.armazenamento = armazenamento;
        this.ram = ram;
        this.processador = processador;
        this.tamanhoDaTela = tamanhoDaTela;
    }
}

class CaixinhaDeSom extends Produto {
    constructor(descricao, precoUnitario, fabricante, potencia, dimensoes, temLed){
        super(descricao, precoUnitario, fabricante)
        this.potencia = potencia;
        this.dimensoes = dimensoes;
        this.temLed = temLed;

    }
}

class Estoque {
    constructor(listaDeProdutos){
        this.listaDeProdutos = []
    }


    adicionarProduto(produto){
        this.listaDeProdutos.push(produto)
    }
}
