import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Products.css';
import * as actions from '../../store/actions/actions_index';

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
        <span><button onClick={() => this.props.add(this.props.index, this.props.details)}>Add to Order</button></span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // orders: this.state.orders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (index, order) => dispatch(actions.addOrder(index, order)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Products));
