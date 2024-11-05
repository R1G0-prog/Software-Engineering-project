document.getElementById("login-btn").addEventListener("click", function () {
  // Open a new window with the login form
  window.open("login.html", "_blank", "width=400,height=400");
});

document
  .getElementById("create-listing")
  .addEventListener("click", function () {
    // Open a new window with the listing form
    window.open("createlisting.html", "_blank", "width=600,height=600");
  });

document.querySelector(".profile-icon").addEventListener("click", function () {
  var dropdown = document.getElementById("dropdown-content");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
});

// Function to open create account page in a new window
document
  .getElementById("create-account-btn")
  .addEventListener("click", function () {
    // Open a new window with the create account form
    window.open("createaccount.html", "_blank", "width=400,height=400");
  });

// Filter and Sort Functionality
document
  .getElementById("weapon-type")
  .addEventListener("change", filterProducts);
document.getElementById("rarity").addEventListener("change", filterProducts);
document.getElementById("sort").addEventListener("change", sortProducts);

function filterProducts() {
  const weaponType = document.getElementById("weapon-type").value;
  const rarity = document.getElementById("rarity").value;
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    const cardWeaponType = card.getAttribute("data-weapon-type");
    const cardRarity = card.getAttribute("data-rarity");

    let isVisible = true;

    if (weaponType && cardWeaponType !== weaponType) {
      isVisible = false;
    }

    if (rarity && cardRarity !== rarity) {
      isVisible = false;
    }

    card.style.display = isVisible ? "block" : "none";
  });
}

// Add to Cart Function
function addToCart(itemName, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name: itemName, price: price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${itemName} has been added to your cart.`);
  updateCartCount();
}

// Function to update the cart count bubble
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.length;
  const cartBubble = document.getElementById("cart-bubble");
  const cartCount = document.getElementById("cart-count");

  // Update both the bubble and footer count text
  cartBubble.textContent = count;
  cartCount.textContent = count;

  // Show the bubble only if there are items in the cart
  cartBubble.style.display = count > 0 ? "inline-block" : "none";
}

// Call updateCartCount on page load to display current count
window.onload = updateCartCount;

// View Cart Function
function viewCart() {
  window.location.href = "cart.html";
}

function sortProducts() {
  const productGrid = document.getElementById("marketplace");
  const products = Array.from(
    productGrid.getElementsByClassName("product-card")
  );
  const sortValue = document.getElementById("sort").value;

  products.sort((a, b) => {
    const priceA = parseFloat(a.getAttribute("data-price"));
    const priceB = parseFloat(b.getAttribute("data-price"));
    const rarityA = parseInt(a.getAttribute("data-rarity"));
    const rarityB = parseInt(b.getAttribute("data-rarity"));

    if (sortValue === "priceLow") {
      return priceA - priceB;
    } else if (sortValue === "priceHigh") {
      return priceB - priceA;
    } else if (sortValue === "rarity") {
      return rarityA - rarityB; // Higher rarity should come first if needed
    }
    return 0; // Default case for recommended
  });

  // Clear and re-append sorted products
  productGrid.innerHTML = "";
  products.forEach((product) => productGrid.appendChild(product));
}
