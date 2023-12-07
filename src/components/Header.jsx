import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [page,setPage] = useState('home')
  return (
    <div>
        <nav className='' >
                <div className='  py-8 flex justify-between items-center  w-[90%] mx-auto text-gray-900'>
                    <Link onClick={()=>setPage(prev=>'home')}  className='font-bold text-xl md:text-4xl' to={'/'}>#VANLIFE</Link>
                    <div >
                        <Link   onClick={()=>setPage(prev=>'host')} className={`${page==='host'?'underline':''} mr-3 md:mr-6 `} to={'host'} >Host</Link>
                        <Link onClick={()=>setPage(prev=>'about')} to='about' className={`${page==='about'?'underline':''} mr-3 md:mr-6 `} >About</Link>
                        <Link onClick={()=>setPage(prev=>'vans')} to='vans' className={`${page==='vans'?'underline':''}`}>Vans</Link>
                    </div>
                </div>
                
        </nav>
    </div>
  )
}

export default Header