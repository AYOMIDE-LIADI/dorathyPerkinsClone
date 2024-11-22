import React from 'react'
import { CounterContext } from '../../context/cartCounterContext';
import { useContext } from 'react';


const EditRegDetails = () => {
    const {handleSubmit1,handleChange1,error1,inputValue1} = useContext(CounterContext)

  return (
    <div className='bg-gray-100 flex justify-center items-center'>
    <div className='bg-white p-[30px] my-[100px]'>
        <p className='text-center text-[30px]'>Edit Account</p>
        <p  className='text-center text-[16px] w-[500px] pt-[14px]'>Once your account is created, you will be able to sign in and shop with the same details across our entire <span className='cursor-pointer'><u>family of brands.</u></span>  </p>
        
        <form onSubmit={handleSubmit1}  className='pt-[20px]' action="">
            <div>
                <p className='text-[16px] pt-[10px]'>First Name</p>
                <input name='first_name' value={inputValue1.first_name} className='border  w-[500px] py-[10px] rounded-sm px-[8px]' type="text" onChange={handleChange1} />
                {error1.first_name&& <p className='text-red-700 text-[10px] absolute'>{error1.first_name}</p>}
            </div>
            <div>
                <p className='text-[16px] pt-[10px]'>Last Name</p>
                <input name='last_name' value={inputValue1.last_name} className='border  w-[500px] py-[10px] rounded-sm px-[8px]' type="text" onChange={handleChange1}/>
                {error1.last_name&& <p className='text-red-700 text-[10px] absolute'>{error1.last_name}</p>}

            </div>
          
            <div>
               
                <div>
                    <p className='text-[16px] pt-[10px]'>Email Address</p>
                    <input name='email' value={inputValue1.email} className='border  w-[500px] py-[10px] rounded-sm px-[8px]' type="text"onChange={handleChange1} />
                    {error1.email&& <p className='text-red-700 text-[10px] absolute mb-[-150px]'>{error1.email}</p>}
                </div>
                
                <div>
                    <p className='text-[16px] pt-[10px]'>Phone Number</p>
                    <input name='phone' autoComplete="username" value={inputValue1.phone} className='border  w-[500px] py-[10px] rounded-sm px-[8px]' type="text" onChange={handleChange1} />
                    {error1.phone&& <p className='text-red-700 text-[10px] absolute mb-[-150px]'>{error1.phone}</p>}
                </div>
               
                
                <p className='text-[16px] pt-[10px] my-3'>I'd like to receive exclusive discounts and news from <br /> Debenhams by:</p>
                <div>
                    <div className='flex gap-2 items-center '>
                        <input   type="checkbox" />
                        <p className='text-[16px]'>Email</p>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <input  type="checkbox" />
                        <p className='text-[16px]'>Post</p>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <input  type="checkbox" />
                        <p className='text-[16px]'>SMS</p>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <input  type="checkbox" />
                        <p className='text-[16px]'>Email, post and SMS* from carefully selected third parties</p>
                    </div>
                </div>
                
                <button className='bg-black text-white rounded-full px-[40px] py-[9px] font-bold w-[500px] mt-[20px] hover:bg-slate-700'> EDIT ACCOUNT</button>

            </div>

        </form>
    </div>
</div>
  )
}

export default EditRegDetails
