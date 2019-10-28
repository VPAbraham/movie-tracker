import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './LoginForm.scss';
import { logIn, setCurrentUser } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser } from '../../apiCalls/apiCalls';


class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      loginEmail: '',
      loginPassWord: '',
      status: null,
      loginPasswordError: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  clearLoginInputs = () => {
    this.setState({ loginEmail: '', loginPassWord: '' })
  }

  loginUser = async e => {
    e.preventDefault();
    const { logIn, setCurrentUser } = this.props;
    const { loginEmail, loginPassword } = this.state;
    const user = { email: loginEmail, password: loginPassword };
   
    try {
      const response = await loginUser(user)
      this.setState({ status: response.status });
      if (this.state.status === 200) {
        setCurrentUser(loginEmail, loginPassword);
        logIn();
      }
    } catch (error) {
      throw new Error(error.message)
    }
    this.clearLoginInputs();

  }

  render() {
    if (this.state.status === 200) {
      return <Redirect to='/' />
    } else if (this.state.status === 401) {
      this.setState({ loginPasswordError: "* the password does not match! *" })
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
    setCurrentUser
  }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);