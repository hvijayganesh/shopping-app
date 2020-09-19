import React, { Component } from 'react'
import ProductList from '../products/ProductList'

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <ProductList></ProductList>
      </div>
    )
  }
}

export default LandingPage
