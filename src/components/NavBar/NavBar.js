import './NavBar.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCurrentUser, logOut } from '../../actions';
import PropTypes from 'prop-types';


export const NavBar = ({ isLoggedIn, setCurrentUser, logOut }) => {
  const signOut = () => {
    setCurrentUser("", "");
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
      <Link className="link-to-M-L" to='/'>
        <h1 className="main-logo"><div className="hidden-div"><span className="hidden-letters">M</span><span className="hidden-letters">T</span></div></h1>
      </Link>
      {buttons}     
    </nav>
  )
}


export const mapStateToProps = ({ isLoggedIn }) => ({
  isLoggedIn
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setCurrentUser,
    logOut
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool,
  setCurrentUser: PropTypes.func,
  logOut: PropTypes.func,
}