import React from 'react'
import Arrow from '../../assets/arrow.svg';
import Arrow2 from '../../assets/arrow2.svg';

function Faq({ faq, index, toggleFAQ }) {
  const {open,question,answer} = faq
  return (
    <>
      <div
      className='bg-[#E0E0E0]/50 py-4 px-4 cursor-pointer'
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className=" flex justify-between text-left text-[#5C29C4]   ">
        <p className='text-xs sm:text-base max-w-[235px] sm:max-w-none font-semibold '>{question}</p>
        <img src={open ? Arrow2 :Arrow} alt=""  className=' w-6 h-6'/>
      </div>
      <div className={open ? ' opacity-1 text-xs   text-left sm:text-sm mt-2 sm:mt-4  ':' overflow-hidden text-xs  max-h-0 opacity-0 '}>{answer}</div>
    </div>
    </>
  )
}

export default Faq