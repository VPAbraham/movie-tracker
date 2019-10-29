import { fetchMovies, postNewUser, loginUser } from './apiCalls';

//fetchMovies()


describe('fetchMovies', () => {
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

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMovies)
      })
    })
  })

  it('should call fetch with with the correct url', () => {
    fetchMovies();

    expect(window.fetch).toHaveBeenCalledWith('https://api.themoviedb.org/3/movie/now_playing?api_key=28964418fdafb10fc97bbbad131d01c3&language=en-US&page=1')
  })
  it('should return an array of movies (HAPPY)', () => {
    // fetchMovies()
    // .then(results => expect(results).toEqual(mockMovies))
  })
})

//postNewUser


describe('postNewUser', () => {
  let mockNewUser = {
    name: 'Randy',
    email: 'randy@randy.randy',
    password: 'metallica'
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(mockNewUser)
  };

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockNewUser)
      })
    })
  })

  it('should call fetch with the correct url', () => {
    postNewUser(mockNewUser);

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/users', options)
  })
})

//loginUser

describe('loginUser', () => {

})