export function showMenu() {
    const main = document.querySelector('#content');
    const code = `<main>
  <h1>Our Menu</h1>

  <h2>Starters</h2>
  <p><strong>Crisp Garlic Bread</strong> - Toasted artisan bread with fresh garlic butter and herbs.</p>
  <p><strong>Soup of the Day</strong> - Made fresh daily with seasonal vegetables.</p>

  <h2>Main Courses</h2>
  <p><strong>Grilled Ribeye Steak</strong> - Served with garlic mashed potatoes and grilled asparagus.</p>
  <p><strong>Pan-Seared Salmon</strong> - Accompanied by wild rice and a lemon dill cream sauce.</p>
  <p><strong>Wild Mushroom Pasta</strong> - Handcrafted fettuccine tossed in a rich truffle cream sauce.</p>

  <h2>Desserts</h2>
  <p><strong>Classic Tiramisu</strong> - Espresso-soaked ladyfingers with rich mascarpone cream.</p>
  <p><strong>Warm Chocolate Lava Cake</strong> - Served with a scoop of vanilla bean ice cream.</p>
</main>`
    main.innerHTML = ''
    main.insertAdjacentHTML('beforeend', code)
}