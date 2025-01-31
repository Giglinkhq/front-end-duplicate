import React from 'react'
import Apple from '../../assets/apple.svg'
import PlayStore from '../../assets/playstore.svg'


function Hero() {
  return (
    <>
      <div id='head' className='flex flex-col mb-[26px] sm:mb-[59px] items-center justify-center text-center text-[#FFFFFF] HowItWorks pt-[83px] pb-[32px] w-full lg:pt-[353px] lg:pb-[299px]'>
        <h1 className='font-bold text-2xl lg:text-[57px] lg:leading-[67px] mb-5 sm:mb-14 max-w-[393px] sm:max-w-[1373px]'>A community where talents and their potential clients connect.</h1>
        <p className='font-semibold text-base sm:text-[32px] mb-4 sm:mb-6'>Download the Giglink App now</p>
        <div className='flex items-center  space-x-4 justify-center sm:space-x-6'>
              {/* App store */}
            <a href="#">
              <div className='bg-[#000000] py-2 px-[22px] rounded-lg flex items-center justify-center flex-row space-x-1'>
                <img src={Apple} alt="" className='w-6 h-6 ' />
                <div className=''>
                  <p className='text-white font-normal  text-[8px]'>Available on</p>
                  <p className='text-white font-bold text-[10px]'>App Store</p>

                </div>
              </div>
            </a>
            {/* Play Store */}
            <a href="#">
              <div className='bg-[#000000] py-2 px-[22px] rounded-lg flex items-center justify-center flex-row space-x-1'>
                <img src={PlayStore} alt="" className='w-6 h-6 ' />
                <div className=''>
                  <p className='text-white font-normal  text-[8px]'>Available on</p>
                  <p className='text-white font-bold text-[10px]'>Google Play</p>
                </div>
              </div>
            </a>
              
          </div>
      </div>
    
    </>
  )
}

export default Hero