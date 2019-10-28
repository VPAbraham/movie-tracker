export const isLoggedIn = (state = false, action) => {
  switch(action.type) {
    case 'LOG_IN':
      return action.isLoggedIn
    case 'LOG_OUT':
        return action.isLoggedIn
    default:
      return state
  }
}