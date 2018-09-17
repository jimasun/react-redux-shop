import { connect } from 'react-redux'
import * as action from './../actions/wishActions'

import Wish from './Wish/Wish'

const mapStateToProps = (state) => ({
  items: state.wish.items.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {})
})

const mapDispatchToProps = (dispatch) => ({
  removeFromWish: (id) => { dispatch(action.remFromWish(id)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Wish)