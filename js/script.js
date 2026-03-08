/**
 * ============================================================
 * DOCES VIEIRA — Script Principal
 * ============================================================
 * Arquivo:    js/script.js
 * Descrição:  Toda a interatividade do site usando JavaScript ES6+.
 *
 * Funcionalidades implementadas:
 *   1. Dados dos produtos (array de objetos)
 *   2. Renderização dinâmica dos cards de produto
 *   3. Modal de ingredientes (abrir / fechar)
 *   4. Menu mobile (hambúrguer)
 *   5. Fechamento por tecla ESC
 *   6. Fechar modal ao clicar fora
 * ============================================================
 */

'use strict'; // Modo estrito: boas práticas, evita erros silenciosos


/* ============================================================
   1. DADOS DOS PRODUTOS
   Array de objetos JavaScript. Cada objeto representa
   um produto com suas propriedades.
   Para adicionar novos produtos, basta adicionar um novo
   objeto a este array seguindo o mesmo modelo.
============================================================ */
const produtos = [
  {
    nome:        'Brigadeiro de Leite Ninho com Nutella',
    categoria:   'Brigadeiro Gourmet',
    imagem:      'img/leite_ninho.png',
    descricao:   'Uma combinação irresistível do cremoso leite ninho com a suavidade da Nutella, decorado com um toque especial de chocolate. Perfeito para quem ama o sabor delicado do leite em pó.',
    ingredientes: ['Leite Ninho', 'Nutella', 'Leite condensado', 'Creme de leite', 'Manteiga']
  },
  {
    nome:        'Brigadeiro de Nozes',
    categoria:   'Brigadeiro Gourmet',
    imagem:      'img/noz.png',
    descricao:   'Brigadeiro branco com textura aveludada, coberto de açúcar cristal e coroado com meia noz caramelizada. Um equilíbrio perfeito entre doçura e o toque levemente amargo da noz.',
    ingredientes: ['Nozes', 'Chocolate branco', 'Leite condensado', 'Creme de leite', 'Açúcar cristal']
  },
  {
    nome:        'Brigadeiro de Pistache',
    categoria:   'Brigadeiro Gourmet',
    imagem:      'img/pistache.png',
    descricao:   'O mais sofisticado do cardápio! Brigadeiro de pistache com recheio cremoso coberto por lascas de chocolate branco, trazendo um sabor único e refinado para qualquer ocasião.',
    ingredientes: ['Pasta de pistache', 'Chocolate branco', 'Leite condensado', 'Manteiga', 'Lascas de chocolate branco']
  },
  {
    nome:        'Cajuzinho',
    categoria:   'Docinho Tradicional',
    imagem:      'img/cajuzinho.png',
    descricao:   'O docinho clássico brasileiro que nunca sai de moda! Feito com amendoim torrado e moído, coberto de açúcar cristal e decorado com um amendoim crocante no topo.',
    ingredientes: ['Amendoim torrado', 'Açúcar', 'Leite condensado', 'Chocolate em pó', 'Açúcar cristal']
  },
  {
    nome:        'Brigadeiro de Charge',
    categoria:   'Brigadeiro Gourmet',
    imagem:      'img/charge.png',
    descricao:   'Brigadeiro de chocolate ao leite com recheio generoso de doce de leite, coberto por amendoim granulado crocante. Uma explosão de texturas e sabores em cada mordida.',
    ingredientes: ['Chocolate ao leite', 'Doce de leite', 'Amendoim granulado', 'Leite condensado', 'Creme de leite']
  },
  {
    nome:        'Brigadeiro de Churros',
    categoria:   'Brigadeiro Gourmet',
    imagem:      'img/churros.png',
    descricao:   'Toda a magia do churros em forma de brigadeiro! Base de massa coberta por açúcar cristal e um espiral tentador de doce de leite por cima. Uma viagem de sabores!',
    ingredientes: ['Doce de leite', 'Açúcar cristal', 'Canela', 'Leite condensado', 'Farinha']
  },
  {
    nome:        'Brigadeiro de Coco Queimado',
    categoria:   'Brigadeiro Gourmet',
    imagem:      'img/coco.png',
    descricao:   'Docinho caramelizado coberto por coco ralado tostado, com aquele sabor especial que só o coco queimado tem. Rústico, aromático e absolutamente delicioso.',
    ingredientes: ['Coco queimado', 'Leite condensado', 'Açúcar', 'Manteiga', 'Coco ralado tostado']
  }
];


/* ============================================================
   2. SELEÇÃO DOS ELEMENTOS DO DOM
   Guardamos referências aos elementos HTML que serão
   manipulados, evitando buscá-los repetidamente no DOM.
============================================================ */
const productsGrid  = document.getElementById('productsGrid');   // Grade de produtos
const modalOverlay  = document.getElementById('modalOverlay');   // Fundo do modal
const modalClose    = document.getElementById('modalClose');     // Botão fechar (X)
const modalImg      = document.getElementById('modalImg');       // Imagem no modal
const modalCategory = document.getElementById('modalCategory'); // Categoria no modal
const modalTitle    = document.getElementById('modalTitle');     // Título no modal
const modalDesc     = document.getElementById('modalDesc');      // Descrição no modal
const modalIngreds  = document.getElementById('modalIngredients'); // Tags de ingredientes
const menuToggle    = document.getElementById('menuToggle');     // Botão hambúrguer
const mainNav       = document.getElementById('mainNav');        // Menu de navegação


/* ============================================================
   3. RENDERIZAÇÃO DOS CARDS DE PRODUTO
   Percorre o array `produtos` e cria um card HTML
   para cada item, inserindo-o na grade.

   Técnica utilizada: Template Literals (crases ``) para
   montar HTML como string, e innerHTML para inserir.
============================================================ */

/**
 * Cria e retorna o elemento HTML de um card de produto.
 * @param {Object} produto - Objeto com dados do produto
 * @returns {HTMLElement} - Elemento div do card
 */
function criarCard(produto) {
  // Criamos o elemento div e atribuímos a classe
  const card = document.createElement('div');
  card.className = 'card';
  card.setAttribute('role', 'listitem');
  card.setAttribute('tabindex', '0');  // Permite foco pelo teclado
  card.setAttribute('aria-label', `Ver ingredientes de ${produto.nome}`);

  // Template literal: insere o HTML interno do card
  card.innerHTML = `
    <div class="card-img-wrap">
      <img
        class="card-img"
        src="${produto.imagem}"
        alt="Foto de ${produto.nome}"
        loading="lazy"
      >
    </div>
    <div class="card-overlay" aria-hidden="true">
      <div class="overlay-title">${produto.nome}</div>
      <div class="overlay-desc">Clique para ver os ingredientes 🍫</div>
    </div>
    <div class="card-body">
      <div class="card-name">${produto.nome}</div>
      <span class="card-tag">${produto.categoria}</span>
      <div class="card-hint">Clique para ver ingredientes</div>
    </div>
  `;

  // Evento de clique: abre o modal com os dados deste produto
  card.addEventListener('click', () => abrirModal(produto));

  // Acessibilidade: permite abrir o modal com a tecla Enter
  card.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter' || evento.key === ' ') {
      evento.preventDefault();
      abrirModal(produto);
    }
  });

  return card;
}

/**
 * Renderiza todos os produtos na grade (#productsGrid).
 * Limpa a grade antes de renderizar (útil em caso de re-render).
 */
function renderizarProdutos() {
  // Limpa a grade (caso já tenha conteúdo)
  productsGrid.innerHTML = '';

  // Para cada produto no array, cria e adiciona um card
  produtos.forEach((produto) => {
    const card = criarCard(produto);
    productsGrid.appendChild(card);
  });
}


/* ============================================================
   4. MODAL DE INGREDIENTES
   Funções para abrir e fechar a janela flutuante que
   exibe os detalhes e ingredientes do produto clicado.
============================================================ */

/**
 * Abre o modal com os dados do produto selecionado.
 * @param {Object} produto - Objeto com dados do produto
 */
function abrirModal(produto) {
  // Preenche os campos do modal com os dados do produto
  modalImg.src      = produto.imagem;
  modalImg.alt      = `Foto de ${produto.nome}`;
  modalTitle.textContent    = produto.nome;
  modalCategory.textContent = produto.categoria;
  modalDesc.textContent     = produto.descricao;

  // Limpa as tags de ingredientes anteriores
  modalIngreds.innerHTML = '';

  // Cria uma tag visual para cada ingrediente
  produto.ingredientes.forEach((ingrediente) => {
    const tag = document.createElement('span');
    tag.className   = 'ingredient-tag';
    tag.textContent = ingrediente;
    modalIngreds.appendChild(tag);
  });

  // Exibe o modal adicionando a classe CSS 'active'
  modalOverlay.classList.add('active');

  // Acessibilidade: informa que o modal está visível
  modalOverlay.setAttribute('aria-hidden', 'false');

  // Bloqueia o scroll da página enquanto o modal está aberto
  document.body.style.overflow = 'hidden';

  // Move o foco para o botão de fechar (acessibilidade)
  modalClose.focus();
}

/**
 * Fecha o modal e restaura o scroll da página.
 */
function fecharModal() {
  // Remove a classe que exibe o modal
  modalOverlay.classList.remove('active');

  // Acessibilidade: informa que o modal está oculto
  modalOverlay.setAttribute('aria-hidden', 'true');

  // Restaura o scroll da página
  document.body.style.overflow = '';
}


/* ============================================================
   5. MENU MOBILE (HAMBÚRGUER)
   Controla a exibição do menu em telas pequenas.
   Ao clicar no botão, alterna a classe 'aberto' no nav
   e 'ativo' no botão (para a animação do ícone).
============================================================ */

/**
 * Alterna (abre/fecha) o menu mobile.
 */
function alternarMenu() {
  // Toggle: adiciona a classe se não existir, remove se existir
  mainNav.classList.toggle('aberto');
  menuToggle.classList.toggle('ativo');

  // Atualiza atributo de acessibilidade
  const estaAberto = mainNav.classList.contains('aberto');
  menuToggle.setAttribute('aria-expanded', estaAberto.toString());
}

/**
 * Fecha o menu mobile (chamado ao clicar em um link do menu).
 */
function fecharMenu() {
  mainNav.classList.remove('aberto');
  menuToggle.classList.remove('ativo');
  menuToggle.setAttribute('aria-expanded', 'false');
}


/* ============================================================
   6. REGISTRO DE EVENTOS (Event Listeners)
   Conecta as funções acima aos eventos do usuário.
============================================================ */

// Fechar modal ao clicar no botão X
modalClose.addEventListener('click', fecharModal);

// Fechar modal ao clicar no fundo escuro (fora da caixa)
modalOverlay.addEventListener('click', (evento) => {
  // Verifica se o clique foi no overlay e não na caixa do modal
  if (evento.target === modalOverlay) {
    fecharModal();
  }
});

// Fechar modal ao pressionar a tecla ESC
document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape' && modalOverlay.classList.contains('active')) {
    fecharModal();
  }
});

// Abrir/fechar menu mobile ao clicar no hambúrguer
menuToggle.addEventListener('click', alternarMenu);

// Fechar menu ao clicar em qualquer link de navegação
mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', fecharMenu);
});


/* ============================================================
   7. INICIALIZAÇÃO
   Executa as funções principais quando o script é carregado.
   O script está no final do <body>, então o DOM já está pronto.
============================================================ */
renderizarProdutos();

// Log para confirmar carregamento (visível no console do navegador)
console.log(`✅ Doces Vieira: ${produtos.length} produtos carregados com sucesso!`);
