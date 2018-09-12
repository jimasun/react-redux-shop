import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './ShopItem.css'

const ShopItem = (props) => {
  return (
    <div className="ShopItem">
      <div className="image"><img src={props.item.img} /></div>
      <div className="details">
        <div className="title">{props.item.title}</div>
        <div className="author">{props.item.author}</div>
        <div className="interact">
          <div className="price">{props.item.price}</div>
          <div className={`cart ${props.item.inCart}`}
            onClick={props.addToCart}>
            <FontAwesomeIcon icon="shopping-basket" /></div>
          <div className={`whish ${props.item.inWish}`}
            onClick={props.toggleInWish}>
            <FontAwesomeIcon icon="heart" /></div>
        </div>
      </div>
    </div >
  )
}

export default ShopItem