import * as type from './../actions/index'

const initialState = {
  items: [],
  cart: [],
  whish: []
}

function toggleInCart(prevState, action) {
  const items = prevState.items,
    item = items.find(item => item.id == action.id),
    index = items.indexOf(item)

  !!item.inCart
    ? remFromCart(prevState, action)
    : addToCart(prevState, action)

  item.inCart = !item.inCart
  items.splice(index, 1, item)

  return Object.assign(prevState, {
    items: items,
  })
}

function toggleInWhish(prevState, action) {
  const items = prevState.items,
    item = items.find(item => item.id == action.id),
    index = items.indexOf(item)

  !!item.inWhish
    ? remFromWhish(prevState, action)
    : addToWhish(prevState, action)

  item.inWhish = !item.inWhish
  items.splice(index, 1, item)

  return Object.assign(prevState, {
    items: items,
  })
}

function addToCart(prevState, action) { 
  return Object.assign(prevState, {
    cart: [...prevState.cart, action.id]
  })
}

function remFromCart(prevState, action) {
  return Object.assign(prevState, {
    cart: [...prevState.cart].splice(prevState.cart.indexOf(action.id), 1)
  })
}

function addToWhish(prevState, action) {
  return Object.assign(prevState, {
    whish: [...prevState.whish, action.id]
  })
}

function remFromWhish(prevState, action) {
  return Object.assign(prevState, {
    whish: [...prevState.whish].splice(prevState.whish.indexOf(action.id), 1)
  })
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.TOGGLE_IN_CART:
      return toggleInCart(state, action)
    case type.TOGGLE_IN_WHISH:
      return toggleInWhish(state, action)
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