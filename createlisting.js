function initializeListingForm() {
  document.getElementById('create-listing').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('create-listing-modal').style.display = 'block';
  });

  document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('create-listing-modal').style.display = 'none';
  });

  document.getElementById('listing-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const type = document.getElementById('type').value;
    const rarity = document.getElementById('rarity').value;
    const category = document.getElementById('category').value;
    const image = document.getElementById('image').files[0];

    // Create a new listing object
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = function() {
      const imageUrl = reader.result;

      const listing = {
        title: title,
        description: description,
        type: type,
        rarity: rarity,
        price: price,
        category: category,
        imageUrl: imageUrl
      };

      // Display the listing in the marketplace
      addListingToMarketplace(listing);

      // Reset the form and close modal
      document.getElementById('listing-form').reset();
      document.getElementById('create-listing-modal').style.display = 'none';
    };
  });
}

// Function to add a listing to the marketplace
function addListingToMarketplace(listing) {
  const marketplace = document.querySelector('.product-grid');

  const itemDiv = document.createElement('div');
  itemDiv.classList.add('product-card');

  itemDiv.innerHTML = `
    <img src="${listing.imageUrl}" alt="${listing.title}">
    <div class="product-info">
      <p class="price">$${listing.price}</p>
      <p>Category: ${listing.category}</p>
      <p>Type: ${listing.type}</p>
      <p>Rarity: ${listing.rarity}</p>
      <p>Description: ${listing.description}</p>
    </div>
  `;

  marketplace.appendChild(itemDiv);
}
