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
        <div className="shop" onClick={props.onToggleShop}><FontAwesomeIcon icon="shopping-basket" /></div>
        <div className="whish" onClick={props.onToggleWhish}><FontAwesomeIcon icon="heart" /></div>
       </div>
      </div>
    </div>
  )
}

export default ShopItem