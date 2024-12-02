import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import banner from "../assets/banner.jpg"
import DetailsContents from './childrenComponents/DetailsContents';
import HomeContents from './childrenComponents/HomeContents';

export const Hero = ({ Contents }) => {

  const location = useLocation().pathname;

  return (
    <div className='bg-blue h-[500px] relative '>
      <div className='flex justify-center items-center flex-col  gap-4 capitalize'>
        <h1 className='text-left md:text-center text-2xl md:text-3xl   py-3 font-semibold text-[white] w-[95%] md:w-[60%]'>Upgrade Your Tech Accessorize with  Gadget Heaven Accessories</h1>
        <p className='text-left  md:text-center  mb-8 text-[lightgray] w-[95%] md:w-[60%] '>Explore the latest gadgets that will take your experience to the next level. From smart devices to  the coolest accessories, we have it all!</p>
       {location === "/" && <a href="#products" className='border py-1 px-3 rounded-full bg-[white] text-blue font-bold'>Shop Now</a>}
        </div>
        
    <Contents />
       
    </div>
  )
}
