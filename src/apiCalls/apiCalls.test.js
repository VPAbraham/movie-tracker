import { fetchMovies, postNewUser, loginUser, getFavorites, postFavorite, deleteFavorite} from './apiCalls';

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
      });
    });
  });

  it('should call fetch with with the correct url', () => { //HAPPY
    fetchMovies();

    expect(window.fetch).toHaveBeenCalledWith('https://api.themoviedb.org/3/movie/now_playing?api_key=28964418fdafb10fc97bbbad131d01c3&language=en-US&page=1')
  });
  it('should return an array of movies (HAPPY)', () => {
    fetchMovies()
    .then(results => expect(results).toEqual(mockMovies))
  });
  it('should return an error', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(fetchMovies()).rejects.toEqual(Error('Error fetching movies'))
  });
  it('should return an error if promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    });
    expect(fetchMovies()).rejects.toEqual(Error('fetch failed'))
  });
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
      });
    });
  });

  it('should call fetch with the correct url', () => {
    postNewUser(mockNewUser);

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/users', options)
  });
  it('should fetch with the correct arguments', () => {
    const expected = ['http://localhost:3001/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mockNewUser)
    }]
    postNewUser(mockNewUser);

    expect(window.fetch).toHaveBeenCalledWith(...expected)
  });
  it('should return an error if the response isn\'t ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(postNewUser(mockNewUser)).rejects.toEqual(Error('There was a problem'))
  });
  it('should return an error if promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    });
    expect(postNewUser()).rejects.toEqual(Error('fetch failed'))
  });
})

describe('loginUser', () => {
  let mockLoginUser = {
    email: 'victor@gmail.com',
    password: 'victor123'
  }
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(mockLoginUser)
  };
  beforeEach(()=> {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockLoginUser)
      })
    })
  });
  it('should call fetch with the correct url', () => {
    loginUser(mockLoginUser)

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/login', options)
  });
  it('should fetch with the correct arguments passed through', () => {
    const expected = ['http://localhost:3001/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mockLoginUser)
    }]
    loginUser(mockLoginUser);

    expect(window.fetch).toHaveBeenCalledWith(...expected)
  });
  it('should return an error if the response isn\'t ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(loginUser(mockLoginUser)).rejects.toEqual(Error("* the password does not match! *"))
  });
  it('should return an error if promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    });
    expect(loginUser()).rejects.toEqual(Error('fetch failed'))
  })
})

describe('getFavorites', () => {
  let mockFavorites = [
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
        json: () => Promise.resolve(mockFavorites)
      });
    });
  });
  it('should call fetch with the correct url', () => {
    let userId;
    getFavorites();
    expect(window.fetch).toHaveBeenCalledWith(`http://localhost:3001/api/v1/users/${userId}/moviefavorites`)
  });
  it('should return an array of favorites', () => {
    getFavorites()
    .then(results => expect(results).toEqual(mockFavorites))
  });
  it('should return an error', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(getFavorites()).rejects.toEqual(Error('Error fetching favorites'))
  });
  it('should return an error if promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetcj failed'))
    });
    expect(getFavorites()).rejects.toEqual(Error('fetch failed'))
  })
});

describe('postFavorite', () => {
  let userId = 5
  
  let mockMovie = 
    {
      title: "Joker",
      id: 4,
      release_date: "2019-10-18"
    }

  const options = {
    method: 'POST',
    body: JSON.stringify(mockMovie),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMovie)
      })
    })
  })
  it('should call fetch with the correct url', () => {
    postFavorite(userId, mockMovie);
    
    expect(window.fetch).toHaveBeenCalledWith(`http://localhost:3001/api/v1/users/${userId}/moviefavorites`, options)
  })
  it('should fetch with the correct arguments', () => {
    // userId = 5;
    const expected = [`http://localhost:3001/api/v1/users/${userId}/moviefavorites`, {
      method: 'POST',
      body: JSON.stringify(mockMovie),
      headers: {
        'Content-Type': 'application/json'
      }
    }]
    postFavorite(userId, mockMovie);

    expect(window.fetch).toHaveBeenCalledWith(...expected)
  })
  it('should return an error if the resonponse isn\'t ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(postFavorite(userId, mockMovie)).rejects.toEqual(Error('Could ot add movie to favorite'))
  });
  it('should return an error if promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    });
    expect(postFavorite()).rejects.toEqual(Error('fetch failed'))
  })
})

describe('deleteFavorite', () => {
  let mockFavorites = [
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
        json: () => Promise.resolve(mockFavorites)
      })
    })
  })

  it('should call fetch with the correct url and options', () => {
    const userId = 2;
    const movieId = 42235;
    const url = `http://localhost:3001/api/v1/users/${userId}/moviefavorites/${movieId}`;
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    deleteFavorite(userId, movieId);
    expect(window.fetch).toHaveBeenCalledWith(url, options)
  });
  it('should return an array of favorites', () => {
    expect(deleteFavorite(2, 43434)).resolves.toEqual(mockFavorites)
  });
  it('should return an error if the response isn\'t ok', () => {
    return Promise.resolve({
      ok: false
    })
  });
  expect(deleteFavorite(2, 43434)).rejects.toEqual(Error('There was a problem removing this favorited movie'))
});
it('should return an error if the server is down', () => {
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.reject(Error('fetch failed.'))
  })
  expect(deleteFavorite(2, 43434)).rejects.toEqual(Error('fetfh failed'))
})

