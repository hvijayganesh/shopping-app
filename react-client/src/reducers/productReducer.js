import { storeProducts } from "../test-data/data";
import { ADD_TO_CART} from "../actions/types";

const initState = storeProducts;

const productReducer = (state = initState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      const index = state.findIndex(product => product.id === action.item.id)
      return [
        ...state.slice(0, index),
        {
           ...state[index],
           inCart: true,
        },
        ...state.slice(index + 1),
      ]
    default:
      return state;
  }
}

export default productReducer;