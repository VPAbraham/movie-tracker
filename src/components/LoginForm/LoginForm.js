import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './LoginForm.scss'
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
      this.setState({[e.target.name]: e.target.value});
    }

    loginUser = async e => {
      e.preventDefault();
      const { loginEmail, loginPassword } = this.state;
      const user = { email: loginEmail, password: loginPassword};
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      };
      
      console.log('USER IN LOGINFORM', user)
      try {
        const response = await fetch('http://localhost:3001/api/v1/login', options);
        this.setState({ status: response.status });
      } catch(error) {
        throw new Error(error.message)
      }
    }
    
    render() {
      if (this.state.status === 200) {
        return <Redirect to='/' />
      } else if(this.state.status === 401) {
          this.state.loginPasswordError = "* the password does not match! *"
      }

        return(
            <div>
                <section className="login">
                    <form>
                       <input className="login-input" type="email" placeholder="insert login e-mail" name="loginEmail" value={this.state.loginEmail} onChange={this.handleChange} />
                        <input className="login-input"  type="password" placeholder="insert login password" name="loginPassword" value={this.state.loginPassword} onChange={this.handleChange} />
                        <h4 style={{color: "red"}}>{this.state.loginPasswordError}</h4>
                        <a className="a-login-button"><button className="login-button" onClick={(e) => this.loginUser(e)}>LOG IN</button></a>
                    </form>
                </section>
            </div>
        )
    }
}
export default LoginForm;