const baseUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=';
const apiKey = '28964418fdafb10fc97bbbad131d01c3&language=en-US&page=1';

export const fetchMovies = async () => {
  const response = await fetch(`${baseUrl}${apiKey}`);
  const data = await response.json();
  return data.results
}

export const createNewUser = async (newUserInfo) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUserInfo)
  };
  
  try {
    const response = await fetch('http://localhost:3001/api/v1/users', options);
      if(!response.ok) {
        throw new Error("Sorry. Unable to create new user");
      }
      const user = await response.json();
      console.log('USER FROM API CALLS', user)
      return user;
  } catch(error) {
    throw new Error(error.message)
  }
}

export const loginUser = async (userInfo) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  };
  
  try {
    const response = await fetch('http://localhost:3001/api/v1/login', options);
      if(!response.ok) {
        throw new Error("Sorry. Unable to log in user.");
      }
      const user = await response.json();
      console.log('LOGIN FROM API CALLS', user)
      return user;
  } catch(error) {
    throw new Error(error.message)
  }
}

//need a method for login users