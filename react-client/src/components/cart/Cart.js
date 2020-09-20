import React, { Component } from 'react'
import CartItem from './CartItem'
import { connect } from 'react-redux'
import _ from 'lodash'
import { addToCart, removeFromCart } from '../../actions/cartActions';

export class Cart extends Component {
  render() {
    const { cart, addToCart, removeFromCart } = this.props;

    const cartItems = !_.isEmpty(cart.items) ? 
      _.map(cart.items, (item, id) => {
        return (
          <CartItem item={item} addToCart={addToCart} remove={removeFromCart} key={id}></CartItem>
        )
      }) :
     <h3 className="center-align">No items on the cart</h3>

    const cartSummary = !_.isEmpty(cart.items) ? 
      (
        <div className="secondary-content">
          <h4>
            <small>Total Amount: </small>
            <span>${cart.total}</span>
          </h4>
          <button class="btn-large waves-effect waves-light right-align" type="submit" name="action">Proceed to Checkout</button>
        </div>
      ) : ''

    return (
      <div className='container'>
        <div>
          <h3 className="center-align">Shopping Cart</h3><hr></hr>
          {cartItems}
          {cartSummary}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    addToCart: (item, quantity) => { dispatch(addToCart(item, quantity)) },
    removeFromCart: (id) => { dispatch(removeFromCart(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
