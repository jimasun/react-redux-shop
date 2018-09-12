import { connect } from 'react-redux'
import * as cart from '../actions/cartActions'
import * as wish from '../actions/wishActions'

import Shop from './Shop/Shop'

const mapStateToProps = (state) => {
  const items = [...state.shop.items]

  items.forEach(sItem => {
    sItem.inCart = !!state.cart.items
      .find(cItem => cItem.id === sItem.id) || false

    sItem.inWish = !!state.wish.items
      .find(wItemId => wItemId === sItem.id) || false
  })

  return {
    items: items
  }
}

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(cart.addItem(item)),
  toggleInWish: (id) => dispatch(wish.toggleItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop)