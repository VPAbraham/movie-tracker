import * as actions from '../actions';

describe('actions', () => {
  it('should have a type of SAVE_MOVIES', () => {
    //Setup
    const movies = [
      { id: 4, title: "Joker", popularity: 475.2 },
      { id: 823, title: "PeeWee's Playhouse", popularity: 100005 },
      { id: 1, title: "Long Shot", popularity: 5 }
    ]
    const expectedAction = {
      type: 'SAVE_MOVIES',
      movies: movies
    }

    //Execution
    const result = actions.saveMovies(movies)

    //Expectation
    expect(result).toEqual(expectedAction);
  });
});