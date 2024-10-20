document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("weapon-type")
    .addEventListener("change", filterProducts);
  document.getElementById("rarity").addEventListener("change", filterProducts);

  function filterProducts() {
    const weaponType = document
      .getElementById("weapon-type")
      .value.toLowerCase();
    const rarity = document.getElementById("rarity").value.toLowerCase();

    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach((card) => {
      const cardWeaponType = card
        .getAttribute("data-weapon-type")
        .toLowerCase();
      const cardRarity = card.getAttribute("data-rarity").toLowerCase();

      const weaponMatch = !weaponType || cardWeaponType === weaponType;
      const rarityMatch = !rarity || cardRarity === rarity;

      if (weaponMatch && rarityMatch) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
});
