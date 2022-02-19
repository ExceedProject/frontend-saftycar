
import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillCar,AiFillHome } from "react-icons/ai"

const Navbar = () => {
  return (
      <nav>
          <h1><AiFillCar /> SAFETYCAR - EXCEED16<AiFillCar /></h1>
          <Link to="/Home"><h3><AiFillHome /> Home</h3></Link>
      </nav>
  )
}

export default Navbar