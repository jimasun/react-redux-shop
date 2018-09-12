import React from 'react'

import './CartItem.css'

const CartItem = (props) => {
  return (
    <div className="CartItem">
      <span className="id">{props.item.id}</span>
      <span className="image">
        <img src={props.item.image} /></span>
      <span className="title">{props.item.title}</span>
      <span className="countSpan">
        <input
          className="count"
          type="number"
          step="1"
          value={props.item.count}
          onChange={props.onCountChanged} /></span>
      <span className="total">{props.item.total}</span>
      <span className="remove"
        onClick={props.remFromCart}></span>
    </div>
  )
}

export default CartItem