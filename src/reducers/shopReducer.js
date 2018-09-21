import * as type from './../actions/.index'

const initialState = {
  items: [],
  loading: {
    fetching: false,
    error: false
  }
}

function fetchItems(prevState, action) {
  return Object.assign({}, prevState, {
    items: action.items
  })
}

function fetchItemsStart(prevState, action) {
  return Object.assign({}, prevState, {
    loading: true,
    error: false
  })
}

function fetchItemsStop(prevState, action) {
  return Object.assign({}, prevState, {
    loading: false
  })
}

function fetchItemsFail(prevState, action) {
  return Object.assign({}, prevState, {
    loading: false,
    error: action.error
  })
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.SHOP_FET_ITMS_A:
      return fetchItems(state, action)
    case type.SHOP_FET_ITMS:
      return fetchItems(state, action)
    case type.SHOP_FET_STRT:
      return fetchItemsStart(state, action)
    case type.SHOP_FET_STOP:
      return fetchItemsStop(state, action)
    case type.SHOP_FET_FAIL:
      return fetchItemsFail(state, action)
    default:
      return state
  }
}