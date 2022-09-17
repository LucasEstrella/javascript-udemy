// (Condição) ? 'Valor para verdadeiro' : 'Valor para falso' ;

const pontuacaoUsuario = 500;
const nivelUsurio = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário normal';

const corUsuario = 'Blue';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsurio, corPadrao);

