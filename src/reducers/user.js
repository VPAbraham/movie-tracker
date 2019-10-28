export const user = (state=[], action) => {
  switch (action.type) {
    case 'SAVE_USER':
      return [{ email: action.email, password: action.password }];
      default:
        return state;
  }
}