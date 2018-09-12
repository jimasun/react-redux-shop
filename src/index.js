import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBasket, faBook, faHeart } from '@fortawesome/free-solid-svg-icons'

import preloadedState from './../data.json'
import reducers from './reducers/.index'
import Home from './sites/Home'
import 'normalize.css'

library.add(faShoppingBasket, faBook, faHeart)

render(
  <Provider store={createStore(reducers, preloadedState)}>
    <Home />
  </Provider>,
  document.querySelector('#root')
)