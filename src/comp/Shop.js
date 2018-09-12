import { connect } from 'react-redux'
import * as cart from '../actions/cartActions'
import * as wish from '../actions/wishActions'

import Shop from './Shop/Shop'

const mapStateToProps = (state) => {
  const items = [...state.shop.items]

  state.cart.items.forEach(cItem => {
    items
      .find(sItem => sItem.id === cItem.id)
      .inCart = true
  })

  state.wish.items.forEach(wItem => {
    items
      .find(sItem => sItem.id === wItem.id)
      .inWish = true
  })

  return {
    items: items
  }
}

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(cart.addItem(item)),
  toggleInWhish: (item) => dispatch(wish.toggleItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop)