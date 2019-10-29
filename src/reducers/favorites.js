export const favorites = (state=[], action) => {
  switch (action.type) {
    case 'SAVE_FAVORITES':
      return action.favorites.favorites;
      default:
        return state
  }
}