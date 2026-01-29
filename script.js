let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCounter() {
  const cartLink = document.getElementById("cart-link");
  if (cartLink) {
    cartLink.textContent = `Cart (${cart.length})`;
  }
}

function addToCart(item) {
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCounter();
  alert(`${item.name} added to cart!`);
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartCounter();
  const buttons = document.querySelectorAll(".add-cart-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const item = {
        name: btn.getAttribute("data-name"),
        price: parseFloat(btn.getAttribute("data-price"))
      };
      addToCart(item);
    });
  });
});
