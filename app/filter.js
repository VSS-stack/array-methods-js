const botoes = document.querySelectorAll('.btn');

botoes.forEach(botao => botao.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);

    let livrosFiltrados = elementoBtn.value == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(elementoBtn);
    
    exibirLivrosNaTela(livrosFiltrados);

    if(elementoBtn.value == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);

        exibirValorTotalLivrosDisponiveisNaTela(valorTotal);
    }
}

function filtrarPorCategoria(elementoBtn) {
    return livros.filter(livro => livro.categoria == elementoBtn.value);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalLivrosDisponiveisNaTela(valor) {
    elementoComValorTotalLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
        </div>
    `;
}
