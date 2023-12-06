import React from 'react'
import Cards from './Cards'

const ForeGround = () => {
  return (
    <div className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-shrink-0 flex-wrap '>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        
    </div>
  )
}

export default ForeGround