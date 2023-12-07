import React, { useEffect, useState } from 'react'
import HostVanDetails from '../pages/Host/HostVanDetails'
import { Link, Outlet, useParams } from 'react-router-dom'

const HostVanLayout = () => {
    const [van,setVan] = useState(null)

    const params = useParams().id
    useEffect(()=>{
        fetch(`/api/host/vans/${params}`)
            .then(res=>res.json())
            .then(data=>setVan(data?.vans))
    },[params])
    
  return (
    <>

        
        <HostVanDetails van={van}/>
        <div className='bg-white p-10  my-16 mt-8'>
            <Outlet context={{van}}/>
        </div>
    </>
  )
}

export default HostVanLayout