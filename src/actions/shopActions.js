import * as type from './index.js'

export const addToCart = makeActionCreator(type.ADD_TO_CART, 'text')
export const remFromCart = makeActionCreator(type.REM_FROM_CART, 'id', 'text')
export const addToWhish = makeActionCreator(type.ADD_TO_WHISH, 'id')
export const remFromWhish = makeActionCreator(type.REM_FROM_WHISH, 'id')

// Helper function to create basic actionCreators
function makeActionCreator(type, ...argNames) {
  return function (...args) {
    const action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}