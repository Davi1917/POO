let forma1 = new Quadrado('Roxo', 4)
let forma2 = new Circulo('Vermelho', 5)
let forma3

forma1.descrever()
forma1.calcularArea()

forma2.descrever()
forma2.calcularArea



if (forma1 instanceof Forma) {
    console.log('É uma forma geométrica válida')
} else {
    console.error('NÃO! é uma forma geométrica válida')
}

if (forma2 instanceof Forma) {
    console.log('É uma forma geométrica válida')
} else {
    console.error('NÃO É UMA FORMA GEOMÉTRICA VÁLIDA!')
}

if (forma3 instanceof Forma) {
    console.log('É uma forma geométrica válida')
} else {
    console.error('NÃO É UMA FORMA GEOMÉTRICA VÁLIDA!')
}
