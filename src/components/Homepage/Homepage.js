import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div className="home">
        <div className="homebtn">
          <Link to="/products" type="button" className="btn btn-primary">See products</Link>
        </div>
      </div>
    );
  }
}

export default Homepage;
