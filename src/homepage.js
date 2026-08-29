import ImageUrl from './homepage.jfif';

export function showHomepage() {
    const main = document.querySelector('#content');

    const homepageCode = `<main>
  <h1>Welcome to The Golden Fork</h1>

  <img src="${ImageUrl}" alt="Delicious restaurant food dish">


  <p>
    At The Golden Fork, we believe that great food brings people together. 
    Our passion is crafting unforgettable dining experiences using the freshest local 
    ingredients, traditional recipes, and a touch of modern culinary flair. 
    Whether you are celebrating a special occasion or simply craving a delicious meal, 
    our warm ambiance and attentive service make every visit feel like coming home.
  </p>

  <p>
    From our sizzling farm-to-table entrees to our handcrafted desserts, 
    every dish is prepared with love and care. Come join us and discover 
    why our guests call us the heart of the neighborhood.
  </p>
</main>`
    main.innerHTML = ''
    main.insertAdjacentHTML('beforeend', homepageCode)
}