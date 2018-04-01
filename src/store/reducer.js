import * as actionTypes from './actions/actionTypes';
import SampleProducts from '../sample_products';

const updatedState = Object.keys(SampleProducts).map(item => {
  return SampleProducts[item]
});

const initialState = {
  products: updatedState,
  orders: [],
  totalPrice: 0
}

const Reducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.ADD_TO_ORDER :
    const updatedOrders = [...state.orders];
    const updateOrder = updatedOrders.concat(action.order);
    // toevoegen key/values van totalprice en count.
    const total = Object.keys(updateOrder).reduce((prevTotal, key) => {
      const price = updateOrder[key].price;
      return prevTotal + price;
    }, 0);
    return {
      ...state,
      orders: updateOrder,
      totalPrice: total
    };

// tellen van zelfde namen in de orders state! dit heeft invloed op de prijs.

    case actionTypes.REMOVE_FROM_ORDER :
    const orders = state.orders;
    const updateOrders = orders.filter(key => key !== action.order);
    const totalP = state.totalPrice - action.order.price;
    return {
      ...state,
      orders: updateOrders,
      totalPrice: totalP
    };
  }
  return state;
}

export default Reducer;
