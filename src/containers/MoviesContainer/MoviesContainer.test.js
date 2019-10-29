import { MoviesContainer }from './MoviesContainer';
import React from 'react';
import { shallow } from 'enzyme';

describe('MoviesContainer', () => {
  let wrapper;
  beforeEach(() => {
    let mockMovies = [
      {
        title: "Joker",
        id: 4,
        release_date: "2019-10-18"
      },
      {
        title: "Maleficent: Mistress of Evil",
        id: 56,
        release_date: "2019-10-04"
      },
      {
        title: "Zombieland: Double Tap",
        id: 70,
        release_date: "2019-10-18"
      }
    ]
    let mockFavorites = [{
      title: "Maleficent: Mistress of Evil",
      id: 56,
      release_date: "2019-10-04"
    },
    {
      title: "Zombieland: Double Tap",
      id: 70,
      release_date: "2019-10-18"
    }]
    wrapper = shallow(
      <MoviesContainer
      toggleFavorites={jest.fn()}
      movies={mockMovies}
      favorites={mockFavorites}
      />
    )
  })

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  })
})