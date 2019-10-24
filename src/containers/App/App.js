import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import { saveMovies } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../../apiCalls.js';
import LoginForm from '../../components/LoginForm/LoginForm';
import { createNewUser, loginUser } from '../../apiCalls'

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
        <Route exact path='/' render={() => <MoviesContainer /> } />
        <Route exact path='/login' render={() => <LoginForm addNewUser={this.addNewUser} logUserIn={this.logUserIn} />} />
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