import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './NewUserForm.scss'
import { saveUser } from '../../actions'



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

  submitNewUserInfo = async e => {
    e.preventDefault();
    const { newName, newEmail, newPassword } = this.state;
    const { saveUser } = this.props;
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
      await console.log(this.state)
      await saveUser(this.state.newName, this.state.newEmail, this.state.newPassword)      
    } catch(error) {
      throw new Error(error)
    }
  }
  
  render() {
    if (this.state.status === 201) {
      return <Redirect to='/login' />
    }
        
    return(
      <div className="new-user-container">
        <h3>CREATE ACCOUNT</h3>
        <section className="create-account">
          <form>
            <input className="new-user-input" type="text" placeholder="insert your name" name="newName" value={this.state.newName} onChange={this.handleChange} />
            <input className="new-user-input" type="email" placeholder="insert your e-mail" name="newEmail" value={this.state.newEmail} onChange={this.handleChange} />
            <input className="new-user-input" type="password" placeholder="insert your password" name="newPassword" value={this.state.newPassword} onChange={this.handleChange} />
            <a className="a-create-button"><button className="create-user-button" onClick={(e) => this.submitNewUserInfo(e)}>SUBMIT</button></a>
          </form>
        </section>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  user
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    saveUser
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);