const baseUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=';
const apiKey = '28964418fdafb10fc97bbbad131d01c3&language=en-US&page=1';

export const fetchMovies = async () => {
  const response = await fetch(`${baseUrl}${apiKey}`);
  const data = await response.json();
  return data.results
}

export const postNewUser = async (newUser) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  };
  return await fetch('http://localhost:3001/api/v1/users', options);
}

