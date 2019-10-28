import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.scss';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import NavBar from '../../components/NavBar/NavBar';
import LoginForm from '../../components/LoginForm/LoginForm';
import NewUserForm from '../../components/NewUserForm/NewUserForm';
import { saveMovies, saveUser, saveFavorites } from '../../actions';
import { fetchMovies } from '../../apiCalls/apiCalls';

export class App extends Component {
  async componentDidMount() {
    const { saveMovies, saveUser, saveFavorites } = this.props; 
    try {
      const movieData = await fetchMovies();
      await saveMovies(movieData)
    }
    catch {   }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/' render={() => <MoviesContainer /> } />
        <Route exact path='/favorites' render={() => <MoviesContainer movies={this.props.favorites}/> } />
        <Route exact path='/login' render={() => <LoginForm />} />
        <Route exact path='/new-user' render={() => <NewUserForm />} />
      </div>
    )
  }
}

const mapStateToProps = ({ movies, user, favorites }) => ({
  movies,
  user,
  favorites
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    saveMovies,
    saveUser,
    saveFavorites
  }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(App);