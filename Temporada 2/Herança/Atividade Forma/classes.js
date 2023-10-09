class Forma {
    constructor(cor) {
        this.cor = cor
    }

    descrever() {
        console.log(`Essa forma tem a cor ${this.cor}.`)
    }
}

class Quadrado extends Forma {
    constructor(cor, tamanhoDoLado) {
        super(cor)
        this.tamanhoDoLado = tamanhoDoLado
    }

    descrever() {
        console.log(`Este quadrado é: ${this.cor}. E sua área é: ${this.calcularArea()} `)
    }

    calcularArea() {
        return this.tamanhoDoLado ** 2

    }
}

class Circulo extends Forma {
    constructor(cor, raio) {
        super(cor)
        this.raio = raio
    }

    descrever() {
        console.log(`Este circulo é: ${this.cor}. E sua área é: ${this.calcularArea()} `)
    }

    calcularArea() {
        return 3.14 * (this.raio ** 2)
    }
}

