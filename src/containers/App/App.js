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

  toggleFavorites = (e, movie) => {
    e.preventDefault();
    const { currentUser, favorites } = this.props;
    debugger;
    if (favorites.length) {
      if (favorites.map(favorite => favorite.title).includes(movie.title)) {
        this.removeFavorite(currentUser.id, movie.id)
      } else {
        this.addFavorite(currentUser.id, movie)
      }
    } else {
      this.addFavorite(currentUser.id, movie)
    }
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

  removeFavorite = async (userId, movieId) => {
    try {
      await deleteFavorite(userId, movieId)
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
        <Route exact path='/' render={() => <MoviesContainer toggleFavorites={this.toggleFavorites}/> } />
        <Route exact path='/favorites' render={() => <FavoritesContainer toggleFavorites={this.toggleFavorites} movies={this.props.favorites}/> } />
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