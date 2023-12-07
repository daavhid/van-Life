import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({setPage}) => {
  return (
    <div className='relative home h-[74vh] flex justify-center items-center after:absolute after:w-full after:h-[100%] after:bg-black z-10 after:opacity-25 after:-z-10'>

        <div className=' text-white  w-5/6 mx-auto '>
            <h2 className='text-2xl md:text-4xl font-bold'>You got the travel plans, we got the travel vans</h2>
            <p className='mt-5 mb-10'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip</p>
            <Link to={'/vans'} onClick={()=>setPage('vans')} className='bg-orange-500/90 w-1/2 block text-center rounded-md py-3 font-bold'>Find your van</Link>
        </div>
    </div>
  )
}

export default Home