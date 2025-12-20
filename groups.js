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
};

fetchData();

console.log(breeds);

//FILTER BREEDS BY BREED GROUP



// UPDATE FOLLOWING CODE TO WORK AS WELL:

// function dogHTML(breed) {
//   return `
//   <div class="user">
//     <div class="user-card">
//     <div class="user-card__container">
//       <h3>${breed.name}</h3>
//       <p><b>Origin:</b> ${breed.origin || "Unknown"}</p>
//       <p><b>Breed Group:</b> ${breed.breed_group || "Unknown"}</p>
//       <p><b>Bred For:</b> ${breed.bred_for || "Unknown"}</p>
//       <p><b>Temperament:</b> ${breed.temperament || "Unknown"}</p>
//     </div>
//     </div>
//     </div>
//   `;
// } 



