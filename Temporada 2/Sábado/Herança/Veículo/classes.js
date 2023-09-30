/*  ATRIBUTOS
- fabricante
- modelo
- qtdPortas
- qtdPassageiros
- volumeDoPortaMalas
- tipoDeCombustivel
- qtdPneus


*/

class Veiculo {
    constructor(fabricante, modelo, qtdPassageiros, volumeDoPortaMalas, tipoDeCombustivel) {
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.qtdPassageiros = qtdPassageiros;
        this.volumeDoPortaMalas = volumeDoPortaMalas;
        this.tipoDeCombustivel = tipoDeCombustivel;

    }
}

class Carro extends Veiculo {
    constructor(fabricante, modelo, qtdPassageiros, volumeDoPortaMalas, tipoDeCombustivel, qtdPneus, qtdPortas) {
        super(fabricante, modelo, qtdPassageiros, volumeDoPortaMalas, tipoDeCombustivel)

        this.qtdPneus = qtdPneus
        this.qtdPortas = qtdPortas


    }
}

class Moto extends Veiculo {
    constructor(fabricante, modelo, qtdPassageiros, volumeDoPortaMalas, tipoDeCombustivel, qtdPneus) {
        super(fabricante, modelo, qtdPassageiros, volumeDoPortaMalas, tipoDeCombustivel)


        this.qtdPneus = qtdPneus

    }
}

class Onibus extends Veiculo {
    constructor(fabricante, modelo, qtdPassageiros, volumeDoPortaMalas, tipoDeCombustivel, qtdPneus, qtdPortas) {
        super(fabricante, modelo, qtdPassageiros, volumeDoPortaMalas, tipoDeCombustivel)
        this.qtdPneus = qtdPneus
        this.qtdPortas = qtdPortas

    }
}

class Jetski extends Veiculo {
    constructor(fabricante, modelo, qtdPassageiros, volumeDoPortaMalas, tipoDeCombustivel) {
        super(fabricante, modelo, qtdPassageiros, volumeDoPortaMalas, tipoDeCombustivel)

    }
}

class EstoqueDeVeiculos {
    constructor() {
        this.listaDeVeiculos = []
    }

    adicionarVeiculo(veiculo) {
        if (veiculo instanceof Veiculo && !(veiculo instanceof Jetski)) {
            this.listaDeVeiculos.push(veiculo);
        } else {
            console.error("Não é veículo, fera!")
        }

    }
}
