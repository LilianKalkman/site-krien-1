import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Orders.css';
import * as actions from '../../store/actions/actions_index';
import { formatPrice } from '../../helpers';

class Orders extends Component {
  // componentDidMount(){
  //   const orders = Object.keys(this.props.orders);
  //   console.log('state',this.props.orders);
  //   console.log('mapped',orders);
  // }

  render(){
    const orders = Object.keys(this.props.orders).map(key => {
      const order = this.props.orders[key].name;
      const price = this.props.orders[key].price;
      return (
        <ul key={key}>
          <li key={key}>{order} : {formatPrice(price)}
          <span><button onClick={()=>this.props.remove(this.props.orders[key])}>&times;</button></span>
          </li>
        </ul>
      )
    });
    return (
      <div className="order-view">
        {orders}
        <hr/>
        <strong>Total : {formatPrice(this.props.price)}</strong>
        <hr />
        <button>Check Out</button>
      </div>
    );
  }
}
// link naar checkout form maken met routes

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
    price: state.totalPrice
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (order) => dispatch(actions.removeOrder(order))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
