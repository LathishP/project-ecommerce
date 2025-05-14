import { addToCart } from './cart.js';

let allProducts = [];

export function fetchAndDisplayProducts() {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
      allProducts = data;
      displayProducts(allProducts);
    });
}

function displayProducts(products) {
  const container = document.getElementById('products-container');
  container.innerHTML = '';
  products.forEach(product => {
    const title = product.title.length > 12 ? product.title.slice(0, 12) + '...' : product.title;
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h4 title="${product.title}">${title}</h4>
      <p>${product.description}</p>
      <div class="price">$${product.price}</div>
      <div class="card-buttons">
        <button class="view-btn"> Details</button>
        <button class="add-btn"> Add to Cart</button>
      </div>
    `;
    card.querySelector('.add-btn').addEventListener('click', () => {
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.image,
      });
    });
    container.appendChild(card);
  });
}

export function setupCategoryFilter() {
  const categoryButtons = document.querySelectorAll('.cat-btn');
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.dataset.category;
      const filtered = category === 'all'
        ? allProducts
        : allProducts.filter(p => p.category.toLowerCase() === category.toLowerCase());
      displayProducts(filtered);
    });
  });
}
