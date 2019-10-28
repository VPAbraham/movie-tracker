import './NavBar.scss';
import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const NavBar = ({ isLoggedIn }) => {
  let buttons;
  if (isLoggedIn) {
    buttons = 
    <div className="menu">
      <Link to='/favorites' className="menu-item">Favorite Movies</Link>
      <Link to='/' className="menu-item">Sign Out</Link>
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

export default connect(mapStateToProps)(NavBar)