import React from 'react'
import eyess from '../images/eye-with-thick-outline-variant.png'
import { TbCheckbox } from "react-icons/tb";
import { CounterContext } from '../../context/cartCounterContext';
import { useContext } from 'react';

const Registration = () => {

    const {handleSubmit,handleChange,error,inputValue} = useContext(CounterContext)
  return (
    <div className='bg-gray-100 flex justify-center items-center'>
            <div className='bg-white p-[30px] my-[100px]'>
                <p className='text-center text-[30px]'>Create Account</p>
                <p  className='text-center text-[16px] w-[500px] pt-[14px]'>Once your account is created, you will be able to sign in and shop with the same details across our entire <span className='cursor-pointer'><u>family of brands.</u></span>  </p>
                
                <form onSubmit={handleSubmit}  className='pt-[20px]' action="">
                    <div>
                        <p className='text-[16px]'>Title (Optional)</p>
                        <select  className='border  w-[500px] py-[10px] rounded-sm' id="identify">
                                <option value="">Please Select</option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Miss">Miss</option>
                                <option value="Ms">Ms</option>
                                <option value="Mx">Mx</option>
                                <option value="Dr">Dr</option>
                        </select>
                    </div>
                    <div>
                        <p className='text-[16px] pt-[10px]'>First Name</p>
                        <input name='first_name' value={inputValue.first_name} className='border  w-[500px] py-[10px] rounded-sm px-[8px]' type="text" onChange={handleChange} />
                        {error.first_name&& <p className='text-red-700 text-[10px] absolute'>{error.first_name}</p>}
                    </div>
                    <div>
                        <p className='text-[16px] pt-[10px]'>Last Name</p>
                        <input name='last_name' value={inputValue.last_name} className='border  w-[500px] py-[10px] rounded-sm px-[8px]' type="text" onChange={handleChange}/>
                        {error.last_name&& <p className='text-red-700 text-[10px] absolute'>{error.last_name}</p>}

                    </div>
                    <div>
                        <p className='text-[16px] pt-[10px]'>Date of Birth</p>
                        <div className='flex gap-3'>
                            <div>
                                <select name='day' value={inputValue.day} className='border  w-[160px] py-[10px] rounded-sm px-[8px]' onChange={handleChange} id="day">
                                            <option value="">Day</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                </select>
                                {error.day&& <p className='text-red-700 text-[10px] absolute mb-[-150px]'>{error.day}</p>}
                            </div>
                            <div>
                                <select name='month' value={inputValue.month} className='border  w-[160px] py-[10px] rounded-sm px-[8px]' onChange={handleChange} id="month">
                                            <option value="">Month</option>
                                            <option value="January">January</option>
                                            <option value="February">February</option>
                                            <option value="March">March</option>
                                            <option value="April">April</option>
                                            <option value="May">May</option>
                                            <option value="June">June</option>
                                            <option value="July">July</option>
                                            <option value="August">August</option>
                                            <option value="September">September</option>
                                            <option value="October">October</option>
                                            <option value="November">November</option>
                                            <option value="December">December</option>
                                </select>
                                {error.month&& <p className='text-red-700 text-[10px] absolute mb-[-150px]'>{error.month}</p>}
                            </div>
                            <div>
                                <select name='year' value={inputValue.year} className='border  w-[158px] py-[10px] rounded-sm px-[8px]' onChange={handleChange} id="year">
                                            <option value="">Year</option>
                                            <option value="2007">2007</option>
                                            <option value="2006">2006</option>
                                            <option value="2005">2005</option>
                                            <option value="2004">2004</option>
                                            <option value="2003">2003</option>
                                            <option value="2002">2002</option>
                                            <option value="2001">2001</option>
                                            <option value="2000">2000</option>
                                            <option value="1999">1999</option>
                                            <option value="1998">1998</option>
                                            <option value="1997">1997</option>
                                </select>
                                {error.year&& <p className='text-red-700 text-[10px] absolute mb-[-150px]'>{error.year}</p>}
                            </div>

                        </div>
                    </div>
                    <div>
                        <p className='text-[16px] pt-[10px]'>So we can send you a birthday treat</p>
                        <div>
                            <p className='text-[16px] pt-[10px]'>Gender (Optional)</p>
                            <select  className='border  w-[500px] py-[10px] rounded-sm px-[8px]' name="" id="gender">Please Select
                                <option value="">Please Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            
                        </div>
                        <p className='text-[16px] pt-[10px]'>So we can tailor your experience</p>
                        <div>
                            <p className='text-[16px] pt-[10px]'>Email Address</p>
                            <input name='email' value={inputValue.email} className='border  w-[500px] py-[10px] rounded-sm px-[8px]' type="text"onChange={handleChange} />
                            {error.email&& <p className='text-red-700 text-[10px] absolute mb-[-150px]'>{error.email}</p>}
                        </div>
                        
                        <div>
                            <p className='text-[16px] pt-[10px]'>Phone Number</p>
                            <input name='phone' autoComplete="username" value={inputValue.phone} className='border  w-[500px] py-[10px] rounded-sm px-[8px]' type="text" onChange={handleChange} />
                            {error.phone&& <p className='text-red-700 text-[10px] absolute mb-[-150px]'>{error.phone}</p>}
                        </div>
                        <div>
                            <p className='text-[16px] pt-[10px]'>Password</p>
                            <input name='password' value={inputValue.password} autoComplete="current-password"  className='border  w-[500px] py-[10px] rounded-sm px-[8px]' onChange={handleChange} type="password" />
                            {error.password&& <p className='text-red-700 text-[10px] absolute mb-[-150px]'>{error.password}</p>}
                        </div>
                        <p className='text-[16px] pt-[10px]'>Your password must be at least 5 characters long</p>
                        
                        <p className='text-[18px] pt-[10px]'>I'd like to receive exclusive discounts and news from <br /> Debenhams by:</p>
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
                        <div>
                            <p className='text-[14px] pt-[10px] w-[480px]'>* By checking the SMS box, you are agreeing to receive texts from or on behalf of Debenhams,
                                 our family of companies, or one of it third-party associates, to any telephone number you provide. 
                                 These texts could be sent using an automated telephone system.
                                 Agreement is not a requirement of purchase and you are free to opt-out at any time.
                            </p>
                            <p className='text-[14px] pt-[10px] w-[480px] flex justify-center'>By continuing I confirm that I am over the age of 18.</p>
                        </div>
                        <button className='bg-black text-white rounded-full px-[40px] py-[9px] font-bold w-[500px] mt-[20px] hover:bg-slate-700'> CREATE ACCOUNT</button>

                    </div>

                </form>
            </div>
    </div>
  )
}

export default Registration
