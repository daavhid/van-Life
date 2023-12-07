import React from 'react'
import aboutimg from '../assets/images/about-hero.png'
import { Link } from 'react-router-dom'

const About = ({setPage}) => {
  return (
    <div className='w-[90%] my-16 mb-20 mx-auto'>
        <img src={aboutimg} alt="img" />
        <h2 className='font-bold text-2xl my-6'>Dont squeeze in a sedan when you could relax in a van.</h2>
        <p className='text-sm mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus a minima cupiditate pariatur esse voluptate unde dicta, magni adipisci. Ex quisquam maiores exercitationem laborum ipsa eaque ducimus soluta ab assumenda.</p>
        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, nihil.</p>
        <div className='my-6 font-semibold bg-orange-300 p-10'>
            <p className=''>Your destination is waiting. </p>
            <p className='mb-8'>Your van is ready.</p>
            <Link to={'/vans'} onClick={()=>setPage('vans')}  className='bg-black rounded-md text-white px-3 py-4'>Explore our vans</Link>
        </div>
    </div>
  )
}

export default About