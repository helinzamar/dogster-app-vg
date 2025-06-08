import { getRandomDogImage } from './utils/api.js';
import { renderDogImage } from './components/DogImage.js';
import Swal from 'sweetalert2';

const button = document.getElementById('random-dog-btn');
const container = document.getElementById('dog-container');
const favoritesContainer = document.getElementById('favorites-container');

// Ladda favoriter från localStorage vid start
function loadFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favoritesContainer.innerHTML = '<h2>Dina favoriter</h2>';
  favorites.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Favorit-hund';
    img.classList.add('favorite-image');
    favoritesContainer.appendChild(img);
  });
}

// Lägg till bild i localStorage-favoriter
function saveFavorite(url) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!favorites.includes(url)) {
    favorites.push(url);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    loadFavorites();
    Swal.fire('Sparad!', 'Du har sparat en favorit 🐶', 'success');
  } else {
    Swal.fire('Redan sparad', 'Den här hunden finns redan i dina favoriter', 'info');
  }
}

button.addEventListener('click', async () => {
  try {
    const dogUrl = await getRandomDogImage();
    container.innerHTML = '';
    
    // Bild
    const dogImage = renderDogImage(dogUrl);
    container.appendChild(dogImage);

    // Favorit-knapp
    const favButton = document.createElement('button');
    favButton.textContent = '❤️ Spara som favorit';
    favButton.classList.add('fav-btn');
    favButton.addEventListener('click', () => saveFavorite(dogUrl));
    container.appendChild(favButton);
  } catch (error) {
    Swal.fire('Oops!', 'Kunde inte hämta hund. Försök igen.', 'error');
  }
});

loadFavorites(); // Ladda favoriter direkt
