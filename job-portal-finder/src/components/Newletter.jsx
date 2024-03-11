import React from 'react'
import{FaEnvelopeOpenText, FaRocket} from "react-icons/fa6"

const Newletter = () => {
  return (
    <div>
        <div>
         <h3 className='text-lg font-bold mb-2 flex items-center gap-2 text-black'>
            <FaEnvelopeOpenText/>
            Email me for jobs
         </h3>
         <p className='text-primary/75 text-base mb-4'>
            Send a email
         </p>
         <div>
            <input type='email' name="email" placeholder='name@gmail.com' className='w-full block py-2 pl-3 border focus:outline-none'>
            </input>
            <input type='submit' value={"Subscribe"} className='w-full block py-2 pl-3 border focus:outline-none bg-primary text-white'>
            </input>
         </div>
    </div>
    <div>
         <h3 className='text-lg font-bold mb-2 flex items-center gap-2 text-black'>
            <FaRocket/>
            Get Noticed
         </h3>
         <p className='text-primary/75 text-base mb-4'>
            Kick Start
         </p>
         <div>
            
            <input type='submit' value={"Resume upload"} className='w-full block py-2 pl-3 border focus:outline-none bg-primary text-white'>
            </input>
         </div>
    </div>
    </div>
  )
}

export default Newletter