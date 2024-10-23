document.getElementById("login-btn").addEventListener("click", function() {
    // Open a new window with the login form
    window.open('login.html', '_blank', 'width=400,height=400');
});

document.getElementById("create-account-btn").addEventListener("click", function() {
    // Open a new window with the create account form
    window.open('createaccount.html', '_blank', 'width=400,height=400');
});

document.getElementById("create-listing").addEventListener("click", function() {
    // Open a new window with the listing form
    window.open('createlisting.html', '_blank', 'width=600,height=600');
});

document.querySelector(".profile-icon").addEventListener("click", function() {
    var dropdown = document.getElementById("dropdown-content");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// Cart functionality
const cartItems = []; // Store cart items

document.querySelector(".cart-button").addEventListener("click", function() {
    var dropdown = document.getElementById("cart-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";

    // Populate dropdown with cart items
    const dropdownContent = document.getElementById("cart-dropdown");
    dropdownContent.innerHTML = ""; // Clear existing items
    if (cartItems.length === 0) {
        dropdownContent.innerHTML = "<p>No items in cart</p>";
    } else {
        cartItems.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.textContent = `${item.title}: $${item.price}`;
            dropdownContent.appendChild(itemElement);
        });
    }
});

// Function to add item to cart
function buyNowFromHomepage(item) {
    cartItems.push(item); // Add item to cart
    console.log(`${item.title} added to cart`); // Log to console
}

// Function to navigate to product page
function goToProductPage(title, image, price) {
  window.location.href = `product.html?title=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}&price=${price}`;
}

// Filter and Sort Functionality
document.getElementById("weapon-type").addEventListener("change", filterProducts);
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

function sortProducts() {
    const productGrid = document.getElementById("marketplace");
    const products = Array.from(productGrid.getElementsByClassName("product-card"));
    const sortValue = document.getElementById("sort").value;

    products.sort((a, b) => {
        const priceA = parseFloat(a.getAttribute("data-price"));
        const priceB = parseFloat(b.getAttribute("data-price"));
        const rarityA = a.getAttribute("data-rarity");
        const rarityB = b.getAttribute("data-rarity");

        if (sortValue === "priceLow") {
            return priceA - priceB;
        } else if (sortValue === "priceHigh") {
            return priceB - priceA;
        } else if (sortValue === "rarity") {
            return rarityA.localeCompare(rarityB);
        }
        return 0; // Default case for recommended
    });

    // Clear and re-append sorted products
    productGrid.innerHTML = "";
    products.forEach((product) => productGrid.appendChild(product));
}

// Add a click event listener to the document to close dropdowns
document.addEventListener("click", function(event) {
    var dropdown = document.getElementById("dropdown-content");
    var accountButton = document.querySelector(".profile-icon");

    // Check if the clicked element is within the dropdown or the account button
    if (!dropdown.contains(event.target) && !accountButton.contains(event.target)) {
        dropdown.style.display = "none";
    }
});
