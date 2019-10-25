import './NavBar.scss';
import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <h1 className="main-logo">Movie<span className='logo-second'>Trac</span></h1>
      <div className="menu">
        <Link to='/login' className="menu-item">Login</Link>
        <Link to='/new-user' className="menu-item">Create New Account</Link>
        <Link to='/favorites' className="menu-item">Favorite Movies</Link>
        <Link to='/' className="menu-item">Sign Out</Link>    
      </div>  
    </nav>
  )
}

export default NavBar;