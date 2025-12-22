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
const groupsFilter = document.getElementById('sortBreeds');

//Adding event listener
sortBreeds.addEventListener('change' , (event) => {
  const filter = event.target.value;

  const sortedBreeds = breeds.sort((a,b) => {
    if ( filter === "AtoZ") {
      console.log("it worked");
      return a.name.localeCompare(b.name);
    }
    else if (filter === "ZtoA") {
      console.log("ZtoA");
      return b.name.localeCompare(a.name);
    }
    else if (filter === "BreedGroup") {
      console.log("breed group");
      return a.breed_group.localeCompare(b.breed_group)
    }
    else if (filter === "LifeSpan") {
      console.log("life span");
      //filter for weight here
    }
  })

  dogBreedContainer.innerHTML = sortedBreeds
    .map(breed => dogHTML(breed))
    .join("");
});



//         //     <option value="AtoZ">ALL A to Z</option>
//         //     <option value="ZtoA">ALL Z to A</option>
//         //     <option value="BreedGroup">Breed Group</option>
//         //     <option value="Size">Size</option>
//         // </select>

















// // const API_URL = "https://api.thedogapi.com/v1/breeds";
// // const API_KEY = "live_c1LVRF88KDghAq5ImtSiz23of0wDNtl17oANVIuJIdwH3NFG5AZaAAv9eZNIJ9WQ";

// // const dogBreedList = document.querySelector('.dogbreed-list')

// // // Fetch Data
// // async function fetchData() {
// //     const dogBreedsData = await fetch(API_URL, {
// //        method: "GET", 
// //        headers: {
// //          "Content-Type": "application/json",
// //          "Authorization": `Bearer ${API_KEY}` 
// //             }
// //         });

// // // Parse JSON data
// //     const dogBreedList = await dogBreedsData.json();
// //     console.log("Fetched Data:", dogBreedList);

// //     //Accessing Properties
// //     dogBreedList.forEach(breed => {
// // //        console.log(`Breed ID: ${breed.id}, Name: ${breed.name}`);

// // function dogHTML(breeds) {
// //  return `
// //        <div class="user-card__container">
// //        <h3>${breed.name}</h4>
// //          <p><b>Origin:</b> ${breed.origin}</p>
// //          <p><b>Bred For:</b> ${breed.bred_for}</p>
// //          <p><b>Temperament:</b> ${breed.temperament}"</p>
// //       </div>
// //     </div>`;
// // }
// //  dogBreedList.innerHTML = dogBreedList.map((breed) => dogHTML(breed)).join("");

// //     }); 
// // }


// // fetchData();
