
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


const HostVanDetails = ({van}) => {
    const [nav,setNav] = useState('details')

    const VanDetail = ()=>{
        return(
            <div>
                {van?
                    <div>
                        <div className='flex flex-col justify-start items-ce gap-8'>

                            <img src={van.imageUrl} alt="img" className='w-[200px] ' />
                            <div>
                                <button className={`${van.type==='luxury'?'bg-black':''} ${van.type==='rugged'?'bg-green-800':''} ${van.type==='simple'?'bg-orange-800':''} text-white px-2 py-1 font-thin rounded-md sm:text-sm my-4 `}>{van.type}</button>
                                <p className='font-semibold text-xl'>{van.name}</p>
                                <p className='font-bold'>${van.price}
                                <span className='text-xs font-light'>/day</span></p>
                            </div>
                        </div>
                        <div className='my-8 pb-10'>
                            <Link to={`.`}  onClick={()=>setNav(prev=>'details')} className={`${nav==='details'?'font-semibold':'font-light hover:scale-105'} mr-6 text-xl inline-block opacity-60 hover:opacity-100 duration-75 transition-all`}>Details</Link>
                            <Link to={`pricing`}  onClick={()=>setNav(prev=>'pricing')} className={`${nav==='pricing'?'font-semibold':'font-light hover:scale-105'} mr-6 text-xl inline-block opacity-60 hover:opacity-100 duration-75 transition-all`}>Pricing</Link>
                            <Link to={`photos`}  onClick={()=>setNav(prev=>'photos')} className={`${nav==='photos'?'font-semibold':'font-light hover:scale-105'} mr-6 text-xl inline-block opacity-60 hover:opacity-100 duration-75 transition-all`}>Photos</Link>
                        </div>
                    </div> :
                    ''
                }
                

            </div>

        )
    }

  return (
    <div className=''>
        <Link to={'..'} relative='path' className='block my-8  text-gray-500 font-semibold'>&larr; Back to all Vans</Link>
        <div className='bg-white p-10 pb-0'>
            <VanDetail/>
        </div>
    </div>
  )
}

export default HostVanDetails