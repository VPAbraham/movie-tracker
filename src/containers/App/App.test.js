import React from 'react';
import { shallow } from 'enzyme';
import { App }from './App';
import { fetchMovies } from '../../apiCalls/apiCalls';

jest.mock('../../apiCalls/apiCalls')

describe('App', () => {
  beforeEach(() => {
    fetchMovies.mockImplementation(() => {
      return Promise.resolve([{
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
      }]);
    });
  })
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should retrieve movies after mounting', () => {
    shallow(<App/>);
    expect(fetchMovies).toHaveBeenCalled();
  })
    
})