function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Lucas', 'Estrella', 34);
const pessoa2 = criaPessoa('Juliana', 'Estrella', 34);

console.log(pessoa1.nome, pessoa2.nome);