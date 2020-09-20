import { combineReducers } from 'redux'
import cartReducer from './cartReducer';
import productReducer from  './productReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  orders: orderReducer
})

export default rootReducer