/*Lucas Estrella tenho 33 anos, peso 115kg
tenho 1,86 de altura e meu imc é de 
Lucas Estrella nasceu em 1988*/

const nome = "Lucas";
const sobrenome = "Estrella";
const idade = 33;
const peso = 115;
const altura = 1.86;
const anoAtual = 2022;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = anoAtual - idade;

console.log(imc);
console.log(anoNascimento);
console.log(`${nome} ${sobrenome} tenho ${idade} anos, peso ${peso} kg`);
console.log(`tenho ${altura} de altura e meu imc é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);

/*Para adquirir o valor de uma variável em javascript usa-se o `${variável}` */