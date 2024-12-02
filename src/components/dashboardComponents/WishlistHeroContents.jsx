import React from 'react'
import { NavLink } from 'react-router-dom'

const WishlistHeroContents = () => {
  return (
      <div className='flex justify-center items-center flex-col gap-4 '>
          <h1 className='text-white text-3xl'>Dashboard</h1>
          <p className='w-[95%] md:w-[70%] text-left md:text-center   text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
          <div className='flex justify-center items-center gap-2'>
              <NavLink to="/dashboard/cart" className='border rounded-full py-1 px-6 text-white'>Cart</NavLink>
              <NavLink to="/dashboard/wishlist" className='border rounded-full py-1 px-5 text-blue bg-white '>Wishlist</NavLink>
          </div>
      </div>
  )
}

export default WishlistHeroContents