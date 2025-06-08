export function renderDogImage(url) {
  const container = document.createElement('div');
  container.classList.add('dog-card');

  const img = document.createElement('img');
  img.src = url;
  img.alt = 'Random Dog';

  const breed = document.createElement('p');
  breed.classList.add('breed-text');

  const match = url.match(/breeds\/([^/]+)/);
  if (match && match[1]) {
    const rawBreed = match[1];
    const formatted = rawBreed
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    breed.textContent = `Ras: ${formatted}`;
  } else {
    breed.textContent = 'Ras: Okänd';
  }

  container.appendChild(img);
  container.appendChild(breed);
  return container;
}
