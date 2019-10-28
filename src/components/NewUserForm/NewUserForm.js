import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './NewUserForm.scss'
import { saveUser } from '../../actions'
import { postNewUser } from '../../apiCalls/apiCalls';



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

    try {
      const response = await postNewUser(newUser);
      this.setState({ status: response.status });
      if(response.status === 201){
      await console.log(newName)
      await saveUser(newName, newEmail, newPassword)
      }      
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