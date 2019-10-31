const baseUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=';
const apiKey = '28964418fdafb10fc97bbbad131d01c3&language=en-US&page=1';

export const fetchMovies = async () => {
  const response = await fetch(`${baseUrl}${apiKey}`);
  const data = await response.json();
  const cleanData = data.results.map(movie => {
    const { id, title, poster_path, release_date, vote_average, overview } = movie
    movie = {
      movie_id: id,
      title: title,
      poster_path: poster_path,
      release_date: release_date,
      vote_average: vote_average,
      overview: overview
    }
    return movie
  })
  return cleanData;
}

export const postNewUser = async (newUser) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  };

  let response = await fetch('http://localhost:3001/api/v1/users', options);

  return response;
}


export const loginUser = async (userInfo) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  };

  let response = await fetch('http://localhost:3001/api/v1/login', options);

  return response;
}

export const getFavorites = async (userId) => {
  let url = `http://localhost:3001/api/v1/users/${userId}/moviefavorites`;
  let response = await fetch(url);
  return response.json();
}

export const postFavorite = async (userId, movie) => {
  let url = `http://localhost:3001/api/v1/users/${userId}/moviefavorites`;
  let options = {
    method: 'POST',
    body: JSON.stringify(movie),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let response = await fetch(url, options);
  console.log(response)

  if (!response.ok) {
    console.error('Could not add movie to favorites.')
  }
}

export const deleteFavorite = async (userId, movieId) => {
  let url = `http://localhost:3001/api/v1/users/${userId}/moviefavorites/${movieId}`
  let options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let response = await fetch(url, options);
  console.log(response)
  if (!response.ok) {
      console.error('Could not delete movie from favorites.')
  }
}