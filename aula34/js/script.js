function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    
    
    
    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`

        console.log(pessoas); 
    }
    
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();




/*form.onsubmit = function (evento) {
    evento.preventDefault(); //Muda o comportamento ao enviar o formulário (NÃO ENVIA)
    alert('enviado');
    console.log('foi enviado');
}; //sempre que usar o sinal (=), finalizar a function com (;)
*/

/*
Para selecionar algo em JavaScript
document.querySelector('form') nome da tag
document.querySelector('.form') .classe
document.querySelector('#form') #id
*/