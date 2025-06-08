import axios from 'axios';

export async function getRandomDogImage() {
  const response = await axios.get('https://dog.ceo/api/breeds/image/random');
  return response.data.message;
}
