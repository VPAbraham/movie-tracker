
export const saveMovies = (movies) => ({
  type: "SAVE_MOVIES",
  movies
})

export const saveUser = (email, password) => ({
  type: "SAVE_USER",
  email,
  password
})

export const saveFavorites = (id) => ({
  type: "SAVE_FAVORITES",
  id
})

export const logIn = () => ({
  type: "LOGIN",
  loggedIn: true
})

export const logOut = () => ({
  type: "LOGOUT",
  loggedIn: false
})