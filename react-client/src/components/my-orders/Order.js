import React from "react";
import moment from "moment";
import _ from 'lodash';
import OrderItem from "./OrderItem";

function Order(props) {
  const { order } = props;

  const orderItems = _.map(order.items, (item, id) => {
    return (
      <OrderItem item={item} key={id}></OrderItem>
    )
  });

  return (
    <div className="col s12 m8 offset-m2 l6 offset-l3">
      <div className="card-panel grey lighten-5 z-depth-1">
        <div className="row valign-wrapper">
          <div className="col s4">
            <h5 className="card-title left-align">Order Placed: {moment(order.createdDate).format('DD MMM YYYY')}</h5>
          </div>
          <div className="col s4">
            <h5 className="card-title center-align">Total: ${order.total}</h5>
          </div>
          <div className="col s4">
            <h5 className="card-title right-align">Order #{order.id}</h5>
          </div>
        </div>
        <div className="row valign-wrapper">
          <div className="col s12">
              { orderItems }
            </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
