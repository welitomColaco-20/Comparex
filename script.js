const productsContainer = document.getElementById("productsContainer");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("search");

// Renderiza produtos vindos do backend
function renderProducts(products) {
  productsContainer.innerHTML = "";

  if (products.length === 0) {
    productsContainer.innerHTML = "<p>Nenhum produto encontrado</p>";
    return;
  }

  products.forEach(p => {
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

// Busca no backend
async function buscarProdutos() {
  const termo = searchInput.value;

  const res = await fetch(
    `https://back-end-comparex.onrender.com/products?search=${termo}`
  );

  const produtos = await res.json();
  renderProducts(produtos);
}

// Clique no botão
searchBtn.addEventListener("click", buscarProdutos);

// (Opcional) busca automática tipo Mercado Livre 🔥
searchInput.addEventListener("input", buscarProdutos);
