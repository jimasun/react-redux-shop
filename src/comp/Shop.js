import { connect } from 'react-redux'
import * as actions from '../actions/shopActions'

import Shop from './Shop/Shop'

const mapStateToProps = (state) => ({
  items: state.shop.items
})

const mapDispatchToProps = (dispatch) => ({
  toggleInCart: (id) => dispatch(actions.toggleInCart(id)),
  toggleInWhish: (id) => dispatch(actions.toggleInWhish(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop)