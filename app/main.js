let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI();

const elementoParaInserirLivros = document.getElementById('livros');

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI); //fazendo requisição ao endpoint
    livros = await res.json(); //transformando resposta em um objeto
    console.log(livros);

    exibirLivrosNaTela(livros);
}

function exibirLivrosNaTela(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}"/>
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toString().replace('.', ',')}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
      </div>
        `; 
    })
}
