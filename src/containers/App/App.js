import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import MoviesContainer from '../MoviesContainer/MoviesContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: []
    }
  }

  componentDidMount = () => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=28964418fdafb10fc97bbbad131d01c3&language=en-US&page=1')
    .then(r => r.json())
    .then(data => this.setState({ movieData: data }))
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => <MoviesContainer movies={this.state.movieData} /> } />
      </div>
    )
  }
}

export default App;
