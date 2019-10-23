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
    render() {
        return(
            <form>
                <input type="text" placeholder="name" name="name" value={this.state.name} />
                <input type="email" placeholder="email" name="email" value={this.state.email} />
                <input type="password" placeholder="password" name="password" value={this.state.password} />
                <button>SUBMIT</button>
            </form>
        )
    }
}
export default LoginForm;