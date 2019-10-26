export const user = (state={}, action) => {
  switch (action.type) {
    case 'SAVE_USER':
      return {name: action.name, email: action.email, password: action.password, id: action.id};

      default:
        return state;
  }
}