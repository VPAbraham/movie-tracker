export const favorites = (state=[], action) => {
  switch (action.type) {
    case 'SAVE_FAVORITES':
      return action.id
      default:
        return state
  }
}