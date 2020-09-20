import React, { Component } from 'react'
import _ from 'lodash'
import Order from './Order';
import { connect } from 'react-redux'
import { getOrders, sortOrders } from '../../actions/orderActions';

class MyOrders extends Component {

  componentDidMount() {
    this.props.getOrders();
  }

  handleDropdownSelect = (e) => {
    this.props.sortOrders(e.target.value);
  }

  render() {
    const { orders } = this.props;

    const orderList = !_.isEmpty(orders) ? 
      orders.map((order) => {
        return (
          <Order key={order.id}  order={order} />
        )
      }) : 
      <h3 className="center-align">No Orders to show</h3>

    return (
      <div className='container'>
          <h3 className="center-align">Your Orders</h3><hr></hr>
          
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s4">
                  <select className="browser-default" onChange={this.handleDropdownSelect}>
                    <option defaultValue="createdDate-desc">
                      Sort
                    </option>
                    <option value="createdDate-desc">Order Placed - Recent First</option>
                    <option value="createdDate-asc">Order Placed - Oldest First</option>
                    <option value="total-asc">Amount - Low to High</option>
                    <option value="total-desc">Amount - High to Low</option>
                  </select>
                </div>
              </div>
            </form>
          </div>

          {orderList}
  
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('orders', state)
  return {
    orders: state.orderInfo.pastOrders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sortOrders: (option) => { dispatch(sortOrders(option)) },
    getOrders: () => { dispatch(getOrders()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders)
