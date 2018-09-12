import * as type from './../actions/.index'

const initialState = {
  items: []
}

function toggleItem(prevState, action) {
  return prevState
}

function addItem(prevState, action) {
  return prevState
}

function removeItem(prevState, action) {
  return prevState
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.WISH_TOG_ITEM:
      return toggleItem(state, action)
    case type.WISH_ADD_ITEM:
      return addItem(state, action)
    case type.WISH_REM_ITEM:
      return removeItem(state, action)
    default:
      return state
  }
}