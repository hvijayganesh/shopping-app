import _ from 'lodash'
import { GET_ORDERS_SUCCESS, GET_ORDERS_ERROR, SORT_ORDERS, SUBMIT_CART_SUCCESS, SUBMIT_CART_FAILURE } from "../actions/types";

const initState = {
  pastOrders: [],
  newOrder: {},
  error: null
};

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ORDERS_SUCCESS:
      console.log('GET_ORDERS_SUCCESS')
      let orders = state.pastOrders.length > 0 ? state.pastOrders : action.orders;
      return {
        ...state,
        pastOrders: orders
      }
    case GET_ORDERS_ERROR:
      return {
        ...state,
        pastOrders: []
      }
    case SORT_ORDERS:
      console.log('sort_orders')
      // option: createdDate-desc -> sortOption will be createdDate and sortOrder will be desc
      const [sortOption, sortOrder] = action.option.split('-');

      let sortedOrders = _.orderBy(state.pastOrders, [sortOption], [sortOrder]);
      return {
        ...state,
        pastOrders: sortedOrders
      };

    case SUBMIT_CART_SUCCESS:
      let updatedOrders = [ ...state.pastOrders, action.order ]
      return {
        ...state,
        pastOrders: updatedOrders,
        newOrder: action.order
      }
    
    default:
      return state;
  }
}

export default orderReducer