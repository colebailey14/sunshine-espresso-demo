let cart = [];

function addToCart(item, price) {
  cart.push({ item, price });
  renderCart();
}

function renderCart() {
  const cartEl = document.getElementById('cart');
  const totalEl = document.getElementById('cartTotal');

  cartEl.innerHTML = '';
  let total = 0;

  cart.forEach((order, index) => {
    total += order.price;
    const li = document.createElement('li');
    li.textContent = `${order.item} - $${order.price}`;
    cartEl.appendChild(li);
  });

  totalEl.textContent = `Total: $${total.toFixed(2)}`;
}

