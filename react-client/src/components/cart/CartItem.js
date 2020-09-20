import React from 'react'

function CartItem(props) {
  const { item, addToCart, remove } = props;

  const handleQuantityChange = (item, e) => {
    addToCart(item, e.target.value);
  };

  return (
    <div className="col s12 m8 offset-m2 l6 offset-l3">
      <div className="card-panel grey lighten-5 z-depth-1">
        <div className="row valign-wrapper">
          <div className="col s2">
            <img src={item.img} alt="" className="responsive-img" />
          </div>
          <div className="col s10">
            <h4 className="card-title">{item.title}</h4>
            <div className="col s4">
              
                <div className="input-field col s6">
                  <select
                    className="browser-default"
                    onChange={(e) => handleQuantityChange(item, e)}
                    defaultValue={item.quantity}
                  >
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
                    onClick={() => remove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              
            </div>
          </div>
          <h5 className="card-text secondary-content">${item.itemTotal}</h5>
        </div>
      </div>
    </div>
  );
}

export default CartItem
