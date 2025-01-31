import React, { useState } from 'react'
import Faq from './Faq';
import Questions from './Questions';

function Faqs() {
  const [faqs, setFaqs] = useState(Questions)
  
  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        // console.log(faq)

        return faq;
      })
    );
    
  };

  return (
    
    <>
      <div className='w-full  text-center ' id='FAQ'>
        <h1 className='text-[#5C29C4] text-xl font-semibold sm:text-5xl pb-12 sm:pb-16'>Frequently Asked Question’s</h1>
        <div className=" flex flex-col gap-4 sm:gap-8 px-4 lg:px-[269px]">
          {faqs.map((faq, index) => (
            <Faq faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>

      </div>
    </>
  )
}

export default Faqs