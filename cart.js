let cartItems = [];

// DOM references
const cartButton = document.getElementById('cart-btn');
const itemList = document.getElementById("item-list");
const totalItems = document.getElementById("total-items");
const subtotalElem = document.getElementById("subtotal");
const totalElem = document.getElementById("total");
const cartBody = document.getElementById("cart-body");
const emptyCart = document.getElementById("empty-cart");
const cartSection = document.getElementById('cart-section');
const continueShoppingBtn = document.getElementById('continue-shopping');
const productsSection = document.getElementById('products-section');

//  Show only the given section, hide others
window.showOnly = function (section) {
  document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
  section.style.display = "block";
};

//  Setup button actions
export function setupCartButton() {
  // Cart icon button
  cartButton?.addEventListener('click', () => {
    showOnly(cartSection);
    renderCart();
  });

  // Continue shopping button
  continueShoppingBtn?.addEventListener('click', () => {
    showOnly(productsSection);
  });
}

// Add to cart
export function addToCart(product) {
  const existingIndex = cartItems.findIndex(item => item.id === product.id);
  if (existingIndex > -1) {
    cartItems[existingIndex].quantity += 1;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }
  renderCart();
}

//  Render cart
function renderCart() {
  if (cartItems.length === 0) {
    cartBody.style.display = "none";
    emptyCart.style.display = "block";
    cartButton.innerHTML = `<i class="bi bi-cart-fill"></i> Cart (0)`;
    return;
  }

  cartBody.style.display = "flex";
  emptyCart.style.display = "none";

  itemList.innerHTML = '';
  let subtotal = 0;
  let totalQty = 0;

  cartItems.forEach((item, index) => {
    subtotal += item.price * item.quantity;
    totalQty += item.quantity;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div>
        <h4>${item.name}</h4>
        <p>${item.quantity} x $${item.price.toFixed(2)}</p>
      </div>
      <div class="quantity-controls">
        <button onclick="changeQty(${index}, -1)">−</button>
        <span>${item.quantity}</span>
        <button onclick="changeQty(${index}, 1)">+</button>
      </div>
    `;
    itemList.appendChild(cartItem);
  });

  totalItems.textContent = totalQty;
  subtotalElem.textContent = `$${subtotal.toFixed(2)}`;
  totalElem.textContent = `$${(subtotal + 30).toFixed(2)}`;
  cartButton.innerHTML = `<i class="bi bi-cart-fill"></i> Cart (${totalQty})`;
}

// Quantity change
window.changeQty = function (index, delta) {
  cartItems[index].quantity += delta;

  // If quantity becomes zero, remove the item from the array
  if (cartItems[index].quantity <= 0) {
    cartItems.splice(index, 1);
  }

  renderCart();
};
