import React from 'react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import DetailsContents from '../components/childrenComponents/DetailsContents'


const Details = () => {
  return (
    <div className=''>
          <Hero Contents={DetailsContents}/>

          <div className=' mt-[200px] md:mt-[150px] lg:mt-[100px] '>
          </div>
    </div>
  )
}

export default Details