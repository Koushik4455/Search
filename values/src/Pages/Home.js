import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='text-center'>
       <h1>Welcome</h1>
       <br/>
    <Link to='/Values'><button className='btn bg-primary text-white'>Values</button></Link>
    </div>
  )
}

export default Home