let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI); //fazendo requisição ao endpoint
    livros = await res.json(); //transformando resposta em um objeto
   
    let livrosComDesconto = aplicarDesconto(livros);

    exibirLivrosNaTela(livrosComDesconto);
}
