import * as type from './../actions/index'

const initialState = {
  items: []
}

function addToCart(prevState, action) {
  return {
    cart: [...prevState.cart, action.id]
  }
}

function remFromCart(prevState, action) {
  return {
    cart: [...provState.cart].splice(prevState.cart.indexOf(action.id))
  }
}

function addToWhish(prevState, action) {
  return {
    whish: [...prevState.whish, action.id]
  }
}

function remFromWhish(prevState, action) {
  return {
    whish: [...provState.whish].splice(prevState.whish.indexOf(action.id))
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_TO_CART:
      return addToCart(state, action)
    case type.REM_FROM_CART:
      return remFromCart(state, action)
    case type.ADD_TO_WHISH:
      return addToWhish(state, action)
    case type.REM_FROM_WHISH:
      return remFromWhish(state, action)
    default:
      return state
  }
}