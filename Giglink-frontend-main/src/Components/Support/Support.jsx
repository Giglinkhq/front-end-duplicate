import React from 'react'
import Form from './Form'

function Support() {
  return (
    <>
      <div className='flex flex-col justify-center items-center mt-16 sm:mt-36 text-center' id='Support'>
        <h1 className='text-xl sm:text-5xl font-semibold text-[#5C29C4] mb-6 sm:mb-10'>Contact Our Support Team</h1>
        <h3 className='text-[#1B0031] text-base tracking-[0.4px] text-center sm:text-2xl max-w-[298px] sm:max-w-none mb-4'>Have a question or a feedback? Get in touch with us.</h3>
        <p className='text-black/70  text-xs sm:text-base max-w-[246px] sm:max-w-none mb-4 sm:mb-16'>Fill up the form and our team will get back to you within 24hrs</p>
        <Form/>
      </div>
    </>
  )
}

export default Support