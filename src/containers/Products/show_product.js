import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const ShowProduct = () => {
  return(
    <div>
      Product
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(withRouter(ShowProduct));
