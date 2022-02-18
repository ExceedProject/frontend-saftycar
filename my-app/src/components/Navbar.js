
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav>
          <h1>Title</h1>
          <Link to="/Home"><h3>Home</h3></Link>
      </nav>
  )
}

export default Navbar