import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps }from './App';
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

describe('mapStateToProps In App', () => {
  it('should return an object with the user\'s info', () => {
    //SETUP
    const mockState = {
      currentUser: {name: 'Victor', email: 'Victor@gmail.com', password: 'Victor123'},
      setCurrentUser: 'SET_CURRENT_USER'
    }
    const expected = {
      currentUser: {name: 'Victor', email: 'Victor@gmail.com', password: 'Victor123'}
    }

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  });
  it('should return an array with all the favorited movies', () => {
    const mockState = {
      favorites: [{
        title: "Maleficent: Mistress of Evil",
        id: 56,
        release_date: "2019-10-04"
      },
      {
        title: "Zombieland: Double Tap",
        id: 70,
        release_date: "2019-10-18"
      }],
      saveFavorites: 'SAVE_FAVORITES'
    }
    const expected = {
      favorites: [{
        title: "Maleficent: Mistress of Evil",
        id: 56,
        release_date: "2019-10-04"
      },
      {
        title: "Zombieland: Double Tap",
        id: 70,
        release_date: "2019-10-18"
      }]
    }
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  });
  it('should show the login status of the user', () => {
    const mockState = {
      isLoggedIn: true,
      login: 'LOGIN'

    }
    const expected = {
      isLoggedIn: true
    }

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  });
  it('should return an array of movies', () => {
    const mockState = {
      movies: [{
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
      }],
      saveMovies: 'SAVE_MOVIES'
    }

    const expected = {
      movies: [{
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
      }]
    }
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  })
})

describe('mapDispathToProps in App', () => {
  
})