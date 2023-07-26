
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <div className="mobile-navbar">
      
      <div className="navbar-title">Your Cards</div>
      <Link to="/credit-card" className="credit-card-button">
         Credit Card
      </Link>
      <div className="menu-dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    
    </div>
  );
};

export default Navbar;
