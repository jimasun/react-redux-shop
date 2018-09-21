import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Cart from '../../comp/Cart'
import Wish from '../../comp/Wish'

import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  toggleCart() {
    document.querySelector('.Cart').classList.toggle('visible')
  }

  toggleWish() {
    document.querySelector('.Wish').classList.toggle('visible')
  }

  render() {
    return (
      <div className="Header">
        <div className="icon">
          <FontAwesomeIcon icon="beer" /></div>
        <div className="title">
          Punk Beer Store</div>
        <div className="wish"
          onClick={this.toggleWish}>
          <FontAwesomeIcon icon="heart" /></div>
        <div className="cart"
          onClick={this.toggleCart}>
          <FontAwesomeIcon icon="shopping-basket" /></div>
        <Cart />
        <Wish />
      </div>
    )
  }
}

export default Header