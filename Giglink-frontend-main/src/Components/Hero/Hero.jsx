import React from 'react'
import Apple from '../../assets/apple.svg'
import PlayStore from '../../assets/playstore.svg'
import Shield from '../../assets/shield.svg'
import Mobile from '../../assets/min1.png'


function Hero() {
  return (       
    <>  
      <div className='w-full flex flex-col '>
        <div className='bg-[#EFEAF9] sm:px-[110px]  flex flex-col items-center justify-center sm:gap-2  sm:flex-row pt-5 sm:pt-20'>
          <div className='sm:w-1/2 mb-14 '>
            <h1 className='max-w-[266px] text-xl lg:text-[57px] lg:leading-[67px] sm:max-w-none text-[#1B0031] font-bold mb-2 sm:mb-6'>The Best Way To Find And Book <span className='pacifico text-[#5C29C4] '>Professional</span> and <span className='pacifico text-[#5C29C4]'>vetted</span> Creatives.</h1>
            <p className='text-[#000000]/70 font-normal max-w-[267px] text-[10px] sm:text-xl sm:max-w-[720px] mb-8 sm:mb-16'>Gain access to select group of highly skilled and proffessional creatives who have undergone thorough vetting, allowing you to save precious time and effort.Giglink also provides a platform that showcases talented individuals,offering them opportunities to pursue their passion and showcase their abilities.</p>
            {/* playstore and appstore download links */}
            <div className='flex items-center justify-center sm:justify-start  space-x-4 sm:space-x-6'>
            <a href="https://mailchi.mp/f2767ec2c897/giglink-technologies" target={'_blank'} rel="noreferrer">
                <div className='bg-[#5C29C4] py-4 px-[46px]  rounded-md'>
                  <p className='text-[#F2F2F2] font-semibold text-base'>Join waitlist</p>
                </div>
              </a>
              {/* App store */}
            {/* <a href="#">
              <div className='bg-[#000000] py-2 px-[22px] rounded-xl flex items-center justify-center flex-row space-x-1'>
                <img src={Apple} alt="" className='w-6 h-6 ' />
                <div className=''>
                  <p className='text-white font-normal  text-[8px]'>Available on</p>
                  <p className='text-white font-bold text-[10px]'>App Store</p>

                </div>
              </div>
            </a> */}
            {/* Play Store */}
            {/* <a href="#">
              <div className='bg-[#000000] py-2 px-[22px] rounded-xl flex items-center justify-center flex-row space-x-1'>
                <img src={PlayStore} alt="" className='w-6 h-6 ' />
                <div className=''>
                  <p className='text-white font-normal  text-[8px]'>Available on</p>
                  <p className='text-white font-bold text-[10px]'>Google Play</p>
                </div>
              </div>
            </a> */}

            </div>
          </div>
          <div className='sm:w-1/2 sm:flex sm:justify-end'>
            <img src={Mobile} alt="" className='w-[258px] h-[297px] lg:w-[589px] lg:h-[675px]'/>
            {/* <img src={Mobile} alt="" className='hidden sm:block sm:w-[589px] sm:h-[675px]'/> */}
          </div>
        </div>
        <div className='bg-[#A6E9C8]/80 flex items-center  space-x-2 py-6 pl-5 sm:pl-28 sm:py-[54px]'>
          <img src={Shield} alt="" className='w-4 h-4 sm:w-6 sm:h-6' />
          <p className='text-black/75 text-base font-normal'>Booking Protection</p>
        </div>
      </div>
    </>
  )
}

export default Hero 