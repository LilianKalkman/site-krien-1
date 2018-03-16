import * as actionTypes from './actions/actionTypes';
import SampleProducts from '../sample_products';

const updatedState = Object.keys(SampleProducts).map(item => {
  return SampleProducts[item]
});

const initialState = {
  products: updatedState
}

const Reducer = (state = initialState, action) => {
  // switch(action.type){
  //   case actionTypes.GET_STATE :
  //   const updatedState = Object.keys(SampleProducts).map(item => {
  //     return SampleProducts[item]
  //   });
  //   return {
  //     ...state,
  //     products: state.products.concat(updatedState)
  //   }
  // }
  return state;
}

export default Reducer;
