import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
          <FontAwesomeIcon icon="book" /></div>
        <div className="title">
          React/ Redux Book Store</div>
        <div className="wish"
          onClick={this.toggleWish}>
          <FontAwesomeIcon icon="heart" /></div>
        <div className="cart"
          onClick={this.toggleCart}>
          <FontAwesomeIcon icon="shopping-basket" /></div>
      </div>
    )
  }
}

export default Header