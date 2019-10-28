export const isLoggedIn = (state = false, action) => {
  switch(action.type) {
    case 'LOGIN':
      return action.loggedIn
    case 'LOGOUT':
        return action.loggedIn
    default:
      return state
  }
}