import React from 'react'
import Star from '../../assets/star.svg'
import Lightning from '../../assets/Lightning.svg'
import Money from '../../assets/Money.svg'


function Qualities() {
  return (
    <>
      <div className=' py-[69px] flex flex-col space-y-8 items-center justify-center sm:space-y-0 sm:space-x-24  sm:flex-row px-4 '>
        {/* 1st */}
        <div className='bg-[#5C29C4]/5 shadow-md rounded-xl py-6 px-4 flex flex-col items-center justify-center text-center '>
          <img src={Star} alt="" className='w-16 h-16 mb-6 ' />
          <h3 className='text-[#1B0031] font-semibold text-base sm:text-2xl mb-1'>Quality Creatives</h3>
          <p className='text-black/70 text-xs sm:text-base font-normal max-w-[316px] '>The world biggest community of vetted creatives with <span className='text-[#5C29C4]'>5-Star review.</span> </p>
        </div>
        {/* 2st */}
        <div className='bg-[#5C29C4]/5 shadow-md rounded-xl py-6 px-4 flex flex-col items-center justify-center text-center '>
          <img src={Lightning} alt="" className='w-16 h-16 mb-6 ' />
          <h3 className='text-[#1B0031] font-semibold text-base sm:text-2xl mb-1'>Fast bookings</h3>
          <p className='text-black/70 text-xs sm:text-base font-normal max-w-[316px] '>Make your bookings on our app at an average time of <span className='text-[#5C29C4]'>less than 30mins.</span> </p>
        </div>
        {/* 3st */}
        <div className='bg-[#5C29C4]/5 shadow-md rounded-xl py-6 px-4 flex flex-col items-center justify-center text-center '>
          <img src={Money} alt="" className='w-16 h-16 mb-6 ' />
          <h3 className='text-[#1B0031] font-semibold text-base sm:text-2xl mb-1'>No hidden fees</h3>
          <p className='text-black/70 text-xs sm:text-base font-normal max-w-[316px] '>No hidden fees, <span className='text-[#5C29C4]'>every quote </span> you recieve from a creative is all inclusive.  </p>
        </div>
      </div>
    </>
  )
}

export default Qualities