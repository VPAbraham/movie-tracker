import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.scss';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';
import NavBar from '../../components/NavBar/NavBar';
import LoginForm from '../../components/LoginForm/LoginForm';
import NewUserForm from '../../components/NewUserForm/NewUserForm';
import { saveMovies, saveUser, saveFavorites } from '../../actions';
import { fetchMovies, getFavorites, postFavorite, deleteFavorite } from '../../apiCalls/apiCalls';

export class App extends Component {
  async componentDidMount() {
    const { saveMovies } = this.props; 
    
    try {
      const movieData = await fetchMovies();
      await saveMovies(movieData);
    } catch(error) {
      console.log(error)
    }
  }

  toggleFavorites = () => {

  }

  addFavorite = async (userId, movie) => {
    const { saveFavorites } = this.props;

    try {
      await postFavorite(userId, movie);
      let newFavorites = await getFavorites(userId);
      saveFavorites(newFavorites);
    } catch(error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/' render={() => <MoviesContainer /> } />
        <Route exact path='/favorites' render={() => <FavoritesContainer /> } />
        <Route exact path='/login' render={() => <LoginForm />} />
        <Route exact path='/new-user' render={() => <NewUserForm />} />
      </div>
    )
  }
}

const mapStateToProps = ({ movies, currentUser, favorites, isLoggedIn }) => ({
  movies,
  currentUser,
  favorites,
  isLoggedIn
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    saveMovies,
    saveUser,
    saveFavorites
  }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(App);