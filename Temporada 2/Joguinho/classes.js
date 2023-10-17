class Personagem {
    constructor(nome, ataque, vida) {
        this.nome = nome
        this.ataque = ataque
        this.vida = vida
    }

    atacar(oponente) {
        if (oponente instanceof Personagem) {
            console.log(`${this.nome} atacou ${oponente.nome}`)
            oponente.sofrerDano(this)
        }

    }

    sofrerDano(oponente) {
        if (oponente instanceof Personagem) {
            this.vida -= oponente.ataque
            console.log(`${oponente.nome} lançou uma bomba nuclear no ${this.nome}`)
            console.log(`Vida do ${this.nome} é ${this.vida}`)
        }
    }

}
