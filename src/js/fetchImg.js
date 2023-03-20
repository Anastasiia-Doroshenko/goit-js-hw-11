import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '34573607-8badcb9d2360b68a2b2ba572a';

export async function fatchImg(query, page, perPage) {
  try {
    const respons = await axios.get(
      `${BASE_URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );

    return respons;
  } catch (error) {
    console.log(error);
  }
}
