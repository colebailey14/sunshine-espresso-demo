// Load cart from localStorage or start empty
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart counter in nav
function updateCartCounter() {
  const cartLink = document.getElementById("cart-link");
  if (cartLink) {
    cartLink.textContent = `Cart (${cart.length})`;
  }
}

// Add item to cart
function addToCart(item, price) {
  cart.push({ item, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCounter();
}

// Initialize cart count on page load
updateCartCounter();
