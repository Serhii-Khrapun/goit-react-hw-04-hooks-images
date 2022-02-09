import axios from 'axios';

const fethcImages = (searchValue, pageNumber) => {
  return axios.get(
    `https://pixabay.com/api/?q=${searchValue}&page=${pageNumber}&key=24443838-ead6510e85d5ce0a082bd02f6&image_type=photo&orientation=horizontal&per_page=12`,
  );
};
const API = { fethcImages };
export default API;
