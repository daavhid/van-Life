import React, { useEffect, useState } from 'react'
import { Link, useSearchParams,useLoaderData } from 'react-router-dom'
import { getVans } from '../api'


export const loader = ()=>{
    return getVans('vans')
}

const Vans = () => {
    const [searchParams,setSearchParams] = useSearchParams()
    const [error, setError] = useState(null)
    const vans = useLoaderData()


    const typeFilter = searchParams.get('type')
    
    
    const filteredList = typeFilter?vans.filter((van)=>{
        return typeFilter === van.type
    }):vans

    if (error){
        return <h1>There was an error : {error.status}</h1>
    }


    const VanElement = ()=>{
        return(
            filteredList?.map((van,key)=>{
                return (
                    
                    <div key={key} className='mx-auto'>
                        <Link to={`${van.id}`} state={{search:`?${searchParams.toString()}`,type:typeFilter}}>
                            <img src={van.imageUrl} alt="" className=' w-full rounded-lg object-contain' />
                            <div className='flex justify-between'>
                                <div>
                                    <p className='font-semibold text-xl'>{van.name}</p>
                                    <button className={`${van.type==='luxury'?'bg-black':''} ${van.type==='rugged'?'bg-green-800':''} ${van.type==='simple'?'bg-orange-800':''} text-white px-2 py-1 font-thin rounded-md sm:text-sm `}>{van.type}</button>
                                </div>
                                <p className='font-bold'>${van.price} <br />
                                <span className='text-xs block'>/day</span></p>
        
                            </div>
                        </Link>
                        
                    </div>
                )
            })
        )
       
    }
    const handleFilterChange = (key,value)=>{
        setSearchParams(prevParams=>{
            if (value===null){
                prevParams.delete(key)
            }else{
                prevParams.set(key,value)
            }
            return prevParams
        })

    }
  return (
    <div className=''>
        <p className='w-[90%] mx-auto font-semibold text-2xl md:text-4xl'>Explore our van option</p>
        <div className='w-[90%] mx-auto mt-6'>
            <button  onClick={()=>handleFilterChange('type','simple')} className={` ${typeFilter==='simple'?'bg-orange-800 text-white':'bg-orange-300/50'}  px-3 py-1 md:px-4 md:py-2 inline-block text-sm bg-orange-300/50 mr-4 md:mr-6 rounded-[15px]`}>Simple</button>
            <button onClick={()=>handleFilterChange('type','luxury')} className={` ${typeFilter==='luxury'?'bg-black text-white':'bg-orange-300/50'} px-3 py-1 md:px-4 md:py-2 inline-block  text-sm  mr-4 md:mr-6 rounded-[15px]`}>Luxury</button>
            <button onClick={()=>handleFilterChange('type','rugged')} className={` ${typeFilter==='rugged'?'bg-green-500 text-white':'bg-orange-300/50'} px-3 py-1 md:px-4 md:py-2 inline-block  text-sm  mr-4 md:mr-6 rounded-[15px]`}>Rugged</button>
            {typeFilter?<button onClick={()=>handleFilterChange('type',null)} className=' px-3 py-1 md:px-4 md:py-2 inline-block ml-16   text-sm underline text-blue-400 rounded-[15px]'>Clear filter</button>:null}
            
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 mx-auto w-[90%] gap-8 my-12'>
            {<VanElement/>}
            
        </div>
    </div>
  )
}

export default Vans