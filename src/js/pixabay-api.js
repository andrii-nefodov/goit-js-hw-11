import axios from "axios";

const API_KEY = "54691117-5b4d92f66c6b88b25131877c0";
const URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    };
    return axios.get(URL, { params })
    .then(response => response.data);
}