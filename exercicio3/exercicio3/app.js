

const produtos = [
    {
        nome: "Tênis",
        preco: 200
    }
];

function verificarPreco(produto, precoEsperado) {
    if (produto.preco === precoEsperado) {
        return `${produto.nome} - ${produto.preco} - Produto correto`;
    }

    return "Produto incorreto";
}

console.log(verificarPreco(produtos[0], 200));
console.log(verificarPreco(produtos[0], 150));

function verificarNumero(numero) {
    if (numero > 0) {
        return "positivo";
    } else if (numero < 0) {
        return "negativo";
    } else {
        return "neutro";
    }
}

console.log(verificarNumero(10));
console.log(verificarNumero(-5));
console.log(verificarNumero(0));

function calcularDobro(numero) {
    return numero * 2;
}

const resultadoDobro = calcularDobro(8);
console.log(resultadoDobro);





