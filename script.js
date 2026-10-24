fetch('products.json')
    .then(response => response.json())
    .then(products => {
        const list = document.getElementById('product-list');
        products.forEach(product => {
            const card = document.createElement('article');
            card.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p> A partir de ${product.startingPrice} $</p>
                <a href="#commande">Commander</a>
            `;
            list.appendChild(card);
        });
    })