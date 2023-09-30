let professor1 = new Professor('Alexsander','111.111.111-11', '11/09/2001');
let professor2 = new Professor('Clécio', '222.222.222-22', '02/09/1945');
let aluno1 = new Aluno('Pedro', '333.333.333-33', '17/12/2005', '2022.11');
let aluno2 = new Aluno('Arthur', '444.444.444-44', '18/12/2005', '2022.12');
let aluno3 = new Aluno('Davi', '555.555.555-55', '13/04/2006', '2022.13' );

let rogadx = new EventoAcademico();

rogadx.cadastrarParticipante(professor1);
rogadx.cadastrarParticipante(professor2);
rogadx.cadastrarParticipante(aluno1);
rogadx.cadastrarParticipante(aluno2);
rogadx.cadastrarParticipante(aluno3);

console.log(rogadx);
