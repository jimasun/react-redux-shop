import React from 'react'

import './Content.css'
import Shop from '../comp/Shop'
import Cart from '../comp/Cart'
import Wish from '../comp/Wish'

const Content = () => {
  return (
    <div className="Content">
      <Shop />
      <Cart />
      <Wish />
    </div>
  )
}

export default Content