export const users = (state=[], action) => {
  switch (action.type) {
    case 'SAVE_USER':
      return [...state, {name: action.name, email: action.email, password: action.password }];
    default:
        return state;
  }
}