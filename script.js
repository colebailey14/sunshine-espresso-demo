const orderForm = document.getElementById("orderForm");
const orderMessage = document.getElementById("orderMessage");

let orders = []; // Store multiple orders

orderForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const item = document.getElementById("item").value;
  const quantity = document.getElementById("quantity").value;

  const order = { name, item, quantity };
  orders.push(order);

  let summary = "<h4>Order Summary (Demo Only)</h4><ul>";
  orders.forEach(o => {
    summary += `<li>${o.name} ordered ${o.quantity} x ${o.item}</li>`;
  });
  summary += "</ul>";

  orderMessage.innerHTML = summary;

  orderForm.reset();
});
