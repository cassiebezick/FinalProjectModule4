const API_URL = "https://api.thedogapi.com/v1/breeds";
const API_KEY = "live_c1LVRF88KDghAq5ImtSiz23of0wDNtl17oANVIuJIdwH3NFG5AZaAAv9eZNIJ9WQ";

const dogBreedContainer = document.querySelector(".breedResults");

let breeds = [];

async function fetchData() {
  let response = await fetch(API_URL, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    }
  });

  breeds = await response.json();

};

fetchData();

function dogHTML(breed) {
  return `
  <div class="user">
    <div class="user-card">
    <div class="user-card__container">
      <h3>${breed.name}</h3>
      <p><b>Origin:</b> ${breed.origin || "Unknown"}</p>
      <p><b>Life Span:</b> ${breed.life_span || "Unknown"}</p>
      <p><b>Breed Group:</b> ${breed.breed_group || "Unknown"}</p>
      <p><b>Bred For:</b> ${breed.bred_for || "Unknown"}</p>
      <p><b>Temperament:</b> ${breed.temperament || "Unknown"}</p>
    </div>
    </div>
    </div>
  `;
} 

//select the select filter element in HTML
const searchInput = document.getElementById('searchbar');

//Adding event listener
searchInput.addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();
  
  const filteredBreeds = breeds.filter(breed =>
    breed.name.toLowerCase().includes(searchValue)
  );

dogBreedContainer.innerHTML = filteredBreeds
    .map(breed => dogHTML(breed))
    .join("");
});