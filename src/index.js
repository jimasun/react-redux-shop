import React from 'react'
import Thunk from 'redux-thunk'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBasket, faBeer, faHeart, faTrash, faSpinner } from '@fortawesome/free-solid-svg-icons'

import ShopPage from './sites/ShopPage'
import ShopItemPage from './sites/ShopItemPage'

import beers from '../beers.json'
import reducers from './reducers/.index'

library.add(faShoppingBasket, faBeer, faHeart, faTrash, faSpinner)

const preloadedState = {
  shop: {
    items: beers
  }
}

const store = createStore(
  reducers,
  preloadedState,
  applyMiddleware(Thunk)
)

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/items/:name/:id" component={ShopItemPage} />
        <Route component={ShopPage} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)