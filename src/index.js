import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBasket, faBook, faHeart, faTrash, faSpinner } from '@fortawesome/free-solid-svg-icons'

import preloadedState from './../data.json'
import reducers from './reducers/.index'
import Home from './sites/Home'
import withLoading from './hoc/Loading'
import 'normalize.css'

library.add(faShoppingBasket, faBook, faHeart, faTrash, faSpinner)

const HomeWithLoading = new withLoading(Home, {
  componentSelector: '',
  loading: true,
  fullScreen: false,
  text: 'loading...'
})

render(
  <Provider store={createStore(reducers, preloadedState)}>
    <HomeWithLoading />
  </Provider>,
  document.querySelector('#root')
)