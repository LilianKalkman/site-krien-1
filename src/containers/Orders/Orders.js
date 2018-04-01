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

  componentWillMount(){
    // let namesArr = [];
    // const names = this.props.orders.map(key => {
    //   namesArr.push(key.name);
    // });
    // const nameCount = namesArr.reduce(function(obj, item){
    //   if(!obj[item]){
    //     obj[item] = 0;
    //   }
    //   obj[item]++;
    //   return obj;
    // }, {});
    // console.log(nameCount);
    //
    // let priceArr = [];
    // const prices = this.props.orders.map(key => {
    //   priceArr.push(key.price);
    // });
    // const priceCount = priceArr.reduce(function(obj, item){
    //   if(!obj[item]){
    //     obj[item] = 0;
    //   }
    //   obj[item]++;
    //   return obj;
    // }, {});
    // console.log(priceCount);
  }

  renderCheckout = () => {
    this.props.history.push('/checkout');
  }

  render(){
    console.log(this.props.orders);

    let namesArr = [];
    const names = this.props.orders.map(key => {
      namesArr.push(key.name);
    });
    const nameCount = namesArr.reduce(function(obj, item){
      if(!obj[item]){
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});
    console.log(nameCount);

    let priceArr = [];
    const prices = this.props.orders.map(key => {
      priceArr.push(key.price);
    });
    const priceCount = priceArr.reduce(function(obj, item){
      if(!obj[item]){
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});
    console.log(priceCount);

    // const price = Object.keys(priceCount).map(item => {
    //   const c = priceCount[item];
    //   const p = item;
    //   return c * p;
    // });
    // const total = price.reduce((total, item) => {
    //   return total + item
    // }, 0);
    // console.log(total);
    // // price is nu array met getallen
    // const priceDisplay = price.map(price => (<li key={price}>{price}</li>));
    // const price = Object.keys(this.props.orders).map(key => {
    //   return this.props.orders[key].price;
    // });

    const nameDisplay = Object.keys(nameCount).map( name => {
      const count = nameCount[name];
      const product = this.props.orders.find(product => product.name === name);
      const productPrice = product.price;
      const displayPrice = productPrice * count;
      return (
        <li key={count}>{count}x {name} : {formatPrice(displayPrice)}
          <span><button onClick={()=>this.props.remove(name, displayPrice)}>&times;</button></span>
        </li>
      );
    });
    //
    // const orders = Object.keys(this.props.orders).map(key => {
    //   const order = this.props.orders[key].name;
    //   const price = this.props.orders[key].price;
    //   return (
    //     <ul key={key}>
    //       <li key={Date.now()}>{order} : {formatPrice(price)}
    //       <span><button onClick={()=>this.props.remove(this.props.orders[key])}>&times;</button></span>
    //       </li>
    //     </ul>
    //   )
    // });
    return (
      <div className="order-view">
        {nameDisplay}
        <hr/>
        <strong>Total : {formatPrice(this.props.price)}</strong>
        <hr />
        <button onClick={this.renderCheckout}>Check Out</button>
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
    remove: (name, price) => dispatch(actions.removeOrder(name, price))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
