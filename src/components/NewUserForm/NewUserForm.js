import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './NewUserForm.scss'



class NewUserForm extends Component {
  constructor() {
    super()
    this.state = {
      newName: '',
      newEmail: '',
      newPassword: '',
      status: null,
      createEmailError: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  submitNewUserInfo = async e => {
    e.preventDefault();
    const { newName, newEmail, newPassword } = this.state;
    const newUser = {name: newName, email: newEmail, password: newPassword};
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    };
    console.log('NEWUSER', newUser)
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
    } else if(this.state.status === 500) {
      this.state.createEmailError = "* this email already exists *" 
    }

 

 
    return(
      <div className="new-user-container">
        <section className="create-account">
          <form>
            <input className="new-user-input" type="text" placeholder="insert your name" name="newName" value={this.state.newName} onChange={this.handleChange} />
            <input className="email-error" className="new-user-input" type="email" placeholder="insert your e-mail" name="newEmail" value={this.state.newEmail} onChange={this.handleChange} />
            <h4 style={{color: "red"}}>{this.state.createEmailError}</h4>
            <input className="new-user-input" type="password" placeholder="insert your password" name="newPassword" value={this.state.newPassword} onChange={this.handleChange} />
            <a className="a-create-button"><button className="create-user-button" onClick={(e) => this.submitNewUserInfo(e)}>SUBMIT</button></a>
          </form>
        </section>
      </div>
    )
  }
}

export default NewUserForm;