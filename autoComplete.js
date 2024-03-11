const inputCidade = document.querySelector('.procurar input');
const listaCidades = document.querySelector('.procurar ul');


function autocompletarCidades(dados) {

    // Criar uma lista de todas as cidades
    let todasCidades = [];
    dados.estados.forEach(estado => {
      todasCidades = todasCidades.concat(estado.cidades.map(cidade => ({
        nome: cidade,
        estado: estado.sigla
      })));
    });

    inputCidade.addEventListener('input', function() {
      const textoInput = this.value.toLowerCase();
      const sugestoes = todasCidades.filter(cidade => 
        cidade.nome.toLowerCase().startsWith(textoInput) ||
        cidade.estado.toLowerCase().startsWith(textoInput)
      );

      mostrarSugestoes(sugestoes);
    });

    function mostrarSugestoes(sugestoes) {
      limparSugestoes();
      sugestoes.forEach(sugestao => {
        const li = document.createElement('li');
        li.textContent = sugestao.nome + ' - ' + sugestao.estado;
        li.addEventListener('click', function() {
          inputCidade.value = sugestao.nome + ', ' + sugestao.estado;
          limparSugestoes();
        });
        listaCidades.appendChild(li);
      });
    }

    function limparSugestoes() {
      while (listaCidades.firstChild) {
        listaCidades.removeChild(listaCidades.firstChild);
      }
    }
}