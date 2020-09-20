export const addToCart = (item, quantity)=>{
  return {
    type: "ADD_TO_CART",
    item,
    quantity
  }
}

export const removeFromCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    id
  }
}