// Load the products data file, then build one card per product
fetch('products.json')
  .then(response => response.json())
  .then(products => {
    const list = document.getElementById('product-list');

    products.forEach(product => {
      // Build the card for this product
      const card = document.createElement('article');
      card.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>À partir de ${product.startingPrice} $</p>
        <button class="detail-button">Voir le détail</button>
        <a href="#commande">Commander</a>
      `;
      list.appendChild(card);

      // When the detail button is clicked, show this product's detail section
      card.querySelector('.detail-button').addEventListener('click', () => {
        showDetail(product);
      });
    });
  });

// Fill the detail section for the clicked product, or close it if it is already open for that product
function showDetail(product) {
  const detail = document.getElementById('product-detail');

  // Toggle off: clicking the same product again closes its detail
  if (detail.dataset.productName === product.name && !detail.hidden) {
    detail.hidden = true;
    detail.dataset.productName = '';
    return;
  }

  // Build the gallery HTML from the product's photo list
  let photosHtml = '';
  product.photos.forEach(photo => {
    photosHtml += `<img src="${photo}" alt="${product.name}">`;
  });

  // Full detail: description, flavors, sizes, ingredients, allergens, price and lead time
  detail.innerHTML = `
    ${photosHtml}
    <p>${product.description}</p>
    <p>Saveurs : ${product.flavors.join(', ')}</p>
    <p>Tailles : ${product.sizes.join(', ')}</p>
    <p>Ingrédients : ${product.ingredients.join(', ')}</p>
    <p>Allergènes : ${product.allergens.join(', ')}</p>
    <p>À partir de ${product.startingPrice} $ — commandez au moins ${product.minLeadHours} h à l'avance.</p>
    <a href="#commande">Commander ce gâteau</a>
  `;

  // Remember which product is open, reveal the section and scroll to it
  detail.dataset.productName = product.name;
  detail.hidden = false;
  detail.scrollIntoView();
}
  // Full detail: description, flavors, sizes, ingredients, allergens, price and lead time
  detail.innerHTML = `
    ${photosHtml}
    <p>${product.description}</p>
    <p>Saveurs : ${product.flavors.join(', ')}</p>
    <p>Tailles : ${product.sizes.join(', ')}</p>
    <p>Ingrédients : ${product.ingredients.join(', ')}</p>
    <p>Allergènes : ${product.allergens.join(', ')}</p>
    <p>À partir de ${product.startingPrice} $ — commandez au moins ${product.minLeadHours} h à l'avance.</p>
    <a href="#commande">Commander ce gâteau</a>
  `;

  // Reveal the section and scroll to it
  detail.hidden = false;
  detail.scrollIntoView();
}

// Toggle the order form card when the customer clicks the "formulaire" link
document.getElementById('show-form-link').addEventListener('click', event => {
  event.preventDefault();
  const card = document.getElementById('order-form-card');
  card.hidden = !card.hidden;
  if (!card.hidden) {
    card.scrollIntoView();
  }
});
