class Bala {
    constructor(raio, cor) {
        this.raio = raio
        this.cor = cor
    }
}


class Player {
    constructor(nome, qntdLados, raio, cor, velocidadeMaxDoTiro, ataque, bala) {
        this.nome = nome
        this.qntdLados = qntdLados
        this.raio = raio
        this.cor = cor
        this.velocidadeMaxDoTiro = velocidadeMaxDoTiro
        this.ataque = ataque
        this.vida = 100
        this.bala = bala
    }
}

