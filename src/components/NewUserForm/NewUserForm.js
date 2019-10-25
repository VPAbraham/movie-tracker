import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class NewUserForm extends Component {
  constructor() {
    super()
    this.state = {
      newName: '',
      newEmail: '',
      newPassword: '',
      status: null
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  submitNewUserInfo = async event => {
    event.preventDefault();
    const { newName, newEmail, newPassword } = this.state;
    const newUser = {name: newName, email: newEmail, password: newPassword};
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    };

    try {
      const response = await fetch('http://localhost:3001/api/v1/users', options);
      this.setState({ status: response.status });
    } catch(error) {
      throw new Error(error)
    }
  }
  
  render() {
    if (this.state.status === 201) {
      return <Redirect to='/login' />
    }
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