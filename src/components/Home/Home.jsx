import React from 'react'
import Header from '../../Layouts/Header.jsx'
import Cart from '../../Layouts/Cart/Cartsel.jsx'


const Home = () => {
  return (
    <div>
      <Header />
      <div className='About'>
        About
      </div>
      <Cart /> 
    </div>
  )
}

export default Home