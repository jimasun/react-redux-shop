import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ShopItem from './ShopItem'

import './Shop.css'

class Shop extends Component {
  constructor(props) {
    super(props)
  }

  onToggleShop() {

  }

  onToggleWhish() {

  }

  onRemoveFromList(id) {

  }

  onRemoveFromCart(id) {

  }

  addToCart(id) {

  }

  addToList(id) {

  }

  render() {
    return (
      <div className="Shop">
        {this.props.items.map((value) =>
          <ShopItem key={`item-${value.id}`} item={value} />
        )}
      </div>
    )
  }
}

export default Shop