export const user = (state=[], action) => {
  switch (action.type) {
    case 'SAVE_USER':
      return [...state, { email: action.email, password: action.password }];
      default:
        return state;
  }
}