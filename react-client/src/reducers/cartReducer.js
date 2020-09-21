import _ from 'lodash'
import { ADD_TO_CART, REMOVE_FROM_CART, SUBMIT_CART_FAILURE, SUBMIT_CART_SUCCESS } from "../actions/types";

const initCart = {
  items: {},
  total: 0,
  error: null
};

const cartReducer = (state = initCart, action) => {
  switch (action.type) {
    case ADD_TO_CART:

      let addedItem = action.item;
      let addedQty = parseInt(action.quantity);

      if (addedQty == 0)
        return state;

      // update quantity in cart
      let existingItem = state.items[addedItem.id];
      if (existingItem) {
        existingItem.quantity = addedQty;
        existingItem.itemTotal = existingItem.quantity * existingItem.price;
      } else {
        state.items[addedItem.id] = {
          ...addedItem,
          quantity: addedQty,
          itemTotal: addedQty * addedItem.price
        }
      }

      // compute new total
      let newTotal = 0;
      console.log('items', state.items)
      _.map(state.items, (item, id) => newTotal += item.itemTotal);

      return {
        ...state,
        total: newTotal
      }
    
    case REMOVE_FROM_CART:
      let itemToBeRemoved = state.items[action.id];
      if (!_.isEmpty(itemToBeRemoved)) {
        let newTotal = state.total - itemToBeRemoved.itemTotal;
        let updatedItems = _.omitBy(state.items, (item, id) => id == action.id);
        return {
          ...state,
          items: updatedItems,
          total: newTotal
        }
      }
      return state;

    case SUBMIT_CART_SUCCESS:
      return {
        ...state,
        items: {},
        total: 0,
        error: null
      };
    
    case SUBMIT_CART_FAILURE:
      return {
        ...state,
        error: action.error
      }

    default:
      return state;
  };
}

export default cartReducer;