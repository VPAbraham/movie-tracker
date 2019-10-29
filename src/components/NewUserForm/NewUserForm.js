import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './NewUserForm.scss'
import { saveUser } from '../../actions'
import { postNewUser } from '../../apiCalls/apiCalls';

export class NewUserForm extends Component {
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

  clearNewUserInputs = () => {
    this.setState({newName: '', newEmail: '', newPassword: ''})
  }

  submitNewUserInfo = async e => {
    e.preventDefault();
    const { saveUser } = this.props;
    const { newName, newEmail, newPassword } = this.state;
    const newUser = {name: newName, email: newEmail, password: newPassword};

    try {
      const response = await postNewUser(newUser);
      this.setState({ status: response.status }); 
      if (this.state.status === 201) {
        saveUser(newName, newEmail, newPassword);
      }
    } catch(error) {
      throw Error(error)
    }
    this.clearNewUserInputs()
  }
  
  render() {
    if (this.state.status === 201) {
      return <Redirect to='/login' />
    } else if(this.state.status === 500) {
      this.setState({ createEmailError: "* this email already exists *"  })
    }
 
    return(
      <div className="new-user-container">
        <section className="create-account">
          <form>
            <input className="new-user-input" type="text" placeholder="insert your name" name="newName" value={this.state.newName || ''} onChange={this.handleChange} />
            <input className="email-error new-user-input" type="email" placeholder="insert your e-mail" name="newEmail" value={this.state.newEmail || ''} onChange={this.handleChange} />
            <h4 style={{color: "red"}}>{this.state.createEmailError}</h4>
            <input className="new-user-input" type="password" placeholder="insert your password" name="newPassword" value={this.state.newPassword || ''} onChange={this.handleChange} />
            <button className="create-user-button a-create-button" onClick={(e) => this.submitNewUserInfo(e)}>SUBMIT</button>
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