import React from 'react'
import Apple from '../../assets/apple.svg'
import PlayStore from '../../assets/playstore.svg'
import { useLocation } from 'react-router-dom'


function Download() {
  const location = useLocation();
  // console.log(location.pathname)

  return (
    <>
      <div className={ ` ${location.pathname==='/'? ' download ':' how' } mb-11 sm:mb-36 mt-12 sm:mt-16 w-full  flex flex-col space-y-6 sm:space-y-12 justify-center items-center  py-20 sm:py-[202px] text-white` }>
        {/* <h1 className='text-xl md:text-5xl font-bold'>Download the Giglink App Now</h1> */}
        <h1 className='text-xl md:text-5xl font-bold text-center'>Be part of the solution we are building! Join the waitlist.</h1>
        <div className='flex flex-col space-y-2 sm:space-y-6'>
          {/* <p className='text-base sm:text-2xl '>Available on IOS and Andriod stores</p> */}
          {/* playstore and appstore download links */}
          <div className='flex items-center  space-x-4 justify-center sm:space-x-6'>
            <a href="https://mailchi.mp/f2767ec2c897/giglink-technologies" target={'_blank'} rel="noreferrer">
              <div className='bg-[#F2F2F2] py-4 px-[46px]  rounded-md'>
                <p className='text-[#5C29C4] font-semibold text-base'>Join waitlist</p>
              </div>
            </a>
              {/* App store */}
            {/* <a href="#">
              <div className='bg-[#000000] py-2 px-[22px] rounded-lg flex items-center justify-center flex-row space-x-1'>
                <img src={Apple} alt="" className='w-6 h-6 ' />
                <div className=''>
                  <p className='text-white font-normal  text-[8px]'>Available on</p>
                  <p className='text-white font-bold text-[10px]'>App Store</p>

                </div>
              </div>
            </a> */}
            {/* Play Store */}
            {/* <a href="#">
              <div className='bg-[#000000] py-2 px-[22px] rounded-lg flex items-center justify-center flex-row space-x-1'>
                <img src={PlayStore} alt="" className='w-6 h-6 ' />
                <div className=''>
                  <p className='text-white font-normal  text-[8px]'>Available on</p>
                  <p className='text-white font-bold text-[10px]'>Google Play</p>
                </div>
              </div>
            </a> */}
              
          </div>
        </div>
      </div>
    </>
  )
}

export default Download