import React from 'react'

import "../Styles/Cartpage.css"
import { useParams } from 'react-router'



const Cartpage = () => {

  const { id } = useParams();

  return (
    <div>Cartpage</div>
  )
}

export default Cartpage