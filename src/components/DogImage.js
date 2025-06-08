export function renderDogImage(url) {
  const container = document.createElement('div');

  const img = document.createElement('img');
  img.src = url;
  img.alt = 'Random Dog';

  const breed = document.createElement('p');
  const match = url.match(/breeds\/([^/]+)/);
  breed.textContent = match
    ? `Ras: ${match[1].replace('-', ' ')}`
    : 'Ras: Okänd';

  container.appendChild(img);
  container.appendChild(breed);

  return container;
}
