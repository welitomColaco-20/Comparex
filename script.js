const productsContainer = document.getElementById("productsContainer");
const searchBtn = document.getElementById("searchBtn");

const mockProducts = [
  {
    name: "Fone Bluetooth",
    price: "R$ 79,90",
    image: "https://via.placeholder.com/300"
  },
  {
    name: "Smartwatch",
    price: "R$ 199,90",
    image: "https://via.placeholder.com/300"
  }
];

function renderProducts(products) {
  productsContainer.innerHTML = "";

  products.forEach(p => {
    productsContainer.innerHTML += `
      <div class="product">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <span>${p.price}</span>
      </div>
    `;
  });
}

fetch("/api/produtos?search=fone")
  .then(res => res.json())
  .then(data => renderProducts(data));

searchBtn.addEventListener("click", () => {
  // aqui depois entra busca no banco
});