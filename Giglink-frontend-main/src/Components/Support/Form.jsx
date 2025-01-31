import React, { useState } from 'react'

function Form() {
  const [formData, setFormData] = useState(
    {
        name: "", 
        email: "", 
        message: "", 
    }
)
// function that handles change in input and updates the state
function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
        }
    })
    
}

const submitContact = async (event) => {
    event.preventDefault();
    setFormData({
      name: "", 
      email: "", 
      message: "", 
  })
};
  return (
    <>
      <form onSubmit={submitContact} className='flex flex-col justify-center w-full  px-4 lg:px-[414px] gap-4 sm:gap-8 mb-[200px]'>
        <div className='flex flex-col items-start'>
          <label htmlFor="name" className="text-[#5C29C4] text-base sm:text-xl font-semibold">Full Name</label>
          <input
              className="bg-white/20 w-full py-4 pl-4 border border-black/50 rounded-lg placeholder-black/60 placeholder:text-xs sm:placeholder:text-base"                  
              required
              type='text'
              id="name"
              name='name'
              placeholder="Enter Full Name"
              onChange={handleChange}
              value={formData.name}
          />       
        </div>
        <div className='flex flex-col items-start'>
          <label htmlFor="email" className="text-[#5C29C4] text-base sm:text-xl font-semibold">Email Address</label>
              <input
                  className="bg-white/20 w-full py-4 pl-4 border border-black/50 rounded-lg placeholder-black/60 placeholder:text-xs sm:placeholder:text-base"                  
                  required
                  id="email"
                  type="text"
                  placeholder="rachealmathew@sample.com"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
              />
        </div>
        <div className="flex flex-col items-start">
            <label htmlFor="message" className='text-[#5C29C4] text-base sm:text-xl font-semibold'>Your message</label>
            <textarea 
                className='bg-white/20 w-full  min-h-[200px] sm:min-h-[474px] px-[16px] py-[15px]  resize-none border border-black/50 rounded-lg placeholder-black/60 placeholder:text-xs sm:placeholder:text-base '
                id="message"
                value={formData.message}
                placeholder="Write a message"
                onChange={handleChange}
                name="message"
            />
        </div>

        <button className=" self-start text-white py-4 px-4 text-xs sm:text-base sm:px-5 bg-[#5C29C4] rounded-xl ">Send message</button>
      </form>
    </>
  )
}

export default Form