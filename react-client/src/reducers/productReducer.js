import { storeProducts } from "../test-data/data";

const initState = storeProducts;

const productReducer = (state = initState, action) => {
  return state;
}

export default productReducer;