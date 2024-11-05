// Load items from localStorage
function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsDiv = document.getElementById("cart-items");
  let total = 0;

  cart.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsDiv.appendChild(itemDiv);
    total += item.price;
  });

  document.getElementById("total-price").textContent = total.toFixed(2);
}

// Handle Payment Form Submission
document
  .getElementById("payment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get card details
    const cardNumber = document.getElementById("card-number").value;
    const expiry = document.getElementById("expiry").value;
    const cvv = document.getElementById("cvv").value;

    // Here, implement the payment process (simulated with an alert for this example)
    alert("Payment successful! Thank you for your purchase.");

    // Clear cart and reset localStorage
    localStorage.removeItem("cart");
    window.location.href = "homepage.html";
  });

window.onload = loadCart;
