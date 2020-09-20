import _ from 'lodash'

const initCart = {
  items: {},
  total: 0
};

const cartReducer = (state = initCart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":

      let addedItem = action.item;
      let addedQty = parseInt(action.quantity);

      if (addedQty == 0)
        return state;

      // compute new total
      let newTotal = state.total + (addedItem.price * addedQty);

      // update quantity in cart
      let existingItem = state.items[addedItem.id];
      if (existingItem) {
        existingItem.quantity += addedQty;
        existingItem.itemTotal = existingItem.quantity * existingItem.price;
      } else {
        state.items[addedItem.id] = {
          ...addedItem,
          quantity: addedQty,
          itemTotal: addedQty * addedItem.price
        }
      }

      return {
        ...state,
        total: newTotal
      }
    
    case "REMOVE_FROM_CART":
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

    default:
      return state;
  };
}

export default cartReducer;