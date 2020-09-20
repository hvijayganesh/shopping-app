import React from 'react'

function OrderItem(props) {
  const { item } = props;

  return (
    <ul className="collection">
      <li className="collection-item avatar">
        <img src={item.img} alt="" className="circle" />
        <span className="title">{item.title}</span>
        <p className="title">${item.price}</p>
        <a href="#!" className="secondary-content"><i className="material-icons">Rate & Review Product</i></a>
      </li>
    </ul>
  )
}

export default OrderItem
