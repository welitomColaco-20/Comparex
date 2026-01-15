const productsContainer = document.getElementById("productsContainer");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

let products = [];

// 🔥 CARREGA O JSON
fetch("products.json")
  .then(res => res.json())
  .then(data => {
    products = data;
    renderProducts(products);
  })
  .catch(err => {
    console.error(err);
    productsContainer.innerHTML = "<p>Erro ao carregar produtos</p>";
  });

function renderProducts(list) {
  productsContainer.innerHTML = "";

  if (!list || list.length === 0) {
    productsContainer.innerHTML = "<p>Nenhum produto encontrado</p>";
    return;
  }

  list.forEach(p => {
    productsContainer.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.title}">
        <h3>${p.title}</h3>
        <span>R$ ${Number(p.price).toFixed(2)}</span>
        <a href="${p.affiliate_link}" target="_blank">
          Ver no AliExpress
        </a>
      </div>
    `;
  });
}

function buscarProdutos() {
  const termo = searchInput.value.toLowerCase();

  const filtrados = products.filter(p =>
    p.title.toLowerCase().includes(termo)
  );

  renderProducts(filtrados);
}

searchBtn.addEventListener("click", buscarProdutos);
searchInput.addEventListener("input", buscarProdutos);
