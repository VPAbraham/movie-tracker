
export const saveMovies = (movies) => ({
  type: "SAVE_MOVIES",
  movies
})

export const saveUser = (name, email, password, id, loggedIn) => ({
  type: "SAVE_USER",
  name,
  email,
  password,
  id,
  loggedIn
})

export const saveFavorites = (id) => ({
  type: "SAVE_FAVORITES",
  id
})

export const toggleLogin = (id) => ({
  type: "TOGGLE_LOGIN",
  id
})