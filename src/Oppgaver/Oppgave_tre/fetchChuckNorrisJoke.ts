type ChuckNorrisJoke = {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
};

// Function to fetch Chuck Norris joke
export async function fetchRandomChuckNorrisJoke(): Promise<string> {
  // API endpoint URL
  const apiUrl = "https://api.chucknorris.io/jokes/random";

  // Make a GET request using fetch
  const joke = fetch(apiUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data: ChuckNorrisJoke) => {
      // Handle the response data
      return data.value;
    })
    .catch((error) => {
      console.error("Error:", error);
      return "Error";
    });
  return joke;
}
