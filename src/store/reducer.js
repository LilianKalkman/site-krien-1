import * as actionTypes from './actions/actionTypes';
import SampleProducts from '../sample_products';

const updatedState = Object.keys(SampleProducts).map(item => {
  return SampleProducts[item]
});

const initialState = {
  products: updatedState,
  orders: [],
  totalPrice: null
}

const Reducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.ADD_TO_ORDER :
    const updatedOrders = [];
    const updateOrder = updatedOrders.concat({
      id: action.id,
      value: action.order
    });
    return {
      ...state,
      orders: updateOrder
    };

    case actionTypes.REMOVE_FROM_ORDER :
    return {
      ...state,
      orders: this.state.orders.splice(action.order, 1)
    };
  }
  return state;
}

export default Reducer;
