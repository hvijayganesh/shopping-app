import { storeProducts } from "../test-data/data";
import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, ADD_TO_CART, SUBMIT_CART_SUCCESS} from "../actions/types";

const initState = storeProducts;

const productReducer = (state = initState, action) => {
  switch(action.type) {
    case GET_PRODUCTS_SUCCESS:
      return action.products;
    case GET_PRODUCTS_ERROR:
      return []

    case ADD_TO_CART:
      const index = state.findIndex(product => product.id === action.item.id)
      return [
        ...state.slice(0, index),
        {
           ...state[index],
           inCart: action.quantity > 0 ? true : false,
        },
        ...state.slice(index + 1),
      ]

    case SUBMIT_CART_SUCCESS:
      return [ ...initState ];
    default:
      return state;
  }
}

export default productReducer;