import React, { Component } from 'react';
import { loginUser } from '../../apiCalls'

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            newName: '',
            newEmail: '',
            newPassword: '',
            loginEmail: '',
            loginPassWord: ''
        }
    }
    
    logUserIn = async (userInfo) => {
        try {
          await loginUser(userInfo);
        } catch({ message }) {
          this.setState({error: message})
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    loginUser = (e) => {
        e.preventDefault();
        const { loginEmail, loginPassword } = this.state;
        const user = { email: loginEmail, password: loginPassword};
        this.logUserIn(user);
        this.setState({ loginEmail: '', loginPassword: ''})
    }
    
    render() {
        return(
            <div>
                <section className="login">
                    <h3>LOG IN</h3>
                    <form>
                       <input type="email" placeholder="insert login e-mail" name="loginEmail" value={this.state.loginEmail} onChange={this.handleChange} />
                        <input type="text" placeholder="insert login password" name="loginPassword" value={this.state.loginPassword} onChange={this.handleChange} />
                        <button onClick={(e) => this.loginUser(e)}>LOG IN</button>
                    </form>
                </section>
            </div>
        )
    }
}
export default LoginForm;