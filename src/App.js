import React, { Component } from 'react';
import './App.css';

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
        <p> -- APP -- </p>
      </div>
    )
  }
}

export default App;
