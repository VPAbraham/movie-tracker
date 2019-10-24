import './NavBar.scss';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <h1 className="main-logo">Movie<span className='logo-second'>Trac</span></h1>
      <div className="menu">
        <span className="menu-item">Favorite Movies</span>
        <span className="menu-item">Prob another thing</span>      
        <span className="menu-item">Login/Create Account</span>
      </div>  
    </nav>
  )
}

export default NavBar;