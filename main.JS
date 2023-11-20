
document.addEventListener('DOMContentLoaded', function () {
    const productListContainer = document.querySelector('.product-list');

    fetch('https://dummyjson.com/products') 
        .then(res => res.json())
        .then(data => {
            data.products.forEach(product => {
                const productCard = createProductCard(product);
                productListContainer.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    function createProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <div class="content">
                <img src="${product.thumbnail}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <p>Rating: ${product.rating}</p>
                <p>Stock: ${product.stock}</p>
            </div>`;

        return card;
    }
});
