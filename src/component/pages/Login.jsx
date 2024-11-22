import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CounterContext } from '../../context/cartCounterContext';

const Login = () => {
     const { loginError,setLoginError,loginValue,setLoginValue,validateLogin,handleLoginChange,handleLoginSubmit} = useContext(CounterContext)

  return (
    <div>
          <div className='bg-gray-100 '>
                    <div className='bg-black w-full py-[6px] flex text-white text-[16px]  justify-center items-center '>
                    <p>CLICK HERE FOR 15% OFF</p>
                    </div>
                    <div className='flex px-[250px] py-[100px] gap-[30px]'>
                    <div className='bg-white p-[20px] items-center'>
                         <p className='text-[20px] pb-[25px]'>Sign In</p>
                         <form onSubmit={handleLoginSubmit}>
                              <div>
                                   <p className='text-[16px]'>Email Address</p>
                                   <input name='email' value={loginValue.email} className='w-[430px] border py-[5px] px-[5px]' type="text" onChange={handleLoginChange}/>
                                   {loginError.email&& <p className='text-red-700 text-[10px] absolute'>{loginError.email}</p>}
                              </div>
                              <div>
                                   <p className='text-[16px] pt-[10px] font-sans '>Password</p>
                                   <input name='password' value={loginValue.password} className='w-[430px] border py-[5px] px-[5px]' type="password" onChange={handleLoginChange}/>
                                   {loginError.password&& <p className='text-red-700 text-[10px] absolute'>{loginError.password}</p>}
                              </div>
                              <p className='flex justify-end pt-[10px]'><u>Forgot Password?</u></p>
                              <button className='bg-black text-white rounded-full px-[40px] py-[9px] font-bold w-[430px] mt-[40px] hover:bg-slate-700'> SIGN IN</button>
                         </form>
                         </div>


                    <div className='bg-white p-[30px]'>
                         <p className='text-[20px] pb-[25px]'>New to Dorothy Perkins?</p>
                         <p className='text-[14px]'>Create an account to check out faster in the future
                                   and receive emails about your orders, new products, 
                              events and special offers!
                         </p>
                         <Link to={`/registration/`}>
                                   <button className='bg-black text-white rounded-full px-[40px] py-[9px] font-bold w-[430px] mb-[10px] mt-[20px] hover:bg-slate-700'> CREATE ACCOUNT</button>
                         </Link>
                         <p className='text-[14px] mb-[-10px]'>Already Registered?</p>
                         <Link to={`/EditRegDetails/`}>
                                   <button className='bg-black text-white rounded-full px-[40px] py-[9px] font-bold w-[430px] my-[20px] hover:bg-slate-700'> EDIT REGISTRATION DETAILS</button>
                         </Link>
                         <p className='text-[14px] mb-[-10px]'>Password isues?</p>
                         <Link to={`/ChangePassword/`}>
                                   <button className='bg-black text-white rounded-full px-[40px] py-[9px] font-bold w-[430px] mt-[15px] hover:bg-slate-700'> CHANGE PASSWORD</button>
                         </Link>
                    </div>    
                    </div>
          </div>
    </div>
  )
}

export default Login