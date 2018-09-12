import React, { Component } from 'react'

import ShopItem from './ShopItem'

import './Shop.css'

class Shop extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Shop">
        {this.props.items.map((item) =>
          <ShopItem
            item={item}
            key={`item-${item.id}`}
            addToCart={() => { this.props.addToCart(item) }}
            toggleInWish={() => { this.props.toggleInWish(item.id) }} />
        )}
      </div>
    )
  }
}

export default Shop