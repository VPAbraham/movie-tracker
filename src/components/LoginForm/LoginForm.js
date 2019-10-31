import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './LoginForm.scss';
import { logIn, setCurrentUser, saveFavorites } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser, getFavorites } from '../../apiCalls/apiCalls';
import PropTypes from 'prop-types';

export class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      loginEmail: '',
      loginPassword: '',
      status: null,
      loginPasswordError: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  // clearLoginInputs = () => {
  //   this.setState({ loginEmail: '', loginPassword: '' })
  // }

  loginUser = async e => {
    e.preventDefault();
    const { logIn, setCurrentUser, saveFavorites } = this.props;
    const { loginEmail, loginPassword } = this.state;
    const user = { email: loginEmail, password: loginPassword };
   
    try {
      let currentUser;
      let response = await loginUser(user);
      if (response.status === 200) {
        this.setState({ loginEmail: '', loginPassword: '', status: 200, loginPasswordError: "" })
        currentUser = await response.json();
        let favorites = await getFavorites(currentUser.id);
        setCurrentUser(currentUser);
        saveFavorites(favorites);
        logIn();
      } else if (response.status === 401) {
        this.setState({ loginEmail: '', loginPassword: '', status: 401, loginPasswordError: "* the password does not match! *" })
      } else if (response.status === 500) {
        this.setState({ loginEmail: '', loginPassword: '', status: 500, loginPasswordError: "* Could not log in *" })
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    if (this.state.status === 200) {
      return <Redirect to='/' />
    } 

    return (
      <div>
        <section className="login">
          <form>
            <input className="login-input" type="email" placeholder="insert login e-mail" name="loginEmail" value={this.state.loginEmail} onChange={this.handleChange} />
            <input className="login-input" type="password" placeholder="insert login password" name="loginPassword" value={this.state.loginPassword} onChange={this.handleChange} />
            <h4 style={{ color: "red" }}>{this.state.loginPasswordError}</h4>
            <button className="login-button a-login-button" onClick={(e) => this.loginUser(e)}>LOG IN</button>
          </form>
        </section>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    logIn,
    setCurrentUser,
    saveFavorites
  }, dispatch)
)

export default connect(null, mapDispatchToProps)(LoginForm);

LoginForm.propTypes = {
  logIn: PropTypes.func,
  setCurrentUser: PropTypes.func,
  saveFavorites: PropTypes.func
}