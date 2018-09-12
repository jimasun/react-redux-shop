import { combineReducers } from 'redux'

import shop from './shopReducer'
import cart from './cartReducer'

export default combineReducers({
  shop, cart
})