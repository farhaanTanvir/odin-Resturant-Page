export function showAbout() {
    const main = document.querySelector('#content');

    const code = `<main>
  <h1>About The Golden Fork</h1>

  <p>
    Founded in 2015, The Golden Fork began as a small family-owned bistro with a simple mission: to serve honest, flavorful food made from high-quality local ingredients. Over the years, our cozy spot has grown into a beloved neighborhood gathering place.
  </p>

  <p>
    Head Chef Maria Delgado brings over fifteen years of culinary experience to the kitchen, drawing inspiration from classic Mediterranean and American cooking traditions. Every meal we serve reflects our commitment to excellence, sustainability, and warm hospitality.
  </p>

  <h2>Our Values</h2>
  <p><strong>Fresh Ingredients:</strong> We partner with local farms to source peak-season produce and high-quality meats daily.</p>
  <p><strong>Community First:</strong> We believe a restaurant should be the heart of its neighborhood, offering a welcoming atmosphere for all.</p>
</main>`
    main.innerHTML = ''
    main.insertAdjacentHTML('beforeend', code)
}