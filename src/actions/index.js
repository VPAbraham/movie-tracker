
export const saveMovies = (movies) => ({
  type: "SAVE_MOVIES",
  movies
})

export const saveUser = (name, email, password, id) => ({
  type: "SAVE_USER",
  name,
  email,
  password,
  id
})

export const saveFavorites = (id) => ({
  type: "SAVE_FAVORITES",
  id
})

export const logInUser = (loginStatus) => ({
  type: "LOG_IN_USER",
  loginStatus
})