import React, { Component } from 'react'
import { storeProducts } from '../../test-data/data'
import Product from './Product'

export class ProductList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: storeProducts
    };
  }

  render() {
    const productList = this.state.products.length > 0 ? 
      this.state.products.map((product) => {
        return (
          <Product product={product} />
        )
      }) : 
      <p>No products are available for sale, please come again later!</p>

    return (
       
            <div className="row">
              {/* <div className="col s12 m12 pr-0"> */}
                {productList}
              {/* </div> */}
            </div>

    )
  }
}

export default ProductList
