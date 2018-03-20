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
    const updatedOrders = state.orders;
    const updateOrder = updatedOrders.concat(action.order);
    return {
      ...state,
      orders: updateOrder
    };

    case actionTypes.REMOVE_FROM_ORDER :
    const orders = state.orders;
    const updateOrders = orders.splice(action.order, 1);
    return {
      ...state,
      orders: updateOrders
    };
  }
  return state;
}

export default Reducer;
