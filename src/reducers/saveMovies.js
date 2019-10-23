export const saveMovies = (state = [], action) => {
  switch(action.type)  {
    case 'SAVE_MOVIES':
      return (action.movies)
    default:
      return state  
  }
}