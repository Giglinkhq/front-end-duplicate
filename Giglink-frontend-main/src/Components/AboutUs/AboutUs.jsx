import React from 'react'
import Qualities from './Qualities'
import Phone from '../../assets/Phone-min.jpg'
import SinglePhone from '../../assets/SinglePhone-min.jpg'


function AboutUs() {
  return (
    <>
    <div >
      <Qualities/>
      {/* What are we */}
      <div id='AboutUs' className=' flex flex-col px-4 sm:flex-row-reverse  space-y-14 lg:pr-24 lg:pl-16 sm:mt-44 sm:space-y-0 lg:gap-x-52  items-center sm:justify-center '>
        <div className=' '>
          <h2 className='text-2xl text-[#5C29C4] font-semibold mb-6 lg:text-5xl '>Who are we?</h2>
          <p className='text-xs font-normal  lg:text-xl text-black/70 max-w-[361px] lg:max-w-[749px] leading-6  lg:leading-8  '>
            Giglink is a distinguished platform that facilitates connections between Creatives and clients,as well as between talent seekers and creatives.We offer creatives ample opportunities to follow their passion and secure engagements with clients in their desired locations.Moreover, Giglink provides a robust showcase platform where creatives can display their work, granting potential clients convenient access to highly skilled,vetted and verified talents in their vicinity.This ultimately saves clients valuable resources,including energy,time and finances.
            <br /><br />
            Irrespective of whether you possess expertise as a skilled drummer, Dj,producer,sound engineer,pianist, or any other proffessional ,Giglink assumes the pivotal role of being the indispensable link that connects you to your prospective clients. Simultaneously, it establishes a connection for clients to access a carefully curated roster of accomplished talents who have been thoroughly vetted and verified.
          </p>
        </div>
        <img src={Phone} alt="" className='w-64 h-[332px] lg:w-[497px] lg:h-[636px] ' />
      </div>
      {/* Why choose Giglink */}
      <div className='  flex flex-col lg:px-24  sm:flex-row space-y-12 sm:mt-28 mt-14 sm:space-y-0 lg:gap-10 items-center sm:justify-center '>
        <div className='  '>
          <h2 className='text-2xl text-[#5C29C4] font-semibold mb-6 lg:text-5xl '>Why choose Giglink?</h2>
          <p className='text-xs font-normal lg:text-xl text-black/70 max-w-[361px] lg:max-w-[749px] leading-6  lg:leading-8'>
          Are you a talented creative or performer looking to take your career to new heights? Look no further than Giglink, the premier booking platform designed to connect talented creatives with their dream gigs. With Giglink,your journey to success is just a click away.Here’s why choosing Giglink is the best decision you can make for your career aspirations:
            <br /><br />
            But with Giglink we are making the connection between talents and their prospective clients easy,accessible, and also making their transactions easy and fluid.
          </p>
        </div>
        <img src={SinglePhone} alt="" className=' sm:w-[591px] sm:h-[520px] ' />
      </div>

    </div>

    </>
  )
}

export default AboutUs