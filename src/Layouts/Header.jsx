import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className="App-header">
          <div className='Logo'>LOGO</div>
          <div className='nav-bar'> 
            <div className='nav-links'><Link to='/'>HOME</Link></div> |
            <div className='nav-links'><Link to='/about'>ABOUT</Link></div> |
            <div className='nav-links'><Link to='/contacts'>CONTACT</Link></div> 
          </div>
          <div className='acc'>
              <button>
                <div className='Acc'>Acc</div>
                {/* <img src="public/97-1024.webp" alt="" /> */}
              </button>
          </div>
        </header>
    </div>
  )
}

export default Header