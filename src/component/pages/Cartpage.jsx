import React, { useContext } from 'react'
import { SiHackthebox } from "react-icons/si";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaMinus } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";
import { CounterContext } from '../../context/cartCounterContext';
import { Link } from 'react-router-dom';



const Cartpage = () => {

    const {incrementCart,decrementCart,cart,totalAmount,checkOut} = useContext(CounterContext)
    if(cart.length === 0)return   <h1 className='text-2xl font-bold text-center mt-10'> your cart is Empty</h1>

  return (
    <div>
        <div className='px-[220px]'>
                <p className='font-semibold text-[20px] my-[25px]'>Shopping Bag</p>
                <div className='flex gap-6'>
                    <div>
                        <p className=' text-[20px] font-medium'>Your Products ({cart.length})</p>
                        <div className='flex items-center gap-2 mt-6 text-[14px]'>
                            <SiHackthebox size={19}/>  
                            <p>Delivered by <span className='font-semibold'>Debenhams</span></p>
                        </div>
                        {
                            cart?.map(carr=>{
                                return(

                                <div className='border rounded-md p-[20px] mt-[10px] flex gap-3 mb-[20px]' key={carr.id}>
                                    <div>
                                        <img src={carr.images} alt=""  className='h-[200px] w-[150px]'/>
                                    </div>
                                    <div>
                                        <div className='flex justify-between items-center gap-[330px]'>
                                            <p className='font-semibold'>Dorothy Perkins</p>
                                            <Link to={'/DeletePage'}>
                                                <RiDeleteBinLine size={22} className='cursor-pointer' />
                                            </Link>
                                        </div>
                                        <p>{carr.title}</p>
                                        <p className='text-red-600 font-semibold mt-3'>£{carr.price}.20 <span className='text-black line-through ml-1'>£58.00</span></p>
                                        <p>Size :  <span className='font-semibold ml-10'>One Size</span></p>
                                        <p>Colour :  <span className='font-semibold ml-5'>Brown</span></p>
                                        <div className='flex gap-3 mt-3'>
                                            <p>Quantity:</p>
                                            <div className='flex items-center'>
                                                <div onClick={()=>decrementCart(carr.id)}  className='border items-center py-2 px-4 cursor-pointer' >
                                                    <FaMinus size={18} />
                                                </div>
                                                <div className='border items-center py-[5px] px-4'>
                                                    <p>{carr.quantity}</p>
                                                </div>
                                                <div onClick={()=>incrementCart(carr.id)}  className='border items-center py-2 px-4 cursor-pointer'>
                                                        <MdAdd  size={18}/>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <div className='bg-gray-100 rounded-sm p-[15px]'>
                            <p className='text-[21px] mb-[15px]'>Order Summary</p>
                            <div className=' flex gap-[200px]'>
                                <div>
                                    <p className='text-[17px]'>Subtotal</p>
                                    {/* <p className='text-[17px]'>Discount</p> */}
                                </div>
                                <div>
                                    <p className='text-[17px]'>£{totalAmount}.00</p>
                                    {/* <p className='text-[17px]'>-£5.80</p> */}
                                </div>
                            </div>
                            <div className='mt-[20px] border w-[300px] ml-2'>
                                <hr />
                            </div>
                            <div className='mt-[4px] flex gap-[230px]'>
                                <div >
                                    <p className='text-[17px]'>Total</p>
                                </div>
                                <div>
                                    <p className='text-[17px]'>£{totalAmount}.20</p>
                                </div>
                            </div>
                            <div className='flex justify-end mt-3 '>
                                <div>
                                    <p className='font-semibold text-[14px]'>Discounts included:</p>
                                    <p className='text-[14px]'>Enjoy 10% Off <span className='ml-7'>-£5.80</span></p>
                                </div>
                            </div>
                            {
                                cart?.map((caaa)=>{
                                    return(
                                        <button key={caaa.id} onClick={()=>checkOut(caaa.id)} className='font-bold bg-black rounded-full py-[12px] px-[120px] text-white mt-[30px]'>CHECKOUT</button>
                                    )
                                })

                            }
                            
                                <button className='bg-yellow-500 rounded-full flex gap-1 items-center text-[19px] px-[69px] py-[8px] mt-3'>
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjMDAzMDg3I
                                    iBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAy
                                    NC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi
                                    41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy
                                    43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41Mzcg
                                    MTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiA
                                    xMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDM1LjQzNy
                                    AxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzN
                                    yA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgM
                                    jQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3I
                                    DI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS
                                    44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA5Y2RlIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4" alt="" 
                                    /> <p>Checkout</p>
                                </button>
                        </div>
                        <div className='mb-3'>
                            <div className='flex mt-[15px] justify-center gap-1'>
                                <img className='h-[37px]' src="https://mediahub.debenhams.com/dbz_prod_visa-pay-method-icon-2024?fmt=auto&h=72" alt="" />
                                <img className='h-[37px]' src="https://mediahub.debenhams.com/dbz_prod_mastercard-pay-method-icon-2024?fmt=auto&h=72" alt="" />
                                <img className='h-[37px]' src="https://mediahub.debenhams.com/dbz_prod_amex-pay-method-icon-2024?fmt=auto&h=72" alt="" />
                                <img className='h-[37px]' src="https://mediahub.debenhams.com/dbz_prod_mastercard-maestro-pay-method-icon-2024?fmt=auto&h=72" alt="" />
                                <img className='h-[37px]' src="https://mediahub.debenhams.com/dbz_prod_visa-electron-pay-method-icon-2024?fmt=auto&h=72" alt="" />
                            </div>
                            <div className='flex mt-[15px] justify-center gap-1'>
                                <img className='h-[37px]' src="https://mediahub.debenhams.com/dbz_prod_applepay-pay-method-icon-2024?fmt=auto&h=72" alt="" />
                                <img className='h-[37px]' src="https://mediahub.debenhams.com/dbz_prod_paypal-pay-method-icon-2024?fmt=auto&h=72" alt="" />
                                <img className='h-[37px]' src="https://mediahub.debenhams.com/dbz_prod_klarna-pay-method-icon-2024?fmt=auto&h=72" alt="" />
                                <img className='h-[37px]' src="https://mediahub.debenhams.com/dbz_prod_clearpay-pay-method-icon-2024?fmt=auto&h=72" alt="" />
                            </div>
                        </div>
                        <div className='border py-[15px] px-[10px] mb-3'>
                            <p className='text-[20px]'>Promo Code</p>
                            <div >
                                    <input className='pl-1 py-1 border font-semibold' type="text" placeholder='Enter Code here...'/>
                                    <button className='border font-semibold py-1 px-3'>APPLY</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-[10px]'>
                    <p className='text-[20px] font-semibold'>Why Not Treat Yourself?</p>
                    <div className='flex gap-4 my-[40px]'>
                        <div>
                            <img className='h-[180px]' src="https://mediahub.debenhams.com/ydd14878_multi_xl_1?qlt=80&w=346&h=519&dpr=1&fit=ctn" alt="" />
                            <p className='text-[16px] font-semibold'>Yankee Candle</p>
                            <p>Wax melt single</p>
                            <p>sweet vanilla</p>
                            <p>horchata</p>
                            <div>
                                <p className='text-red-500 font-semibold text-[16px]'>£1.99 <span className='text-black line-through'>£2.49</span></p>
                                <p  className='text-red-500 text-[16px]'>Save 20%</p>
                            </div>
                        </div>
                        <div>
                            <img className='h-[180px]' src="https://mediahub.dorothyperkins.com/m0033616728280_ivory%20white_xl_1?qlt=80&w=346&h=519&dpr=1&fit=ctn" alt="" />
                            <p className='text-[16px] font-semibold'>Yankee Candle</p>
                            <p>Wax melt single</p>
                            <p>sweet vanilla</p>
                            <p>horchata</p>
                            <div>
                                <p className='text-red-500 font-semibold text-[16px]'>£1.99 <span className='text-black line-through'>£2.49</span></p>
                                <p  className='text-red-500 text-[16px]'>Save 20%</p>
                            </div>
                        </div>
                        <div>
                            <img className='h-[180px]' src="https://mediahub.debenhams.com/ydd13936_misc_xl_1?qlt=80&w=346&h=519&dpr=1&fit=ctn" alt="" />
                            <p className='text-[16px] font-semibold'>Yankee Candle</p>
                            <p>Wax melt single</p>
                            <p>sweet vanilla</p>
                            <p>horchata</p>
                            <div>
                                <p className='text-red-500 font-semibold text-[16px]'>£1.99 <span className='text-black line-through'>£2.49</span></p>
                                <p  className='text-red-500 text-[16px]'>Save 20%</p>
                            </div>
                        </div>
                        <div>
                            <img className='h-[180px]' src="https://mediahub.debenhams.com/ydd12809_clear_xl_1?qlt=80&w=346&h=519&dpr=1&fit=ctn" alt="" />
                            <p className='text-[16px] font-semibold'>Yankee Candle</p>
                            <p>Wax melt single</p>
                            <p>sweet vanilla</p>
                            <p>horchata</p>
                            <div>
                                <p className='text-red-500 font-semibold text-[16px]'>£1.99 <span className='text-black line-through'>£2.49</span></p>
                                <p  className='text-red-500 text-[16px]'>Save 20%</p>
                            </div>
                        </div>
                        <div>
                            <img className='h-[180px]' src="https://mediahub.dorothyperkins.com/m5060758750072_black_xl_1?qlt=80&w=346&h=519&dpr=1&fit=ctn" alt="" />
                            <p className='text-[16px] font-semibold'>Yankee Candle</p>
                            <p>Wax melt single</p>
                            <p>sweet vanilla</p>
                            <p>horchata</p>
                            <div>
                                <p className='text-red-500 font-semibold text-[16px]'>£1.99 <span className='text-black line-through'>£2.49</span></p>
                                <p  className='text-red-500 text-[16px]'>Save 20%</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Cartpage