import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[70vh] gap-32'>
        <h1 className='text-5xl'>Sorry the page you were looking for was not found</h1>
        <Link to={'..'} className='bg-black inline-block p-12  text-white'>Back to Home Page</Link>
    </div>
  )
}

export default NotFound

