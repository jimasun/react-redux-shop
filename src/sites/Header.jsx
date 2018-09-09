import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Header.css'

const Header = () => {
  return (
    <div className="Header">
      <div className="title">
        <span className="icon"><FontAwesomeIcon icon="book" /></span>
        React/ Redux Book Store</div>
      <div className="cart"><FontAwesomeIcon icon="shopping-basket" /></div>
    </div>
  )
}

export default Header