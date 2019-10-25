import './NavBar.scss';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <h1 className="main-logo"><div className="hidden-div"><span className="hidden-letters">M</span><span className="hidden-letters">T</span></div></h1>
      <div className="menu">
        <span className="menu-item">Favorite Movies</span>
        <span className="menu-item">Prob another thing</span>      
        <span className="menu-item">Login/Create Account</span>
      </div>  
    </nav>
  )
}

export default NavBar;