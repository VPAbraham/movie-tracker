import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.scss';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import NavBar from '../../components/NavBar/NavBar';
import LoginForm from '../../components/LoginForm/LoginForm';
import { saveMovies } from '../../actions';
import { fetchMovies } from '../../apiCalls.js';

class App extends Component {
  async componentDidMount() {
    try {
      const movieData = await fetchMovies();
      await this.props.saveMovies(movieData)
    }
    catch {   }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/' render={() => <MoviesContainer /> } />
        <Route exact path='/login' render={() => <LoginForm />} />
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