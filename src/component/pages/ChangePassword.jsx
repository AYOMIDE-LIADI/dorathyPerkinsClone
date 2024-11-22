import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../../context/cartCounterContext'

const ChangePassword = () => {
    const {changePasswordSubmit,handleinputchange223,passwordChangeError,passwordChange} = useContext(CounterContext)

  return (

    <div className='bg-gray-100 flex justify-center min-h-screen items-center  '>
        <div className='bg-white p-[30px]  mt-[-70px]'>
            <p className='text-center text-[30px]'>Change Password</p>
            <form onSubmit={changePasswordSubmit}  className='pt-[20px]' >
                
                <div>
                    <p className='text-[16px] pt-[10px]'>Old Password </p>
                    <input name='old_password' value={passwordChange.old_password} className='border  w-[500px] py-[10px] rounded-sm px-[8px]' type="Password" id='firstname' onChange={handleinputchange223} />
                    {passwordChangeError.old_password&& <p className='text-red-700 text-[10px] absolute'>{passwordChangeError.old_password}</p>}
                </div>
                <div>
                    <p className='text-[16px] pt-[10px]'>New password</p>
                    <input name='new_password' value={passwordChange.new_password}  className='border  w-[500px] py-[10px] rounded-sm px-[8px]' type="Password" id='lastname' onChange={handleinputchange223}/>
                    {passwordChangeError.new_password&& <p className='text-red-700 text-[10px] absolute'>{passwordChangeError.new_password}</p>}
                </div>
                <p className='mt-5 text-[14px]'>*Your password must be at least 5 characters long</p>
                <p className='mt-1 text-[14px]'>*New password must differ from the existing one.</p>
                <div>
                    <button className='bg-black text-white rounded-full px-[40px] py-[9px] font-bold w-[500px] mt-[20px] hover:bg-slate-700'> UPDATE </button>
                </div>

            </form>
        </div>
   </div>
  )
}

export default ChangePassword
