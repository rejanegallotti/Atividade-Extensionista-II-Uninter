# 🍫 Doces Vieira — Site Institucional

> Projeto extensionista desenvolvido como atividade acadêmica universitária.  
> Site institucional para a microempreendedora **Doces Vieira**, confeitaria artesanal especializada em brigadeiros gourmet e docinhos de festa, localizada em Biguaçu, Santa Catarina.

---

## 📋 Sobre o Projeto

Este site foi criado para atender à necessidade real de uma pequena confeiteira artesanal que não possuía presença digital. O projeto tem caráter extensionista, aplicando conhecimentos de desenvolvimento web em benefício da comunidade local.

**Objetivo:** Criar uma vitrine digital atrativa para a Doces Vieira, permitindo que clientes conheçam os produtos, visualizem os ingredientes e entrem em contato via WhatsApp para fazer encomendas.

---

## 🚀 Funcionalidades

- ✅ **Catálogo de produtos** com fotos reais dos docinhos
- ✅ **Efeito hover** — ao passar o mouse no card, destaca o produto
- ✅ **Modal de ingredientes** — ao clicar no produto, abre janela com descrição e ingredientes
- ✅ **Botão WhatsApp** para facilitar encomendas diretamente pelo aplicativo
- ✅ **Design responsivo** — funciona em celular, tablet e desktop
- ✅ **Menu mobile** com animação de hambúrguer
- ✅ **Acessibilidade** — uso de atributos ARIA e navegação por teclado
- ✅ **SEO básico** — meta tags de descrição e palavras-chave

---

## 🗂️ Estrutura de Arquivos

```
doces_vieira/
│
├── index.html          # Estrutura da página (HTML5 semântico)
│
├── css/
│   └── style.css       # Todos os estilos visuais (CSS3)
│
├── js/
│   └── script.js       # Interatividade e comportamentos (JavaScript ES6+)
│
├── img/
│   ├── logo.png                # Logo da marca
│   ├── banner1.jpg             # Imagem promocional 1
│   ├── banner2.jpg             # Imagem promocional 2 (hero e sobre nós)
│   ├── leite_ninho.png         # Brigadeiro de Leite Ninho com Nutella
│   ├── noz.png                 # Brigadeiro de Nozes
│   ├── pistache.png            # Brigadeiro de Pistache
│   ├── cajuzinho.png           # Cajuzinho
│   ├── charge.png              # Brigadeiro de Charge
│   ├── churros.png             # Brigadeiro de Churros
│   └── coco.png                # Brigadeiro de Coco Queimado
│
└── README.md           # Este arquivo de documentação
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|---|---|---|
| **HTML5** | — | Estrutura semântica da página |
| **CSS3** | — | Estilização, animações e responsividade |
| **JavaScript** | ES6+ | Interatividade, DOM e eventos |
| **Google Fonts** | — | Tipografias: Playfair Display + Lato |

> ⚠️ **Sem frameworks ou bibliotecas externas** — todo o código foi escrito do zero, demonstrando domínio dos fundamentos das três linguagens.

---

## 📐 Conceitos de CSS Aplicados

- **Variáveis CSS** (`--cor-principal`, `--fonte-titulo`, etc.) para padronização e manutenibilidade
- **CSS Grid** para a grade de produtos responsiva (`auto-fill`, `minmax`)
- **Flexbox** para alinhamento do header, seção sobre nós e contatos
- **Position** (`sticky`, `absolute`, `fixed`) para o header fixo, overlay do hero e modal
- **Transições e animações** (`@keyframes`, `transition`, `transform`)
- **Pseudo-seletores** (`:hover`, `::before`, `::after`)
- **Media Queries** para responsividade em 3 breakpoints (992px, 768px, 480px)
- **Funções CSS**: `clamp()` para tipografia fluida, `linear-gradient()` para fundos

---

## 📐 Conceitos de JavaScript Aplicados

- **Array de objetos** para armazenar os dados dos produtos
- **Funções puras e declarativas** separadas por responsabilidade
- **Manipulação do DOM** (`createElement`, `innerHTML`, `appendChild`)
- **Event Listeners** (`click`, `keydown`)
- **Template Literals** para construção dinâmica de HTML
- **Modo estrito** (`'use strict'`)
- **Acessibilidade** via atributos ARIA manipulados por JS

---

## 🎨 Identidade Visual

| Elemento | Valor |
|---|---|
| Cor principal | `#d4006a` (Rosa vibrante) |
| Cor secundária | `#f5a8d0` (Rosa suave) |
| Fundo destaque | `#fdf0f7` (Rosa pálido) |
| Fundo escuro | `#1a1a1a` a `#3a0020` (Gradiente) |
| Fonte títulos | Playfair Display (serifada elegante) |
| Fonte textos | Lato (sans-serif legível) |

---

## 📱 Responsividade

O site adapta seu layout para três tamanhos de tela:

| Breakpoint | Dispositivo | Adaptações principais |
|---|---|---|
| `> 992px` | Desktop | Layout completo, menu horizontal |
| `≤ 768px` | Tablet / Mobile grande | Menu hambúrguer, colunas reduzidas |
| `≤ 480px` | Mobile pequeno | Grade em 1 coluna, contatos empilhados |

---

## ▶️ Como Visualizar o Site

1. Baixe ou descompacte a pasta do projeto
2. Abra o arquivo `index.html` em qualquer navegador moderno
   (Chrome, Firefox, Edge, Safari)
3. Não é necessário servidor local nem instalação de dependências

---

## 🔮 Próximas Evoluções (fora do escopo deste projeto)

- **Carrinho de compras** — requer back-end (Node.js / PHP) e banco de dados
- **Gateway de pagamento** — integração com Mercado Pago ou PagSeguro
- **Painel administrativo** — para a confeiteira cadastrar novos produtos sem editar código
- **Formulário de contato** — requer servidor para envio de e-mails (ex: Node Mailer)

---

## 👩‍💻 Informações do Projeto

- **Negócio atendido:** Doces Vieira — Docinhos Artesanais
- **Localização:** Biguaçu, Santa Catarina
- **Contato:** (48) 99962-7040 (WhatsApp)
- **Tipo de projeto:** Extensionista Universitário
- **Ano:** 2026

---

*Desenvolvido com HTML5, CSS3 e JavaScript puro — sem frameworks.*
