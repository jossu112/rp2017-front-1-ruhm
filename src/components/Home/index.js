import React from 'react'
import { Link } from 'react-router-dom'

import './Home.scss'

const Home = () => {
  return (
    <div id='home'>
      <h1>Welcome!</h1>
      <Link to='/topics'>Topics</Link>
    </div>
  )
}

export default Home
