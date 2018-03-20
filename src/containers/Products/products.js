import React, { Component } from 'react';
import SampleProducts from '../../sample_products';
import Product from './product';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions_index';

class Products extends Component {

  // componentWillMount(){
  //   this.props.setproducts(this.props.products);
  // }

  render(){
    const products = Object.keys(this.props.products).map(productkey => {
      return <Product
        key={productkey}
        index={productkey}
        details={this.props.products[productkey]}
        products={this.props.products}/>
    });
    return(
      <div className="main-products">
          {products}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setproducts: (products) => dispatch(actions.setState(products))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
