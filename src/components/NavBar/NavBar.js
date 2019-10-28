import './NavBar.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveUser, logOut } from '../../actions';


const NavBar = ({ isLoggedIn, saveUser, logOut }) => {
  const signOut = () => {
    saveUser("", "");
    logOut();
  }
  
  let buttons;
  if (isLoggedIn) {
    buttons = 
    <div className="menu">
      <Link to='/favorites' className="menu-item">Favorite Movies</Link>
      <Link to='/' className="menu-item" onClick={signOut}>Sign Out</Link>
    </div>    
  } else {
    buttons =       
    <div className="menu">
      <Link to='/login' className="menu-item">Login</Link>
      <Link to='/new-user' className="menu-item">Create New Account</Link>
    </div>
  }

  return (
    <nav className="nav-bar">
    <h1 className="main-logo"><div className="hidden-div"><span className="hidden-letters">M</span><span className="hidden-letters">T</span></div></h1>
      {buttons}     
    </nav>
  )
}

const mapStateToProps = ({ isLoggedIn }) => ({
  isLoggedIn
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    saveUser,
    logOut
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)