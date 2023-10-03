let celular1 = new Celular('Um celular de pobre', 700, 'Motorola', 32, 2, 'Um bem ruinzinho', 'Um pequeno')
let celular2 = new Celular('Um celular de rico', 3400, 'Apple', 64, 8, 'Um maromeno', 'Médio')
let celular3 = new Celular('Um celular muito bom para jogar ', 7800, 'Xiomi', 540, 8, 'Um bem forte', 'É grandona')

let caixinha1 = new CaixinhaDeSom('Um caixa de som bluethoot', 31, 'Xtrad', '3W', '5 cm x 3 m', 'SIM')
let caixinha2 = new CaixinhaDeSom('Um caixa de som pra PC', 'C3TECH', 29, '3W', '6,5D x 6,5W x 6,9H centímetros', 'NÃO')

let lojinha = new Estoque()

lojinha.adicionarProduto(celular1)
lojinha.adicionarProduto(celular2)
lojinha.adicionarProduto(celular3)

lojinha.adicionarProduto(caixinha1)
lojinha.adicionarProduto(caixinha2)
lojinha.adicionarProduto('meu paredão compacto')
