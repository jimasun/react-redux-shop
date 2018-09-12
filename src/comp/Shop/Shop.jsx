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
        {this.props.items.map((value) =>
          <ShopItem
            item={value}
            key={`item-${value.id}`}
            toggleInCart={() => { this.props.toggleInCart(value.id) }}
            toggleInWhish={() => { this.props.toggleInWhish(value.id) }} />
        )}
      </div>
    )
  }
}

export default Shop