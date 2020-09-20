import React, { Component } from 'react'
import { connect } from 'react-redux'
import Order from '../my-orders/Order'
import {  Redirect } from 'react-router-dom';
import _ from 'lodash';

export class OrderConfirmation extends Component {

  render() {
    const { newOrder } = this.props.location;

    if (_.isEmpty(newOrder)) return (<Redirect to="/" />);

    return (
      <div className='container'>
        <div>
          <h3 className="center-align">Your order has been confirmed</h3><hr></hr>
          <Order key={newOrder.id}  order={newOrder} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("orderConfirmation", console.log(state))
  return {
    newOrder: state
  }
}

export default connect(mapStateToProps)(OrderConfirmation)
