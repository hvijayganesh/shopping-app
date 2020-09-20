import { GET_ORDERS_SUCCESS, GET_ORDERS_ERROR, SORT_ORDERS } from "./types";
import { myOrders } from "../test-data/data";

export const sortOrders = (option) => {
  return {
    type: SORT_ORDERS,
    option,
  };
};

export const getOrders = () => async (dispatch) => {
  try {
    // const orders = await axios.get(`http://localhost:5000/orders`) // if backend is available
    const orders = myOrders; // seed data from file
    dispatch({
      type: GET_ORDERS_SUCCESS,
      orders,
    });
  } catch (e) {
    dispatch({
      type: GET_ORDERS_ERROR
    });
  }
};
