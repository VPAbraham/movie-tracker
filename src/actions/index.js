
export const saveMovies = (movies) => ({
  type: "SAVE_MOVIES",
  movies
})

export const saveUser = (name, email, password) => ({
  type: "SAVE_USER",
  name,
  email,
  password,
  id: 1,
  loggedIn: false
})

export const saveFavorites = (id) => ({
  type: "SAVE_FAVORITES",
  id
})

export const toggleLogin = (id) => ({
  type: "TOGGLE_LOGIN",
  id
})