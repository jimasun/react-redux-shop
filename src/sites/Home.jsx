import React, { Component } from 'react'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

import './Home.css'

const Home = (prop) => {
  return (
    <div className='Home'>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default Home