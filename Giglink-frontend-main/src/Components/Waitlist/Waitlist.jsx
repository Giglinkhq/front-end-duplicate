import React, { useState } from 'react'
import Close from '../../assets/close.svg'


const Waitlist = ({setWaitlist}) => {
  const [mail, setMail] = useState(
    { 
        email: " ", 
    }
)
// console.log(email)

const closeWaitlist = () => {
    setWaitlist(false)

}
    // function that tracks the change and updates the state
function handleChange(event) {
    const {value} = event.target
    setMail({email:value})    
}

const submitContact =  (event) => {
    event.preventDefault();
    setMail({email:''})
};

  return (
    <div className='fixed bg-black/70 z-50 top-0 bottom-0 left-0 right-0 flex justify-center items-center px-4'>
      <div className='bg-white flex flex-col text-left sm:px-6 sm:pt-9 px-[19px] pt-[18px] '>
        <div className='self-end mb-3 sm:mb-8  'onClick={closeWaitlist} >
              <img alt='' src={Close} width={30} height={30} />
        </div>
        <h4 className='text-[#5C29C4] font-semibold sm:max-w-[736px] text-xl sm:text-[32px] sm:leading-[48px] mb-9 sm:mb-4'>Be part of the solution we are building! Join the waitlist.</h4>
        <form onSubmit={submitContact} className='flex flex-col gap-10 sm:gap-[92px]  lg:w-[965px] mb-9 sm:mb-24'>
          <div>
            <label htmlFor="email" className='text-[#5C29C4] font-semibold text-base sm:text-2xl mb-4 block'>Email Address</label>
            <input
                className="bg-white focus:outline-none w-full text-black  py-2  pl-[5px] sm:py-[18px] border border-[#5C29C4] sm:pl-4 rounded-md"                  
                required          
                type='text'
                id="email"             
                name='email'
                onChange={handleChange}
                value={mail.email}
            />  

          </div>
          <button className='font-semibold self-center w-full text-xs text-white sm:text-xl rounded-md py-3 sm:py-4 px-5 sm:px-16  bg-[#5C29C4]'>Join waitlist</button> 
        </form>
      </div>
    </div>
  )
}

export default Waitlist