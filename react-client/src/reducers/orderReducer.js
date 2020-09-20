import { myOrders } from "../test-data/data";

const initState = myOrders;

const orderReducer = (state = initState, action) => {
  return state;
}

export default orderReducer;