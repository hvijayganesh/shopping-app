import React, { Component } from 'react'

class MyOrders extends Component {
  render() {
    const { orders } = this.props;
    return (
      <div className='container'>
          <h3 className="center-align">Your Orders</h3><hr></hr>
          {orderList}
      </div>
    )
  }
}

export default MyOrders
