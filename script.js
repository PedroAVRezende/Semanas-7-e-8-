document.addEventListener('DOMContentLoaded', function() {
  // Redirecionar para a página de detalhes da receita
  document.querySelectorAll('.card').forEach(function(card) {
      card.addEventListener('click', function() {
          const recipeId = this.id;
          window.location.href = `receita.html?id=${recipeId}`;
      });
  });

  // Carregar informações da receita na página de detalhes
  const urlParams = new URLSearchParams(window.location.search);
  const recipeId = urlParams.get('id');

  if (recipeId) {
      const recipeData = {
          'salada-de-tomate': {
              titulo: 'Salada de Tomate com Mussarela de Búfala',
              imagem: 'img/Salada de Tomate.jpg',
              instrucoes: `Ingredientes:
              - 400 gramas de queijo mussarela de búfala em fatias
              - 24 tomate cereja cortados ao meio
              - 2 colheres (sopa) de salsa (ou salsinha) picada
              - 2 colheres (sopa) de orégano
              - 1/3 xícara de azeite de oliva
              - 1 colher de vinagre balsâmico

              Modo de Preparo:
              1. Em um prato grande, distribua as fatias de mussarela de búfala e os tomates cereja cortados ao meio.
              2. Polvilhe a salsa picada e o orégano sobre os tomates e a mussarela.
              3. Regue tudo com azeite de oliva e vinagre balsâmico.
              4. Sirva imediatamente ou leve à geladeira por alguns minutos para absorver os sabores.`
          },
          // Adicione os dados das outras receitas aqui
      };

      if (recipeData[recipeId]) {
          document.getElementById('titulo-receita').textContent = recipeData[recipeId].titulo;
          document.getElementById('imagem-receita').src = recipeData[recipeId].imagem;
          document.getElementById('imagem-receita').alt = recipeData[recipeId].titulo;
          document.getElementById('instrucoes-receita').textContent = recipeData[recipeId].instrucoes;
      }
  }
});

// Funcionalidade de pesquisa
document.getElementById('search-button').addEventListener('click', function() {
  let input = document.getElementById('search-input').value.toLowerCase();
  let recipes = document.querySelectorAll('.card p');
  recipes.forEach(function(recipe) {
      let recipeText = recipe.textContent.toLowerCase();
      if (recipeText.includes(input)) {
          recipe.parentElement.style.display = 'block';
      } else {
          recipe.parentElement.style.display = 'none';
      }
  });
});

// Favoritar receita
function favoritarReceita() {
  alert('Receita favoritada!');
}

// Adicionar comentário
function adicionarComentario() {
  const novoComentario = document.getElementById('novo-comentario').value;
  const listaComentarios = document.getElementById('lista-comentarios');

  const comentarioElemento = document.createElement('p');
  comentarioElemento.textContent = novoComentario;

  listaComentarios.appendChild(comentarioElemento);
  document.getElementById('novo-comentario').value = '';
}
