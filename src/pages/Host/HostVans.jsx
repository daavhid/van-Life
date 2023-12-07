import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { getVan, getVans } from '../../api';

export const loader = ()=>{
    return getVans('host/vans')
}

const HostVans = () => {
    const hostVans = useLoaderData()
    console.log(hostVans)

    
    const Host = ()=>{
        return (
            hostVans.map((hostVan,key)=>{
                return(
                    <Link to={`/host/vans/${hostVan.id}`} key={key} className='flex items-center bg-white p-4 mb-6'>
                        
                        <img src={hostVan.imageUrl} alt="img" className='w-[80px]' />
                        <div className='ml-8'>
                            <h2 className='font-bold'>{hostVan.name}</h2>
                            <p className='text-gray-500 text-sm'>${hostVan.price}
                            <span className='text-xs '>/day</span></p>
                        </div>

                    </Link>
                )
            })
        )
    }
  return (
    <div>
        <h1 className='font-bold text-3xl my-10'>Your Listed Vans </h1>
        <div className=' flex flex-col'>
            {<Host/>}
        </div>
        
    </div>
  )
}

export default HostVans