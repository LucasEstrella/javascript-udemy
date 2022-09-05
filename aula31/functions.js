/*function saudacao(nome) {
    return `Bom Dia ${nome}!!!`;
}

const variavel = saudacao('Lucas');
console.log(variavel);
*/

function soma(x = 1, y = 2){  //pode-se tbm criar a função com um valor pre-determinado, caso não receba nada por parâmetro
    const resultado = x + y;
    return resultado;
}

const resultado = soma(5, 6);
console.log(`Resultado da soma ${resultado}`);


const raiz = function(n) {
    return n ** 0.5;
}
console.log(`Resultado da raiz ${raiz(9)}`);

//Arow Function
const raizQuadrada = (n) => {
    return n ** 0.5;
}
console.log(`Resultado da Arow Function ${raizQuadrada(169)}`);