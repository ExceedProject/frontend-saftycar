
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
      <h2>Home</h2>
      <Link to="/Info"><h3>Get more Info</h3></Link>
      <Link to="/Graph"><h3>Get Temperature Graph</h3></Link>
    </div>


  )
}

export default Home