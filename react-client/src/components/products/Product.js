import React, { Component } from "react";

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  handleQuantityChange = (e) => {
    this.setState({
      quantity: e.target.value,
    });
  };

  render() {
    let { product, addToCart } = this.props;

    return (
      // <div className="col-9 mx-auto col-md-6 col-lg-4  my-3">
      <div className="col m6 l4 mx-auto my-3">
        <div className="card">
          <div className="card-image">
            <img
              src={product.img}
              alt={product.title}
              className="card-img-top"
            ></img>
          </div>
          <div className="card-content center">
            <span className="card-title">{product.title}</span>
            <h5 className="mt-3">${product.price}</h5>
          </div>
          <div className="card-action">
            <div className="row">
              <div className="input-field col s6">
                <select className="browser-default" onChange={this.handleQuantityChange}>
                  <option defaultValue="0">
                    Quantity
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="input-field col s6">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                  onClick={() => addToCart(product, this.state.quantity)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
