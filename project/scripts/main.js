const productsContainer = document.querySelector('.products');

products.forEach((product) => {
  const productHTML = `
    <div class="product">
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <a href="product.html?product=${product.id}">View Product</a>
    </div>
  `;
  productsContainer.innerHTML += productHTML;
});