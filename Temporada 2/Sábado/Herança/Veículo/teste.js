let carro1 = new Carro('Volkswagen', 'Käfer', 3, '100 Litros', 'Gasolina', 4, 2);
let moto1 = new Moto('Honda', 'Elite 125', 2, '50 Litros', 'Gasolina', 2);
let onibus1 = new Onibus('Mercedes Benz', 'Urbano', '990 Litros', 'Gasolina', 6, 2);
let jetski1 = new Jetski('Yamaha', 'Vx cruiser', 2, '116 Litros', 'Disel');

let lekMotors = new EstoqueDeVeiculos();
lekMotors.adicionarVeiculo(carro1);
lekMotors.adicionarVeiculo(moto1);
lekMotors.adicionarVeiculo(onibus1);
lekMotors.adicionarVeiculo(jetski1);



