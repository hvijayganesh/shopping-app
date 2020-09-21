import { createFakeOrder } from "../test-data/data";
import { SUBMIT_CART_SUCCESS, SUBMIT_CART_FAILURE } from "./types";

export const addToCart = (item, quantity)=>{
  return {
    type: "ADD_TO_CART",
    item,
    quantity
  }
}

export const removeFromCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    id
  }
}

export const submitCart = (cart) => async (dispatch) => {
  try {
    // const orders = await axios.post(`http://localhost:5000/submit-cart`) // if backend is available

    // createFakeOrder randomly fails to simulate out of stock issue
    const order = createFakeOrder(cart);
    dispatch({
      type: SUBMIT_CART_SUCCESS,
      order,
    });
  } catch (e) {
    dispatch({
      type: SUBMIT_CART_FAILURE,
      error: e
    });
  }
};