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
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='/orders'>Orders</NavLink>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
