const API_URL = "https://api.thedogapi.com/v1/breeds";
const API_KEY = "live_c1LVRF88KDghAq5ImtSiz23of0wDNtl17oANVIuJIdwH3NFG5AZaAAv9eZNIJ9WQ";

const dogBreedContainer = document.querySelector(".dogbreed-list");

let breeds = [];

async function fetchData() {
  let response = await fetch(API_URL, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    }
  });
  breeds = await response.json();

  dogBreedContainer.innerHTML = breeds.map(breed => dogHTML(breed))
    .join("");

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
const sortBreeds = document.getElementById('sortBreeds');

//Adding event listener
sortBreeds.addEventListener('change' , (event) => {
  const filter = event.target.value;

const getFirstNumber = (str) => {
    const match = String(str).match(/\d+/);
    return match ? Number(match[0]) : 0;
};

  const sortedBreeds = breeds.sort((a,b) => {
    if ( filter === "AtoZ") {
      return a.name.localeCompare(b.name);
    }
    else if (filter === "ZtoA") {
      return b.name.localeCompare(a.name);
    }
    else if (filter === "BreedGroup") {
      return a.breed_group.localeCompare(b.breed_group)
    }
    else if (filter === "Size") {
      return getFirstNumber(a.weight.imperial) - getFirstNumber(b.weight.imperial);
    }
    else if (filter === "LifeSpan") {
      return getFirstNumber(a.life_span) - getFirstNumber(b.life_span);
    }
    
  })

  dogBreedContainer.innerHTML = sortedBreeds
    .map(breed => dogHTML(breed))
    .join("");
});














