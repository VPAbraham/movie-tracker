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