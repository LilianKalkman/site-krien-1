import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class ShowProduct extends Component {
  componentDidMount(){
    console.log(this.props);
    console.log(this.props.products[this.props.match.params.productId]);
  }

  render() {
    const productinfo = this.props.products[this.props.match.params.productId];
    const product = Object.keys(productinfo).map((key) => {
      return <li>{productinfo[key]}</li>
    });
    return(
      <div>
      {product}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(withRouter(ShowProduct));
