const orderForm = document.getElementById("orderForm");
const orderMessage = document.getElementById("orderMessage");

orderForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const item = document.getElementById("item").value;
  const quantity = document.getElementById("quantity").value;

  orderMessage.innerHTML = `<p>Thank you, <strong>${name}</strong>! Your order of <strong>${quantity} x ${item}</strong> has been received (demo only).</p>`;

  orderForm.reset();
});
