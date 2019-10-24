import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import { saveMovies } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../../apiCalls.js';
import LoginForm from '../../components/LoginForm/LoginForm';
import { createNewUser } from '../../apiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: [],
      // users: [],
      error: ''
    }
  }



  async componentDidMount() {
    const { saveMovies } = this.props; 
    try {
      const movies = await fetchMovies();
      console.log(movies);
      console.log(this.props)
      saveMovies(movies)
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

  //will need a method for the login users

  render() {
    return (
      <div className="App">
        <Route exact path='/login' render={() => <LoginForm addNewUser={this.addNewUser}/>} />
        <Route exact path='/' render={() => <MoviesContainer movies={this.state.movieData} /> } />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    saveMovies,
  }, dispatch)
)

export default connect(null, mapDispatchToProps)(App);
