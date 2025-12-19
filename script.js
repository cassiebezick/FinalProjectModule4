
const API_URL = "https://api.thedogapi.com/v1/breeds";
const API_KEY = "live_c1LVRF88KDghAq5ImtSiz23of0wDNtl17oANVIuJIdwH3NFG5AZaAAv9eZNIJ9WQ";


async function fetchData() {
    try {
        const response = await fetch(API_URL, {
            method: "GET", // or "POST" if needed
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}` // Common pattern for API keys
                // Some APIs use: "x-api-key": API_KEY
            }
        });

        // Check if the response is OK (status 200–299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse JSON data
        const data = await response.json();
        console.log("Fetched Data:", data);

    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

// Call the function
fetchData();