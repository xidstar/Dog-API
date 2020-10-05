const API_URL = "https://dog.ceo/api/breeds/list/all";
let IMG_URL = "https://dog.ceo/api/breeds/image/random";
  
async function getBreed() {
  const response = await fetch(API_URL);
  const json = await response.json();
  const breeds = Object.keys(json.message);
  dropdownBreedList(breeds);
}

async function getBreedImages() {
  const response = await fetch(IMG_URL);
  const json = await response.json();
  const images = json.message;
  breedImages(images);

  // console.log(images);
}

getBreed();
getBreedImages();




