import React, { useEffect, useState } from 'react'
import Logo from '../../assets/Logo.svg'
import Hamburger from '../../assets/Hamburger.svg'
import Close from '../../assets/close.svg'
import { useLocation } from 'react-router-dom'
import {Link} from "react-router-dom";



function Navbar() {
  const [nav, setNav] = useState(false);

  const location = useLocation();

  // console.log(location)
  useEffect(() => {
		setNav(false);
	}, [location.hash]);


  const handleNav = () => {
		setNav(!nav);
	};
  return (
    <>
      <div className='sticky top-0 z-40 bg-white w-full  px-4 py-6   lg:px-[100px] lg:py-5'>
        {/* mobile */}
        <div className='flex flex-row items-center justify-between md:hidden'>
          <img src={Logo} alt="" className='w-[135px] h-[33px] ' />
          {!nav && <img src={Hamburger} alt="" className='w-9 h-9' onClick={handleNav}  />}
        </div>
        {/* Desktop */}
        <div className='hidden flex-row items-center justify-between md:flex'>
          <img src={Logo} alt="" className='w-[157px] h-12' />
          <div className='flex flex-row space-x-10 items-center'>
            <Link to="/"> <p className='font-medium text-base'>Home</p> </Link>
            <a href="#AboutUs"> <p className='font-medium text-base'>About us</p> </a>
            <a href={"#FAQ"}> <p className='font-medium text-base'>FAQ&apos;s</p> </a>
            <a href="#Support"> <p className='font-medium text-base'>Support</p> </a>
            {/* <Link to="/HowItWorks"> <p className='font-medium text-base'>How it works</p> </Link> */}
          </div>
          <div className='flex gap-8 '>
              {/* waitlist button */}
              <a href="https://mailchi.mp/f2767ec2c897/giglink-technologies" target={'_blank'} rel="noreferrer">
                <div className='border-[#5C29C4] border py-4 px-[46px]  rounded-md'>
                  <p className='text-[#5C29C4] font-semibold text-base'>Join waitlist</p>
                </div>
              </a>
              {/* download button */}
              {/* <a href="#">
                <div className='bg-[#5C29C4] py-4 px-5 rounded-md'>
                  <p className='text-[#F2F2F2] font-semibold text-base'>Download the App</p>
                </div>
              </a> */}

          </div>
        </div>

        <div
				className={
					!nav
						? "fixed right-[-100%] top-0 duration-700 bg-[#3C3C3C] ease-in-out h-full"
						: "fixed right-0 top-0 w-full duration-700   flex flex-row justify-start items-start ease-in-out h-full"
				}>
				{/* right Side menu */}
				<div className='w-full px-5 py-10 space-y-16 flex bg-white flex-col ease-in-out justify-start items-start  h-full'>
					<div className='self-end  ' onClick={handleNav}>
						<img alt='' src={Close} width={36} height={36} />
					</div>
					<div className=' space-y-8 flex flex-col w-full justify-center items-center'>
            <div className='flex flex-col space-y-8 items-center'>
              <Link to="/"> <p className='font-medium text-base'>Home</p> </Link>
              <a href="#AboutUs"> <p className='font-medium text-base'>About us</p> </a>
              <a href={"#FAQ"}> <p className='font-medium text-base'>FAQ&apos;s</p> </a>
              <a href="#Support"> <p className='font-medium text-base'>Support</p> </a>
              {/* <Link to="/HowItWorks"> <p className='font-medium text-base'>How it works</p> </Link> */}
            </div>
            <div className='flex flex-col gap-8'>
            {/* waitlist button */}
            <a href="https://mailchi.mp/f2767ec2c897/giglink-technologies" target={'_blank'} rel="noreferrer">
              <div className='bg-[#5C29C4] py-4 px-[46px]  rounded-md'>
                <p className='text-[#F2F2F2] font-semibold text-base'>Join waitlist</p>
              </div>
              </a>
            {/* download button */}
            {/* <a href="#">
              <div className='bg-[#5C29C4] py-4 px-5 rounded-md'>
                <p className='text-[#F2F2F2] font-semibold text-base'>Download the App</p>
              </div>
            </a> */}

            </div>
					</div>
				</div>
			</div>
      </div>
    </>
  )
}

export default Navbar