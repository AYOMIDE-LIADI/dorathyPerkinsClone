import React from 'react'
import { SlWallet } from "react-icons/sl";

const Floater = () => {
    return (
        <div className='px-[40px] cursor-pointer'>
        <div className='relative h-[90px] w-[90px]'>
          <div className='bg-pink-300 rounded-full h-[65px] w-[65px] flex justify-center items-center fixed bottom-12 left-8'>
            <SlWallet size={34} />
            <div className='absolute rounded-full bg-white h-[25px] w-[25px] flex items-center justify-center top-0 right-0 text-[12px]'>
              0
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default Floater