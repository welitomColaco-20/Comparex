const productsContainer = document.getElementById("productsContainer");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("search");

let products = []; // aqui fica o "banco"

// 🔥 CARREGA O JSON UMA VEZ
fetch("products.json")
  .then(res => res.json())
  .then(data => {
    products = data;
    renderProducts(products); // mostra tudo ao carregar
  })
  .catch(() => {
    productsContainer.innerHTML = "<p>Erro ao carregar produtos</p>";
  });

// Renderiza produtos
function renderProducts(list) {
  productsContainer.innerHTML = "";

  if (list.length === 0) {
    productsContainer.innerHTML = "<p>Nenhum produto encontrado</p>";
    return;
  }

  list.forEach(p => {
    productsContainer.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.title}">
        <h3>${p.title}</h3>
        <span>R$ ${p.price}</span>
        <a href="${p.affiliate_link}" target="_blank">
          Ver no AliExpress
        </a>
      </div>
    `;
  });
}

// 🔎 BUSCA LOCAL (SEM API)
function buscarProdutos() {
  const termo = searchInput.value.toLowerCase();

  const filtrados = products.filter(p =>
    p.title.toLowerCase().includes(termo)
  );

  renderProducts(filtrados);
}

// Clique no botão
searchBtn.addEventListener("click", buscarProdutos);

// Busca automática tipo Mercado Livre
searchInput.addEventListener("input", buscarProdutos);
