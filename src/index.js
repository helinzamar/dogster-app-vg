import { getRandomDogImage } from './utils/api.js';
import { renderDogImage } from './components/DogImage.js';
import Swal from 'sweetalert2';

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('random-dog-btn');
  const container = document.getElementById('dog-container');

  button.addEventListener('click', async () => {
    try {
      const dogUrl = await getRandomDogImage();
      container.innerHTML = '';
      container.appendChild(renderDogImage(dogUrl));
      Swal.fire('Voila!', 'Här är en söt hund 🐕', 'success');
    } catch (error) {
      Swal.fire('Oops!', 'Kunde inte hämta hund. Försök igen.', 'error');
    }
  });
});
