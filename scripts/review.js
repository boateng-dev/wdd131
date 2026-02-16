const productNameSelect = document.getElementById('product-name');

products.forEach((product) => {
  const option = document.createElement('option');
  option.value = product.id;
  option.textContent = product.name;
  productNameSelect.appendChild(option);
});
const reviewForm = document.getElementById('review-form');

reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const productId = document.getElementById('product-name').value;
  const rating = document.querySelector('input[name="rating"]:checked').value;
  const review = document.getElementById('review').value;

  const product = products.find((product) => product.id == productId);
  product.reviews.push({ rating, review, date: new Date().toLocaleDateString() });

  localStorage.setItem('products', JSON.stringify(products));
  alert('Review submitted successfully!');
  reviewForm.reset();
});