import * as actions from '../../actions/cartActions'
import * as types from '../../actions/types'
import {storeProducts} from '../../test-data/data'


describe('actions', () => {
  it('should create an action to add item to cart', () => {
    const item = storeProducts[0];
    const quantity = 1;
    const expectedAction = {
      type: types.ADD_TO_CART,
      item,
      quantity
    }
    expect(actions.addToCart(item, quantity)).toEqual(expectedAction)
  })
})