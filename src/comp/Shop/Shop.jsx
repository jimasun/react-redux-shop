import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ShopItem from './ShopItem'

import './Shop.css'

import { items } from '../../../.data.json'

class Shop extends Component {
  constructor(props) {
    super(props)
  }

  onRemoveFromList(id) {

  }

  onRemoveFromCart(id) {

  }

  onToggleShop() {

  }

  onToggleWhish() {

  }

  addToCart(id) {

  }

  addToList(id) {

  }

  render() {
    return (
      <div className="Shop">
        {items.map((value) =>
          <ShopItem key={`item-${value.id}`} item={value} />
        )}
      </div>
    )
  }
}

export default Shop