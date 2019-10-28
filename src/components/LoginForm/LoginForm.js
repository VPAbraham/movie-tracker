import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './LoginForm.scss'
class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            loginEmail: '',
            loginPassWord: '',
            status: null
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
      }

        return(
            <div>
                <section className="login">
                    {/* <h3>LOG IN</h3> */}
                    <form>
                       <input className="login-input" type="email" placeholder="insert login e-mail" name="loginEmail" value={this.state.loginEmail} onChange={this.handleChange} />
                        <input className="login-input"  type="password" placeholder="insert login password" name="loginPassword" value={this.state.loginPassword} onChange={this.handleChange} />
                        <a className="a-login-button"><button className="login-button" onClick={(e) => this.loginUser(e)}>LOG IN</button></a>
                    </form>
                </section>
            </div>
        )
    }
}
export default LoginForm;