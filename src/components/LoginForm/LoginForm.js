import React, { Component } from 'react';

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    createNewUser = (e) => {
        e.preventDefault();
        const options = {
          method: 'POST',
          body: JSON.stringify({name: this.state.name, email: this.state.email, password: this.state.password}),
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
            <form>
                <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.handleChange} />
                <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange} />
                <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button onClick={this.createNewUser}>SUBMIT</button>
            </form>
        )
    }
}
export default LoginForm;