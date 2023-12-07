import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

const  HostDetail = () => {
    const {van} = useOutletContext()
  return (
    <>
        {van?  <div className='text-gray-600 font-semibold'>
            <p><span className='font-bold text-gray-700'>Name :</span>  {van?.name}</p>
            <p className='my-6'><span className='font-bold text-gray-700'>Category :</span> {van?.type}</p>
            <p><span  className='font-bold text-gray-700'>Description :</span>{van?.description}</p>
        </div>:'..loading'}
       
    </>
  )
}

export default HostDetail