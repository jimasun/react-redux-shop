import { connect } from 'react-redux'
import * as actions from '../actions/shopActions'
import Shop from './Shop/Shop'

const mapStateToProps = (state) => ({
  items: state.shop.items
})

const mapDispatchToProps = (dispatch) => ({
  addToCart: id => dispatch(actions.addToCart(id)),
  addToList: id => dispatch(actions.addToWhish(id)),
  onRemoveFromList: id => dispatch(actions.remFromWhish(id)),
  onRemoveFromCart: id => dispatch(actions.remFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop)