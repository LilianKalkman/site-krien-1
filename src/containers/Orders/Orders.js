import React, { Component } from 'react';
import { connect } from 'react-redux';

class Orders extends Component {
  componentDidMount(){
    console.log(this.props.orders);
  }

  render(){
    const orders = Object.keys(this.props.orders);
    const mappedorders = orders.map(item => {
      return <li>{item.id}</li>
    });
    return (
      <div>
        Orders
        {orders}
        {mappedorders}
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
