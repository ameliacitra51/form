import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div>
      <h1 className='text-center font-bold text-2xl'>Welcome to the Form Register</h1>
      <div className='text-center pt-5 text-2xl text-blue-500'>
      <Link to="/register"><b>Register</b></Link>
      </div>
    </div>
  )
}

export default Index
