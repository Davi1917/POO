class Produto {
    constructor(descricao, precoUnitario, fabricante) {
        this.descricao = descricao;
        this.precoUnitario = precoUnitario;
        this.fabricante = fabricante;
    }
}

class Celular extends Produto {
    constructor(descricao, precoUnitario, fabricante, armazenamento, ram, processador, tamanhoDaTela) {
        super(descricao, precoUnitario, fabricante)
        this.armazenamento = armazenamento;
        this.ram = ram;
        this.processador = processador;
        this.tamanhoDaTela = tamanhoDaTela;
    }
}

class CaixinhaDeSom extends Produto {
    constructor(descricao, precoUnitario, fabricante, potencia, dimensoes, temLed) {
        super(descricao, precoUnitario, fabricante)
        this.potencia = potencia;
        this.dimensoes = dimensoes;
        this.temLed = temLed;

    }
}

class Estoque {
    constructor(listaDeProdutos) {
        this.listaDeProdutos = []
    }


    adicionarProduto(produto) {
        for (let i = 0; i < this.listaDeProdutos.length; i++)

            //verifique se a entrada Produto é da classe Produto
            if (produto instanceof Produto) {
                this.listaDeProdutos.push(produto)
                console.log('O produto foi adicionado com sucesso')
            }

            else {
                console.error(`A entrada não é da classe Produto`)
            }
    }
}





