import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostPhotos = () => {
    const {van} = useOutletContext()
  return (
    <div>
        <img src={van?.imageUrl} alt="img" className='w-[200px]'/>
    </div>
  )
}

export default HostPhotos