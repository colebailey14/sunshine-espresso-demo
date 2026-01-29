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
function addToCart(item) {
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCounter();
}

// Attach click handlers after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  updateCartCounter();

  const buttons = document.querySelectorAll(".add-cart-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const item = {
        name: btn.getAttribute("data-name"),
        price: parseFloat(btn.getAttribute("data-price")),
        img: btn.getAttribute("data-img")
      };
      addToCart(item);
      alert(`${item.name} added to cart!`);
    });
  });
});
