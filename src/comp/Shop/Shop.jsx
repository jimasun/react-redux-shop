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
            toggleInWhish={() => { this.props.toggleInWhish(item) }} />
        )}
      </div>
    )
  }
}

export default Shop