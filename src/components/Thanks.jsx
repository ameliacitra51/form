import React from 'react'
import { Link } from 'react-router-dom'

const Thanks = () => {
  return (
    <div className='h-screen text-center pt-5 text-2xl'>
      <h1 className='text-center font-bold text-2xl'>Thank You!!</h1>
      <br />
      <Link to='/' className='text-blue-400 font-bold'>Back to Home</Link>
    </div>
  )
}

export default Thanks
