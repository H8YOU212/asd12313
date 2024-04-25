import React, { useState } from 'react'
import "../Styles/Cartsel.css"
import { Link } from 'react-router-dom'




const Cartsel = () => {

  const carttext = "asd";
  const idphoto = URL;



  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

  return (
    <div className='Wrapper'>

      <div className='cart-container'>

        <section className="cart-section">


          {array.map((item, index) => <Link to={`/Cartpage/${index + 1}`} className='cart-link'><img src={idphoto} />
            <div className="cart-text">{carttext}</div></Link>)}




        </section>

      </div>

    </div>
  )
}

export default Cartsel