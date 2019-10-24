import React, { Component } from 'react';
import { createNewUser, loginUser } from '../../apiCalls'
import { Link, Redirect } from 'react-router-dom';

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

    submitNewUserInfo = event => {
        event.preventDefault()
        const { newName, newEmail, newPassword } = this.state
        const newUser = {name: newName, email: newEmail, password: newPassword}
        this.props.addNewUser(newUser);
        this.setState({newName: '', newEmail: '', newPassword: ''})
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    loginUser = (e) => {
        e.preventDefault();
        const { loginEmail, loginPassword } = this.state;
        const user = { email: loginEmail, password: loginPassword};
        this.props.logUserIn(user);


        this.setState({ loginEmail: '', loginPassword: ''})
    }
    
    render() {
        return(
            <div>
                <section className="create-account">
                    <h3>CREATE ACCOUNT</h3>
                    <form>
                        <input type="text" placeholder="insert your name" name="newName" value={this.state.newName} onChange={this.handleChange} />
                        <input type="email" placeholder="insert your e-mail" name="newEmail" value={this.state.newEmail} onChange={this.handleChange} />
                        <input type="password" placeholder="insert your password" name="newPassword" value={this.state.newPassword} onChange={this.handleChange} />
                        <button className="create-user-button" onClick={(e) => this.submitNewUserInfo(e)}>SUBMIT</button>
                    </form>
                </section>
                <h3>OR</h3>
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