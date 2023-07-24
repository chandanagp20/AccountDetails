
import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
    <div className="mobile-navbar">
       <div className="navbar-title1">></div>
      <div className="navbar-title">Your Cards</div>
      <div className="menu-dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Navbar;
