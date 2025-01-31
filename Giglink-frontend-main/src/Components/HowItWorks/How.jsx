import React from 'react'
import choose from '../../assets/choose.jpg'
import create from '../../assets/create.jpg'
import find from '../../assets/find.jpg'

function How() {
  return (
    <>
      <div className='text-center mb-40'>
        <h1 className='text-2xl sm:text-5xl font-semibold text-[#5C29C4] mb-24 sm:mb-36'>How Giglink works</h1>
        <div className='flex flex-col justify-center items-center space-y-[140px] sm:space-y-[210px]'>
          <div className='flex flex-col justify-center items-center md:flex-row-reverse space-y-[77px] sm:space-y-0 sm:gap-[232px] px-9'>
            <div className='text-center sm:text-left '>
              <h3 className='font-semibold text-2xl sm:text-5xl mb-4'>1.Choose service option</h3>
              <p className='text-base sm:text-2xl font-normal max-w-[324px] sm:max-w-[628px] sm:text-left'>choose a service option either as a talent hire or a talent,this gives you an opportunity to choose either being a service provider or service scout.</p>
            </div>
            <img src={choose} alt="" className='sm:w-[300px]' />
          </div>
          <div className='flex flex-col justify-center items-center md:flex-row-reverse space-y-[77px] sm:space-y-0 sm:gap-[232px] px-9'>
            <div className='text-center sm:text-left '>
              <h3 className='font-semibold text-2xl sm:text-5xl mb-4'>2.Create an Account.</h3>
              <p className='text-base sm:text-2xl font-normal max-w-[324px] sm:max-w-[628px] sm:text-left'>Sign up on Giglink mobile app to get started with accessing service providers or becoming a service provider.</p>
            </div>
            <img src={create} alt="" className='sm:w-[300px]' />
          </div>
          <div className='flex flex-col justify-center items-center md:flex-row-reverse space-y-[77px] sm:space-y-0 sm:gap-[232px] px-9'>
            <div className='text-center sm:text-left '>
              <h3 className='font-semibold text-2xl sm:text-5xl mb-4'>3.Find a talent as a client.</h3>
              <p className='text-base sm:text-2xl font-normal max-w-[324px] sm:max-w-[628px] sm:text-left'>You can find a talent within your location,chat,call and negotiate with them and get the best talent for your budget,saving you time and energy.</p>
            </div>
            <img src={find} alt="" className='sm:w-[300px]' />
          </div>
        </div>
      </div>
    </>
  )
}

export default How