import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const setState = (products) => {
  return dispatch => {
    axios.post('products.json', products)
  };
};

export const addOrder = (order, key) => {
  return {
    type: actionTypes.ADD_TO_ORDER,
    order: order,
    productkey: key
  };
};

export const removeOrder = (order) => {
  return {
    type: actionTypes.REMOVE_FROM_ORDER,
    order: order
  };
};
