import React, { Component } from 'react'
import Product from './Product'
import { connect } from 'react-redux'
import _ from 'lodash';
import { addToCart } from '../../actions/cartActions';

export class ProductList extends Component {

  render() {
    const { products, addToCart } = this.props;

    const productList = !_.isEmpty(products) ? 
      products.map((product) => {
        return (
          <Product key={product.id}  product={product} addToCart={addToCart} />
        )
      }) : 
      <h5 className="center-align mt-5">No products are available for sale, please come again later!</h5>

    return (
      <div className="row">
        <h3 className="center-align">Products for Sale</h3><hr></hr>
        {productList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, quantity) => { dispatch(addToCart(item, quantity)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
