export const currentUser = (state=[], action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { email: action.email, password: action.password };
    default:
        return state;
  }
}