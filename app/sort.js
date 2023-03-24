const botaoOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');

botaoOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
    let livrosOrdenadosPorPreco = [...livros];
    
    livrosOrdenadosPorPreco.sort((a, b) => a.preco - b.preco);

    exibirLivrosNaTela(livrosOrdenadosPorPreco);
}
