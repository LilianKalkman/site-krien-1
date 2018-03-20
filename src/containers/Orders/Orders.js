import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Orders.css';

class Orders extends Component {
  componentDidMount(){
    const orders = Object.keys(this.props.orders);
    console.log('state',this.props.orders);
    console.log('mapped',orders);
  }

  render(){
    let order = null;
    const orders = Object.keys(this.props.orders).map(key => {
      order = this.props.orders[key].name;
      const price = this.props.orders[key].price;
      return <li>{order} : {price}</li>
    });
    return (
      <div className="order-view">
        <ul>
        {orders}
        </ul>
        <hr/>
        <strong>Total : </strong>
        <hr />
        <button>Check Out</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  };
};

export default connect(mapStateToProps)(Orders);
