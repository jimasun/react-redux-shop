export const CART_TOG_ITEM = 'CART_TOG_ITEM'
export const CART_ADD_ITEM = 'CART_ADD_ITEM'
export const CART_REM_ITEM = 'CART_REM_ITEM'
export const CART_CHA_COUN = 'CART_CHA_COUN'

export const WISH_TOG_ITEM = 'WISH_TOG_ITEM'
export const WISH_ADD_ITEM = 'WISH_ADD_ITEM'
export const WISH_REM_ITEM = 'WISH_REM_ITEM'

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