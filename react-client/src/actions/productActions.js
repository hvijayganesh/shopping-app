import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR } from "./types";
import { storeProducts } from "../test-data/data";

export const getProducts = () => async (dispatch) => {
  try {
    // const products = await axios.get(`http://localhost:5000/products`) // if backend is available
    const products = storeProducts; // seed data from file
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      products,
    });
  } catch (e) {
    dispatch({
      type: GET_PRODUCTS_ERROR
    });
  }
};
