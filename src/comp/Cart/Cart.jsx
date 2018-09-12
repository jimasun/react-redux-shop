import React from 'react'

import CartItem from './CartItem'
import './Cart.css'

const Cart = (props) => {
  return (
    <div className="Cart">
      <div className="header">
        <span className="title">
          You have
          <span className="count"></span>
          item(s) in your basket
        </span>
        <span className="checkout">
          <span className="price"></span>
        </span>
      </div>
      <div className="items">
        {props.items.map(item => {
          <CartItem
            key={`item-${item.id}`}
            item={item} />
        })}
      </div>
    </div>
  )
}

export default Cart