import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import { saveMovies } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../../apiCalls.js';

class App extends Component {


  async componentDidMount() {
    const { movies } = this.props; 
    console.log(movies)
    try {
      const movieData = await fetchMovies();
      await this.props.saveMovies(movieData)
    }

    catch {
    }
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => <MoviesContainer /> } />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    saveMovies,
  }, dispatch)
)

const mapStateToProps = ({ movies }) => ({
  movies,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
