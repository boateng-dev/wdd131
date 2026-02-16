const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('product');

const product = products.find((product) => product.id == productId);

document.getElementById('product-name').textContent = product.name;
document.getElementById('product-image').src = product.image;
document.getElementById('product-description').textContent = product.description;

const reviewsContainer = document.getElementById('reviews');

product.reviews.forEach((review) => {
  const reviewHTML = `
    <div class="review">
      <p>Rating: ${review.rating}/5</p>
      <p>${review.review}</p>
      <p>Posted on: ${review.date}</p>
    </div>
  `;
  reviewsContainer.innerHTML += reviewHTML;
});