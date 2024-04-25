import React, { useEffect, useState } from 'react'
import "../Styles/Cartsel.css"
import { Link } from 'react-router-dom'




const Cartsel = () => {

  const carttext = "asd";
  const idphoto = URL;
  const [items, setItems] = useState([])


  useEffect(() => {

    async function fetch() {
      const responce = fetch("http://localhost:3200/items")
      setItems(responce)
    }


    fetch()

  }, [setItems])

  console.log(items)
  return (
    <div className='Wrapper'>

      <div className='cart-container'>

        <section className="cart-section">





        </section>

      </div>

    </div>
  )
}

export default Cartsel