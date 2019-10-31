import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.scss';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';
import NavBar from '../../components/NavBar/NavBar';
import LoginForm from '../../components/LoginForm/LoginForm';
import NewUserForm from '../../components/NewUserForm/NewUserForm';
import { saveMovies, saveUser, saveFavorites } from '../../actions';
import { fetchMovies, getFavorites, postFavorite, deleteFavorite } from '../../apiCalls/apiCalls';
import PropTypes from 'prop-types';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      errorMsg: ""
    }
  }

  async componentDidMount() {
    const { saveMovies } = this.props; 
    
    try {
      const movieData = await fetchMovies();
      await saveMovies(movieData);
    } catch(error) {
      console.log(error)
    }
  }

  clickFavIcon = (e, movie) => {
    e.preventDefault();
    this.props.isLoggedIn ? this.toggleFavorites(movie) : this.setErrorMsg()
  }

  setErrorMsg = () => {
    this.setState({ errorMsg: 'Please log in or create new account to add favorite movies.' });
    setTimeout(() => {
      this.setState({ errorMsg: ""})
    }, 1600);
  }

  toggleFavorites = async (movie) => {
    const { currentUser, favorites } = this.props;

    if (favorites.length) {
      let titles = favorites.map(favorite => favorite.title);
      if (titles.includes(movie.title)) {
        await this.removeFavorite(currentUser.id, movie.movie_id)
      } else {
        await this.addFavorite(currentUser.id, movie)
      }
    } else {
      await this.addFavorite(currentUser.id, movie)
    }
    this.forceUpdate()
  }

  addFavorite = async (userId, movie) => {
    try {
      await postFavorite(userId, movie);
      let newFavorites = await getFavorites(userId);
      this.props.saveFavorites(newFavorites);
    } catch(error) {
      console.log(error)
    }
  }

  removeFavorite = async (userId, movieId) => {
    try {
      await deleteFavorite(userId, movieId)
      let newFavorites = await getFavorites(userId);
      this.props.saveFavorites(newFavorites);
    } catch(error) {
      console.log(error)
    }
  }

  render() {
    const { movies } = this.props
    return (
      <div className="App">
        <NavBar />
        <div className="error-container">
          <h2 className="error">{this.state.errorMsg}</h2>
        </div>
        <Route exact path='/' render={() => <MoviesContainer clickFavIcon={this.clickFavIcon}/> } />
        <Route exact path='/movies/:id' component={MovieInfo} movies={movies}/>
        <Route exact path='/favorites' render={() => <FavoritesContainer clickFavIcon={this.clickFavIcon} favorites={this.props.favorites}/> } />
        <Route exact path='/login' render={() => <LoginForm />} />
        <Route exact path='/new-user' render={() => <NewUserForm />} />
      </div>
    )
  }
}

export const mapStateToProps = ({ movies, currentUser, favorites, isLoggedIn }) => ({
  movies,
  currentUser,
  favorites,
  isLoggedIn
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    saveMovies,
    saveUser,
    saveFavorites
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  movies: PropTypes.array,
  currentUser: PropTypes.object,
  favorites: PropTypes.array,
  isLoggedIn: PropTypes.bool,
  saveMovies: PropTypes.func,
  saveUser: PropTypes.func,
  saveFavorites: PropTypes.func
}