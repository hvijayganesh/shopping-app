import React, { Component } from 'react'
import CartItem from './CartItem'
import { connect } from 'react-redux'
import _ from 'lodash'
import { addToCart, removeFromCart, submitCart } from '../../actions/cartActions';
import {  Redirect } from 'react-router-dom';

export class Cart extends Component {

  submitCart = (cart, e) => {
    e.preventDefault();
    this.props.submitCart(cart);
  }

  render() {
    const { cart, addToCart, removeFromCart, newOrder } = this.props;

    if (!_.isEmpty(newOrder)) return (<Redirect to={{ pathname: "/order-confirmation", newOrder: newOrder}}/>);

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
          <button className="btn-large waves-effect waves-light right-align" type="submit" name="action" onClick={(e) => this.submitCart(cart, e)}>Proceed to Checkout</button>
        </div>
      ) : ''

    return (
      <div className='container'>
        <div>
          <h3 className="center-align">Shopping Cart</h3><hr></hr>
          <div className="row">
            <form className="col s12">
              { cart.error != null ? <h5 className="red-text">{cart.error.message}</h5>: ''}
            </form>
          </div>
          {cartItems}
          {cartSummary}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('cart', state);
  return {
    cart: state.cart,
    newOrder: state.orderInfo.newOrder
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    addToCart: (item, quantity) => { dispatch(addToCart(item, quantity)) },
    removeFromCart: (id) => { dispatch(removeFromCart(id)) },
    submitCart: (cart) => { dispatch(submitCart(cart)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
