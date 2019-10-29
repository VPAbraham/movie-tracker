import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './LoginForm.scss';
import { logIn, setCurrentUser, saveFavorites } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser, getFavorites } from '../../apiCalls/apiCalls';
import { favorites } from '../../reducers/favorites';

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

  clearLoginInputs = () => {
    this.setState({ loginEmail: '', loginPassword: '' })
  }

  loginUser = async e => {
    e.preventDefault();
    const { logIn, setCurrentUser, saveFavorites } = this.props;
    const { loginEmail, loginPassword } = this.state;
    const user = { email: loginEmail, password: loginPassword };
   
    try {
      let currentUser = await loginUser(user);
      let favorites = await getFavorites(currentUser.id);
      setCurrentUser(currentUser);
      saveFavorites(favorites);
      logIn();
      this.setState({status: 200, loginPasswordError: ""})
    } catch (error) {
      console.log(error.message)
      this.setState({status: 401, loginPasswordError: "* the password does not match! *"})
    }
    
    this.clearLoginInputs();
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

const mapStateToProps = ({ user }) => ({
  user
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    logIn,
    setCurrentUser,
    saveFavorites
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);