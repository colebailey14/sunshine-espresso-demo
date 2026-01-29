// Get cart from localStorage or create new
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart counter in header
function updateCartLink() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartLink = document.getElementById('cart-link');
  cartLink.textContent = `Cart (${totalQty})`;
}

// Add item to cart
function addToCart(name, price, qty) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.qty += qty;
  } else {
    cart.push({ name: name, price: price, qty: qty });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartLink();
}

// Attach click event to all Add to Cart buttons
document.querySelectorAll('.add-cart-btn').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);
    const qtyInput = button.parentElement.querySelector('.qty-input');
    const qty = parseInt(qtyInput.value) || 1;
    addToCart(name, price, qty);
    // Optional: temporary notification instead of alert
    button.textContent = "Added!";
    setTimeout(() => { button.textContent = `Add to Cart - $${price}`; }, 1000);
  });
});

// Initialize cart counter on page load
updateCartLink();
