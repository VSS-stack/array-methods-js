const botoes = document.querySelectorAll('.btn');

botoes.forEach(botao => botao.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);

    let livrosFiltrados = elementoBtn.value == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == elementoBtn.value);
    
    exibirLivrosNaTela(livrosFiltrados);
}