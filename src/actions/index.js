export const saveMovies = (movies) => ({
  type: "SAVE_MOVIES",
  movies
})

export const saveUser = (name, email, password) => ({
  type: "SAVE_USER",
  name,
  email,
  password
})

export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  user
})

export const saveFavorites = (favorites) => ({
  type: "SAVE_FAVORITES",
  favorites
})

export const removeFromFavorites = (id) => ({
  type: "REMOVE_FROM_FAVORITES",
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