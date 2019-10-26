export const user = (state=[], action) => {
  switch (action.type) {
    case 'SAVE_USER':
      return [...state, {name: action.name, email: action.email, password: action.password, id: action.id, loggedIn: action.loggedIn}];
    case 'TOGGLE_LOGIN':
      return state.map(user => {
        return user.id === action.id ? {...user, loggedIn: !user.loggedIn} : user
      })
      default:
        return state;
  }
}