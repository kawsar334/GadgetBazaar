import React from 'react'

const DashboardHero = ({ Contents }) => {
  return (
    <div className='bg-blue flex justify-center items-center flex-col py-7'>
      <Contents />
    </div>
  )
}

export default DashboardHero