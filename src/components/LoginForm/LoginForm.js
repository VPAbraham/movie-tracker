import React, { Component } from 'react';

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            newName: '',
            newEmail: '',
            newPassWord: '',
            // loginName: '', //do we need this??
            loginEmail: '',
            loginPassWord: ''
        }
    }

    createNewUser = (e) => {
        e.preventDefault();
        const options = {
          method: 'POST',
          body: JSON.stringify({name: this.state.newName, email: this.state.newEmail, password: this.state.newPassword}),
          headers: {
            'Content-Type': 'application/json'
          }
        }
    
        fetch('http://localhost:3001/api/v1/users', options)
        .then(r => r.json())
        .then(data => console.log(data))
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
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
                <button onClick={this.createNewUser}>SUBMIT</button>
                </form>
                </section>
                <h3>OR</h3>
                <section className="login-to-account">
                <h3>LOG IN</h3>
                <form>
                {/* <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.handleChange} /> */}
                <input type="email" placeholder="insert login e-mail" name="loginEmail" value={this.state.loginEmail} onChange={this.handleChange} />
                <input type="password" placeholder="insert login password" name="loginPassword" value={this.state.loginPassword} onChange={this.handleChange} />
                <button onClick={this.createNewUser}>SUBMIT</button>
            </form>
                </section>
            </div>
        )
    }
}
export default LoginForm;