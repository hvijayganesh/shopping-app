import React from 'react'

function Product(props) {
  const product = props.product;

  return (
    <div className="col-9 mx-auto col-md-6 col-lg-4  my-3">
      <div className="card" key={product.id}>
        <div className="img-container p-5">
          <img src={product.img} alt={product.title} className="card-img-top"></img>
          <div className="card-content center">
            <span className="card-title">{product.title}</span>
            <h5 class="mt-3">${product.price}</h5>
            <div class="input-group mt-3">
              <select class="custom-select" id="inputGroupSelect04">
                <option selected>Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
