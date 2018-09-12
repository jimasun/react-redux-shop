import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Cart from './../comp/Cart'

import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  toggleCart() {
    document.querySelector('.Cart').classList.toggle('visible')
  }

  render() {
    return (
      <div className="Header">
        <div className="title">
          <span className="icon">
            <FontAwesomeIcon icon="book" /></span>
          React/ Redux Book Store</div>
        <div className="cart"
          onClick={this.toggleCart}>
          <FontAwesomeIcon icon="shopping-basket" />
          <Cart /></div>
      </div>
    )
  }
}

export default Header