import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Checkout.css';
import { formatPrice } from '../../helpers';

class Checkout extends Component {
  render(){
    return (
      <div className="checkout">
        <div className="ordersum">
          <h4>Your Order:</h4>
          {this.props.orders.map(order => {
            return <h6>{order.name}</h6>
          })}
          <h4>Total:</h4>
          <p>{formatPrice(this.props.price)}</p>
        </div>
        <form action="">Checkout-form: order summary + data invullen + place order button die data naar server stuurt.</form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
    price: state.totalPrice
  };
};


export default connect(mapStateToProps)(Checkout);
