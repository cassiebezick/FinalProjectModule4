const API_URL = "https://api.thedogapi.com/v1/breeds";
const API_KEY = "live_c1LVRF88KDghAq5ImtSiz23of0wDNtl17oANVIuJIdwH3NFG5AZaAAv9eZNIJ9WQ";

const dogBreedContainer = document.querySelector(".dogbreed-list");

async function fetchData() {
  const response = await fetch(API_URL, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    }
  });

  const dogBreeds = await response.json();
 // console.log(dogBreeds); // always inspect the data

  dogBreedContainer.innerHTML = dogBreeds
    .map(breed => dogHTML(breed))
    .join("");
}

function dogHTML(breed) {
  return `
  <div class="user">
    <div class="user-card">
    <div class="user-card__container">
      <h3>${breed.name}</h3>
      <p><b>Origin:</b> ${breed.origin || "Unknown"}</p>
      <p><b>Breed Group:</b> ${breed.breed_group || "Unknown"}</p>
      <p><b>Bred For:</b> ${breed.bred_for || "Unknown"}</p>
      <p><b>Temperament:</b> ${breed.temperament || "Unknown"}</p>
    </div>
    </div>
    </div>
  `;
  
}

fetchData();

async function renderBreeds(filter){
    
}
function filterBreeds(event){

}














// const API_URL = "https://api.thedogapi.com/v1/breeds";
// const API_KEY = "live_c1LVRF88KDghAq5ImtSiz23of0wDNtl17oANVIuJIdwH3NFG5AZaAAv9eZNIJ9WQ";

// const dogBreedList = document.querySelector('.dogbreed-list')

// // Fetch Data
// async function fetchData() {
//     const dogBreedsData = await fetch(API_URL, {
//        method: "GET", 
//        headers: {
//          "Content-Type": "application/json",
//          "Authorization": `Bearer ${API_KEY}` 
//             }
//         });

// // Parse JSON data
//     const dogBreedList = await dogBreedsData.json();
//     console.log("Fetched Data:", dogBreedList);

//     //Accessing Properties
//     dogBreedList.forEach(breed => {
// //        console.log(`Breed ID: ${breed.id}, Name: ${breed.name}`);

// function dogHTML(breeds) {
//  return `
//        <div class="user-card__container">
//        <h3>${breed.name}</h4>
//          <p><b>Origin:</b> ${breed.origin}</p>
//          <p><b>Bred For:</b> ${breed.bred_for}</p>
//          <p><b>Temperament:</b> ${breed.temperament}"</p>
//       </div>
//     </div>`;
// }
//  dogBreedList.innerHTML = dogBreedList.map((breed) => dogHTML(breed)).join("");

//     }); 
// }


// fetchData();
