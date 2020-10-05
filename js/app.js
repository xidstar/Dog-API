const dropdownMenu = document.querySelector('.dropdown-menu');
const clear = document.querySelector('.remove');
const imageList = document.querySelector('.dog-img');
const dogImage = document.createElement('img');

function dropdownBreedList(breeds) {

  breeds.forEach(breed => {
    const dropdownItem = document.createElement('a');
    dropdownItem.className = 'dropdown-item';
    dropdownItem.id = breed;
    dropdownItem.href = '#';
    dropdownItem.innerText = breed;
    dropdownMenu.appendChild(dropdownItem);

    // console.log(breed);

  });
}

const getDogUrl = url => {
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      dogImage.src = data.message;
    });
};


dropdownMenu.addEventListener('click', function(e) {
  imageList.innerHTML = '';
  const dropdownItem =  e.target;  
  const breedID = dropdownItem.id;
  const url = `https://dog.ceo/api/breed/${breedID}/images/random`;
  const breedTitle = document.querySelector('.breed-name');
  breedTitle.innerHTML = breedID;
  dogImage.src= url;
  imageList.appendChild(dogImage);

  getDogUrl(url);
})

function breedImages(breedID) {
  dogImage.src=`${breedID}` ;
  imageList.appendChild(dogImage);
};

clear.addEventListener('click', function() {
  const breedTitle = document.querySelector('.breed-name');
  breedTitle.innerHTML = '';
  imageList.innerHTML = '';
})

