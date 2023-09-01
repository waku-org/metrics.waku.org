// utils/dockerhub.js
import axios from 'axios';

export async function getImageData() {
  try {
    const response = await axios.get(`https://hub.docker.com/v2/repositories/statusteam/nim-waku`);
    console.log(response.data);
    const imageData = response.data;
    return imageData;
  } catch (error) {
    throw new Error('Failed to fetch Docker Hub image data');
  }
}
