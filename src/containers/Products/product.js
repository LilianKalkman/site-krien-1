import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Products.css';

class Products extends Component {
  constructor(){
    super();

    this.goToShow = this.goToShow.bind(this);
  }

  goToShow(index){
    const productId = this.props.index
    console.log({productId});
    this.props.history.push(`/products/${productId}`);
  }

  goToOrder = () => {
    this.props.history.push('/orders');
  }

  render(){
    const { details, index } = this.props
    return (
      <div className="product-item">
        <h3 className="product-name">{details.name}</h3>
        <h6 className="price">Price: {details.price}</h6>
        <img src={details.image} alt={details.name}/>
        <p>{details.desc}</p>
        <button onClick={() => this.goToShow(index)}>See Details</button>
        <span><button onClick={this.goToOrder}>Add to Order</button></span>
      </div>
    );
  }
}


export default withRouter(Products);
