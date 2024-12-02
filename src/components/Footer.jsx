import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='bg-[#FFFFFF] mt-[200px] w-full flex justify-center items-center flex-col p-8'>
      <div className='w-[100%] md:w-[80%] m-auto my-5  flex  justify-center items-start md:items-center  flex-col border-b pb-7'>
        <h1 className='text-[black] text-3xl'>Gadget Heaven</h1>
        <p className='text-[gray]'>Leading the way in cutting-edge technology and innovation.</p>
      </div>

      <div className="footer  text-neutral-content md:p-10 text-center flex flex-col md:flex-row justify-between md:items-center md:w-[60%] w-[100%] ">
        <nav>
          <h6 className="footer-title text-[black]">Services</h6>
          <Link to="/" className="link link-hover text-[gray]">Branding</Link>
          <Link to="/" className="link link-hover text-[gray]">Design</Link>
          <Link to="/" className="link link-hover text-[gray]">Marketing</Link>
          <Link to="/" className="link link-hover text-[gray]">Advertisement</Link>
        </nav>
        <nav>
          <h6 className="footer-title text-[black]">Company</h6>
          <Link to="#" className="link link-hover text-[gray]">About us</Link>
          <Link to="#" className="link link-hover text-[gray]">Contact</Link>
          <Link to="#" className="link link-hover text-[gray]">Jobs</Link>
          <Link to="#" className="link link-hover text-[gray]">Press kit</Link>
        </nav>
        <nav>
          <h6 className="footer-title text-[black]">Legal</h6>
          <Link to="#" className="link link-hover text-[gray]">Terms of use</Link>
          <Link to="#" className="link link-hover text-[gray]">Privacy policy</Link>
          <Link to="#" className="link link-hover text-[gray]">Cookie policy</Link>
        </nav>
      </div>
    </div>
  )
}
