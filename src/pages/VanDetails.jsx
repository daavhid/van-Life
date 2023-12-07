import React, { useEffect, useState } from 'react'
import { useParams,Link,useLocation,useLoaderData } from 'react-router-dom'
import { getVan, getVans } from '../api'


export const loader = ()=>{
    return 'hey'
}

const VanDetails = () => {
    const [van,setVan] = useState(null)
    const id = useParams().id
    const location = useLocation().state?.search
    const type = useLocation().state?.type || 'all'
    // console.log(location)
    const data = useLoaderData()
    console.log(data)
    // useEffect(()=>{
    //     fetch(`/api/vans/${id}`)
    //         .then(res=>res.json())
    //         .then(data=>setVan(data?.vans))
    // },[id])
  return (
    <div className='w-[90%] mx-auto mb-16'>
        <Link to={`..${location}`} className='inline-block my-10 text-blue-500'>&larr; Back to {type} vans</Link>
        {van?
                <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
                    <img src={van.imageUrl} alt="img" className=' object-cover flex-1 h-[500px] rounded-lg ' />
                    <div className=' basis-5/6'>

                        <button className={`${van.type==='luxury'?'bg-black':''} ${van.type==='rugged'?'bg-green-800':''} ${van.type==='simple'?'bg-orange-800':''} text-white px-2 py-1 font-thin rounded-md sm:text-sm my-4 `}>{van.type}</button>
                        <p className='font-semibold text-xl'>{van.name}</p>
                        <p className='font-bold'>${van.price}
                        <span className='text-xs '>/day</span></p>
                        <p className='my-6'>{van.description}</p>
                        <Link className='bg-orange-500/90 w-full block text-center rounded-md py-3 font-bold text-white'>Rent this van</Link>
                    </div>
                </div>


                :<p>...loading</p>
        }
        
    </div>
  )
}

export default VanDetails