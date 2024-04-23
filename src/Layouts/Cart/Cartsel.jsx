import React from 'react'
import "../Styles/Cartsel.css"
import { Link } from 'react-router-dom'




const Cartsel = () => {
  
   const carttext = "asd";
   const idphoto = URL; 
  return (
    <div className='Wrapper'>
      
      <div className='cart-container'>

        <section className="cart-section">

            <Link to="/Cartpage" className='cart-link'>
              <img src={idphoto}/>
              <div className="cart-text">{carttext}</div>
            </Link>

            <Link to="/Cartpage" className='cart-link'>
              <img src={idphoto}/>
              <div className="cart-text">{carttext}</div>
            </Link>

            <Link to="/Cartpage" className='cart-link'>
              <img src={idphoto}/>
              <div className="cart-text">{carttext}</div>
            </Link>
            
            <Link to="/Cartpage" className='cart-link'>
              <img src={idphoto}/>
              <div className="cart-text">{carttext}</div>
            </Link>
            
            <Link to="/Cartpage" className='cart-link'>
              <img src={idphoto}/>
              <div className="cart-text">{carttext}</div>
            </Link>
            
            <Link to="/Cartpage" className='cart-link'>
              <img src={idphoto}/>
              <div className="cart-text">{carttext}</div>
            </Link>
            
            <Link to="/Cartpage" className='cart-link'>
              <img src={idphoto}/>
              <div className="cart-text">{carttext}</div>
            </Link>
            
            <Link to="/Cartpage" className='cart-link'>
              <img src={idphoto}/>
              <div className="cart-text">{carttext}</div>
            </Link>
            
            <Link to="/Cartpage" className='cart-link'>
              <img src={idphoto}/>
              <div className="cart-text">{carttext}</div>
            </Link>
            
            <Link to="/Cartpage" className='cart-link'>
              <img src={idphoto}/>
              <div className="cart-text">{carttext}</div>
            </Link>
            
            <Link to="/Cartpage" className='cart-link'>
              <img src={idphoto}/>
              <div className="cart-text">{carttext}</div>
            </Link>
            
            <Link to="/Cartpage" className='cart-link'>
              <img src={idphoto}/>
              <div className="cart-text">{carttext}</div>
            </Link>
            

         </section>

      </div>

    </div>
  )
}

export default Cartsel