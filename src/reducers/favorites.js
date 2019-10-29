export const favorites = (state=[], action) => {
  switch (action.type) {
    case 'SAVE_FAVORITES':
      return action.favorites.favorites;
    case 'REMOVE_FROM_FAVORITES':
      default:
        return state
  }
}