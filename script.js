document.addEventListener('DOMContentLoaded', () => {
  fetchProducts()
})

const fetchProducts = () => {
  const productSection = document.querySelector('.product-section')
  fetch('http://localhost:3000/products')
    .then((res) => res.json())
    .then((products) => {
      const productSectionHTML = products
        .map((product) => {
          const { id, category, name, description, price, image } = product
          return `
          <section id="${category}">
            <h2>${name}</h2>
            <div class="product">
              <img src="${image}" alt="${name}" />
              <p>${description}</p>
              <div>
              <p>$ ${price}</p>
              <button class="buy">
              <a href="/payment.html">Buy Now</a>
              </button/>
              </div>
              </div>
          </section>`
        })
        .join('')
      productSection.innerHTML = productSectionHTML
    })
    .catch((error) => {
      console.error('Error fetching products:', error)
    })
}
