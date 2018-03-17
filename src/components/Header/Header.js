import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return(
    <div className="header">
      Welcome to Krienie's Yogashop!
      <nav>
        <ul>
          <div className="navbar">
            <NavLink to='/' exact >Home</NavLink>
            <NavLink to='/products' exact >Products</NavLink>
            <NavLink to='/orders' exact >Orders</NavLink>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
