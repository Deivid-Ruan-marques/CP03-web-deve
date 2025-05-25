const produtos = [
  { nome: "Camisa", preco: 50, categoria: "Roupas", disponibilidade: true },
  { nome: "Calça Jeans", preco: 120, categoria: "Roupas", disponibilidade: false },
  { nome: "Notebook", preco: 3000, categoria: "Eletrônicos", disponibilidade: true },
  { nome: "Fone de Ouvido", preco: 150, categoria: "Eletrônicos", disponibilidade: true },
  { nome: "Tênis", preco: 200, categoria: "Calçados", disponibilidade: true },
  { nome: "Chinelo", preco: 30, categoria: "Calçados", disponibilidade: false },
  { nome: "Livro", preco: 40, categoria: "Livros", disponibilidade: true },
  { nome: "Caderno", preco: 15, categoria: "Papelaria", disponibilidade: true },
  { nome: "Lápis", preco: 3, categoria: "Papelaria", disponibilidade: true },
  { nome: "Relógio", preco: 250, categoria: "Acessórios", disponibilidade: false }
];

const lista = document.getElementById('produtos');
const form = document.getElementById('filtro-form');
const listarBtn = document.getElementById('listar');

function mostrarProdutos(produtosMostrados) {
  lista.innerHTML = '';

  produtosMostrados.forEach(prod => {
    const bloco = document.createElement('div');
    bloco.classList.add('produto');
    bloco.textContent = `${prod.nome} - R$ ${prod.preco} (${prod.categoria})`;

    // Destacar ao passar o mouse
    bloco.addEventListener('mouseenter', () => {
      bloco.style.backgroundColor = '#f0f0f0';
      bloco.style.border = '1px solid #000';
    });

    bloco.addEventListener('mouseleave', () => {
      bloco.style.backgroundColor = '';
      bloco.style.border = '';
    });

    lista.appendChild(bloco);
  });
}

listarBtn.addEventListener('click', () => {
  mostrarProdutos(produtos);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const categoria = document.getElementById('categoria').value;
  const disponiveis = document.getElementById('disponiveis').checked;

  let filtrados = produtos;

  if (categoria) {
    filtrados = filtrados.filter(p => p.categoria === categoria);
  }

  if (disponiveis) {
    filtrados = filtrados.filter(p => p.disponibilidade);
  }

  mostrarProdutos(filtrados);
});
