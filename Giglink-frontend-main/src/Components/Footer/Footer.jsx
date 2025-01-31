import React from 'react'
import { useState } from 'react'
import Logo from '../../assets/Logo(white).svg'
import Instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import Linkedin from '../../assets/linkedin.svg'
import twitter from '../../assets/twitter.svg'
import { Link } from 'react-router-dom'


function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState(
    { 
        email: "", 
    }
)
// console.log(newsletterEmail)

    // function that tracks the change and updates the state
function handleChange(event) {
    const {value} = event.target
    setNewsletterEmail({email:value})    
}

const submitContact = (event) => {
    event.preventDefault();
    setNewsletterEmail({email:''})
};
  return (
    <>
      <div className='bg-[#1B0031] px-4 py-4 sm:py-20 lg:px-24 text-white flex flex-col '>
        <div className='flex flex-col  relative  w-full  mb-14 sm:-mb-9 gap-2  '>
          <img src={Logo} alt="" className='w-[155px]  h-[38px]  sm:w-[294px] sm:h-[72px]' />
          <p className='text-white/70  font-normal text-xs sm:text-base mb-2'> Creating opportunities for your passion</p>
          <div className='flex flex-row gap-4 sm:hidden items-center'>
            <a href="#" target={'_blank'} rel="noreferrer">
              <img src={facebook} alt="" className='w-6 h-6 ' />
            </a>
            <a href="https://instagram.com/giglinktech?igshid=NTc4MTIwNjQ2YQ==" target={'_blank'} rel="noreferrer">
              <img src={Instagram} alt="" className='w-6 h-6 ' />
            </a>
            <a href="https://www.linkedin.com/company/giglink/" target={'_blank'} rel="noreferrer">
              <img src={Linkedin} alt="" className='w-6 h-6 ' />
            </a>
            <a href="#" target={'_blank'} rel="noreferrer">
              <img src={twitter} alt="" className='w-6 h-6 ' />
            </a>
          </div>
          
          

        </div>
        <div className='flex flex-col w-full justify-center items-center'>
          <div className='flex flex-col sm:flex-row sm:gap-6 gap-4 sm:justify-center mb-8 sm:mb-14 self-start sm:self-center    text-white  text-base sm:text-xl'>
              <Link to="/"> <p className='font-medium'>Home</p> </Link>
                <a href="/#AboutUs"> <p className='font-medium'>About us</p> </a>
                <a href={"/#FAQ"}> <p className='font-medium'>FAQ&apos;s</p> </a>
                <a href="/#Support"> <p className='font-medium'>Support</p> </a>
                <Link to="/HowItWorks"> <p className='font-medium'>How it works</p> </Link>
            </div>
          <div className='text-center mb-2 sm:mb-12'>
            <h3 className='text-base font-medium sm:text-[32px] mb-1'>Subscibe to our newsletter</h3>
            <p className='text-[10px] font-normal sm:text-xl'>by joining our Newsletter you will be receiving monthly emails</p>
          </div>
          <form onSubmit={submitContact} className='flex justify-center  max-w-[300px] lg:w-[965px] sm:max-w-none mb-9 sm:mb-24'>
            <input
                className="bg-white focus:outline-none w-full text-black  py-2  pl-[10px] sm:py-[18px] border sm:pl-10 rounded-l-md rounded-r-none placeholder-[#707070]/70 sm:placeholder:text-[8px] sm:placeholder:text-lg"                  
                required          
                type='text'
                id="email"             
                name='email'
                placeholder="E-mail Address"
                onChange={handleChange}
                value={newsletterEmail.email}
            />  
            <button className='font-semibold text-xs sm:text-xl rounded-r-md py-3 sm:py-4 px-5 sm:px-16  bg-[#5C29C4]'>Subscribe</button> 
          </form>

        </div>
        <div className='flex items-center flex-row justify-between w-full'>
          <p className='text-[12px] sm:text-xl font-medium'>GigLinktechnologies ©2023, Terms and Services</p>
          <div className='sm:flex flex-row gap-4 sm:gap-6 items-center hidden'>
            <a href="#" target={'_blank'} rel="noreferrer">
              <img src={facebook} alt="" className='w-4 h-4 sm:w-6 sm:h-6' />
            </a>
            <a href="https://instagram.com/giglinktech?igshid=NTc4MTIwNjQ2YQ==" target={'_blank'} rel="noreferrer">
              <img src={Instagram} alt="" className='w-4 h-4 sm:w-6 sm:h-6' />
            </a>
            <a href="https://www.linkedin.com/company/giglink/" target={'_blank'} rel="noreferrer">
              <img src={Linkedin} alt="" className='w-4 h-4 sm:w-6 sm:h-6' />
            </a>
            <a href="#" target={'_blank'} rel="noreferrer">
              <img src={twitter} alt="" className='w-4 h-4 sm:w-6 sm:h-6' />
            </a>
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer