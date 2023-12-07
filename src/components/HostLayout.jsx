import React, { useState } from 'react'
import { Link, Outlet,} from 'react-router-dom'


const HostLayout = () => {

    const [nav,setNav] = useState('dashboard')
  return (
    <>
        
        <div className='w-[90%] mx-auto'>
            <Link to={'.'} onClick={()=>setNav(prev=>'dashboard')} className={`${nav==='dashboard'?'font-semibold':'font-light hover:scale-105'} sm:mr-6 mr-4 text-sm sm:text-xl inline-block opacity-60 hover:opacity-100 duration-75 transition-all`}>Dashboard</Link>
            <Link to={'income'} onClick={()=>setNav(prev=>'income')} className={`${nav==='income'?'font-semibold':'font-light hover:scale-105'} sm:mr-6 mr-4 text-sm sm:text-xl inline-block  opacity-60 hover:opacity-100 duration-75 transition-all`}>Income</Link>
            <Link to={'vans'} onClick={()=>setNav(prev=>'vans')} className={`${nav==='vans'?'font-semibold':'font-light hover:scale-105'} sm:mr-6 text-sm mr-4 sm:text-xl inline-block  opacity-60 hover:opacity-100 duration-75 transition-all`}>Vans</Link>
            <Link to={'reviews'} onClick={()=>setNav(prev=>'reviews')} className={`${nav==='reviews'?'font-semibold ':'font-light hover:scale-105 '} sm:mr-6  text-sm sm:text-xl inline-block  opacity-60 hover:opacity-100 duration-75 transition-all`}>Reviews</Link>
            <Outlet/>
        </div>
        
    </>
  )
   
}

export default HostLayout