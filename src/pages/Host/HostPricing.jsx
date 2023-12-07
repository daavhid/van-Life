import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostPricing = () => {
    const {van} = useOutletContext()
  return (
    <div>
        <p className='text-2xl font-semibold'>${van?.price}<span className='text-sm font-thin'>/day</span></p>
    </div>
  )
}

export default HostPricing
