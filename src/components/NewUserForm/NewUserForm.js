import React, { Component } from 'react';
import { createNewUser } from '../../apiCalls'

class NewUserForm extends Component {
    constructor() {
        super()
        this.state = {
            newName: '',
            newEmail: '',
            newPassword: '',
            error: ''
        }
    }
    
    addNewUser = async (newUserInfo) => {
      try {
        await createNewUser(newUserInfo);
      } catch({ message }) {
        this.setState({error: message})
      }
    }

    submitNewUserInfo = event => {
        event.preventDefault()
        const { newName, newEmail, newPassword } = this.state
        const newUser = {name: newName, email: newEmail, password: newPassword}
        this.addNewUser(newUser);
        this.setState({newName: '', newEmail: '', newPassword: ''})
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
                        <button className="create-user-button" onClick={(e) => this.submitNewUserInfo(e)}>SUBMIT</button>
                    </form>
                </section>
            </div>
        )
    }
}
export default NewUserForm;