export function renderDogImage(url) {
  const img = document.createElement('img');
  img.src = url;
  img.alt = 'Random Dog';
  return img;
}
