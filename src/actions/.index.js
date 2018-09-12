export const TOGGLE_IN_CART = 'TOGGLE_IN_CART'
export const TOGGLE_IN_WHISH = 'TOGGLE_IN_WHISH'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REM_FROM_CART = 'REM_FROM_CART'
export const ADD_TO_WHISH = 'ADD_TO_WHISH'
export const REM_FROM_WHISH = 'REM_FROM_WHISH'

export const CHANGE_CART_ITEM_COUNT = 'CHANGE_CART_ITEM_COUNT'

// Helper function to create basic actionCreators
export function makeActionCreator(type, ...argNames) {
  return function (...args) {
    const action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}