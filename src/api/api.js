import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

// const API_KEY_UNSPLASH = "I5dgIyFKdBc94jG-YsyhAsKGWHJ-A6OUlUiEmw1X79Q";
const YOUR_ACCESS_KEY = "I5dgIyFKdBc94jG-YsyhAsKGWHJ-A6OUlUiEmw1X79Q";

export const fetchImageData = async (queryName, pageNumber) => {
  const response = await axios.get("/search/photos", {
    headers: {
      Authorization: `Client-ID ${YOUR_ACCESS_KEY}`,
    },
    params: {
      query: queryName,
      page: pageNumber,
      per_page: 10,
      color: "black_and_white",
      orientation: "landscape",
    },
  });

  return response.data;
};
