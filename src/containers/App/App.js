import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import NavBar from '../../components/NavBar/NavBar';
import { saveMovies, saveUser, saveFavorites } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../../apiCalls.js';
import LoginForm from '../../components/LoginForm/LoginForm';
import { createNewUser, loginUser } from '../../apiCalls'

class App extends Component {
  async componentDidMount() {
    const { saveMovies, saveUser, saveFavorites } = this.props; 
    try {
      const movieData = await fetchMovies();
      await saveMovies(movieData)
    }

    catch {
    }
  }

  addNewUser = async (newUserInfo) => {
    try {
      await createNewUser(newUserInfo);
    } catch({ message }) {
      this.setState({error: message})
    }
  }

  logUserIn = async (userInfo) => {
    try {
      await loginUser(userInfo);
    } catch({ message }) {
      this.setState({error: message})
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/' render={() => <MoviesContainer /> } />
        <Route exact path='/login' render={() => <LoginForm addNewUser={this.addNewUser} logUserIn={this.logUserIn} />} />
        <Route exact path='/favorites' render={() => <MoviesContainer movies={this.props.favorites}/> } />
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