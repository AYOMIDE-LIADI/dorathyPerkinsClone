import React from 'react'
import logo from './images/dr.webp'
import carticon from './images/market.png'
import profileicon from './images/user (1).png'
import loveicon from './images/heart (2).png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CounterContext } from '../context/cartCounterContext'


const Header = () => {

    const {cart} = useContext(CounterContext)


  return (
    <div>
      <nav>
        <div className='flex bg-white w-full justify-between px-[95px] py-[21px] items-center'>
            <Link to={`/`}>
                 <div><img className='h-[43px]' src={logo} alt="" /></div>
            </Link>
            <div><input className='bg-gray-200 rounded-full py-[15px] w-[800px] pl-[25px]' type="text" placeholder='Search Products and Brands ' /></div>
            <div className='flex gap-[10px]'>
                <div>
                    <img className='h-[25px] cursor-pointer' src={loveicon} alt="" />
                </div>   
                <Link to={`/login/`} >
                     <img className='h-[25px] cursor-pointer' src={profileicon} alt="" />
                </Link>
                <Link to={`/cartpage`} className='relative w-8'>
                    <img className='h-[25px] cursor-pointer' src={carticon} alt="" />
                    <div className='absolute rounded-full p-[2px] text-[13px] flex top-0 right-0  justify-center '>
                        <p className='mt-[-8px]'>{cart.length}</p>
                    </div>
                </Link> 

            </div>
        </div>
        <div className='bg-black w-full flex text-white text-[16px] justify-center items-center'>
            <p className='hover:bg-white hover:text-black hover:cursor-pointer py-[7px] px-[8px] relative group'>
                Sales
                <div className='hidden group-hover:block absolute ml-[-652px] w-[1785px] h-screen bg-white z-50'>
                <div className='pt-[30px] px-[90px] flex gap-[120px] ml-[333px]'>
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Body Fit</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Body Fit</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                        <div>
                            <p className='font-semibold text-[16px]'>Offers</p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>Up To 40% Off Coats, Knits, <br />Boots & More</p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>50% OFF DP.EDIT </p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>Dress $25 And Under </p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            
                        </div>
                </div>
            </div>
             </p>
            <p className='hover:bg-white hover:text-black hover:cursor-pointer py-[7px] px-[8px] relative group'>
                New In
                <div className='hidden group-hover:block absolute ml-[-703px] w-[1785px] h-screen bg-white z-50'>
                <div className='pt-[30px] px-[90px] flex gap-[120px] ml-[333px]'>
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Body Fit</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Body Fit</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                        <div>
                            <p className='font-semibold text-[16px]'>Offers</p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>Up To 40% Off Coats, Knits, <br />Boots & More</p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>50% OFF DP.EDIT </p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>Dress $25 And Under </p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            
                        </div>
                </div>
            </div>
             </p>
            <p className='hover:bg-white hover:text-black hover:cursor-pointer py-[7px] px-[8px] relative group'>
                Clothing
                <div className='hidden group-hover:block absolute ml-[-769px] w-[1785px] h-screen bg-white z-50'>
                <div className='pt-[30px] px-[90px] flex gap-[120px] ml-[333px]'>
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Body Fit</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Body Fit</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                        <div>
                            <p className='font-semibold text-[16px]'>Offers</p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>Up To 40% Off Coats, Knits, <br />Boots & More</p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>50% OFF DP.EDIT </p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>Dress $25 And Under </p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            
                        </div>
                </div>
            </div>
             </p>
            <p className='hover:bg-white hover:text-black hover:cursor-pointer py-[7px] px-[8px] relative group'>
                Dresses
                <div className='hidden group-hover:block absolute ml-[-845px] w-[1785px] h-screen bg-white z-50'>
                <div className='pt-[30px] px-[90px] flex gap-[120px] ml-[333px]'>
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Body Fit</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Body Fit</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                        <div>
                            <p className='font-semibold text-[16px]'>Offers</p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>Up To 40% Off Coats, Knits, <br />Boots & More</p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>50% OFF DP.EDIT </p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>Dress $25 And Under </p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            
                        </div>
                </div>
            </div>
             </p>
            <p className='hover:bg-white hover:text-black hover:cursor-pointer py-[7px] px-[8px] relative group'>
                Shoes & Accessories 
                <div className='hidden group-hover:block absolute ml-[-915px] w-[1785px] h-screen bg-white z-50'>
                <div className='pt-[30px] px-[90px] flex gap-[120px] ml-[333px]'>
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Body Fit</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Body Fit</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                        <div>
                            <p className='font-semibold text-[16px]'>Offers</p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>Up To 40% Off Coats, Knits, <br />Boots & More</p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>50% OFF DP.EDIT </p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>Dress $25 And Under </p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            
                        </div>
                </div>
            </div>
             </p>
            <p className='hover:bg-white hover:text-black hover:cursor-pointer py-[7px] px-[8px] relative group'>
                 Autunm
                <div className='hidden group-hover:block absolute ml-[-1078px] w-[1785px] h-screen bg-white z-50'>
                <div className='pt-[30px] px-[90px] flex gap-[120px] ml-[333px]'>
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Body Fit</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Body Fit</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                        <div>
                            <p className='font-semibold text-[16px]'>Offers</p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>Up To 40% Off Coats, Knits, <br />Boots & More</p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>50% OFF DP.EDIT </p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>Dress $25 And Under </p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            
                        </div>
                </div>
            </div>
             </p>
            <p className='hover:bg-white hover:text-black hover:cursor-pointer py-[7px] px-[8px] relative group'>
                Occasion
                <div className='hidden group-hover:block absolute ml-[-1148px] w-[1785px] h-screen bg-white z-50'>
                <div className='pt-[30px] px-[90px] flex gap-[120px] ml-[333px]'>
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Body Fit</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Body Fit</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                        <div>
                            <p className='font-semibold text-[16px]'>Offers</p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>Up To 40% Off Coats, Knits, <br />Boots & More</p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>50% OFF DP.EDIT </p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>Dress $25 And Under </p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            
                        </div>
                </div>
            </div>
             </p>
            <p className='hover:bg-white hover:text-black hover:cursor-pointer py-[7px] px-[8px] relative group'>
                Beauty
                <div className='hidden group-hover:block absolute ml-[-1229px] w-[1785px] h-screen bg-white z-50'>
                <div className='pt-[30px] px-[90px] flex gap-[120px] ml-[333px]'>
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Body Fit</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Body Fit</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                        <div>
                            <p className='font-semibold text-[16px]'>Offers</p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>Up To 40% Off Coats, Knits, <br />Boots & More</p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>50% OFF DP.EDIT </p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>Dress $25 And Under </p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            
                        </div>
                </div>
            </div>
             </p>
            <p className='hover:bg-white hover:text-black hover:cursor-pointer py-[7px] px-[8px] relative group'>
                 Home
                <div className='hidden group-hover:block absolute ml-[-1293px] w-[1785px] h-screen bg-white z-50'>
                <div className='pt-[30px] px-[90px] flex gap-[120px] ml-[333px]'>
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Body Fit</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Body Fit</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                        <div>
                            <p className='font-semibold text-[16px]'>Offers</p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>Up To 40% Off Coats, Knits, <br />Boots & More</p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>50% OFF DP.EDIT </p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>Dress $25 And Under </p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            
                        </div>
                </div>
            </div>
             </p>
            <p className='hover:bg-white hover:text-black hover:cursor-pointer py-[7px] px-[8px] relative group'>
                 Brands
                <div className='hidden group-hover:block absolute ml-[-1351px] w-[1785px] h-screen bg-white z-50'>
                <div className='pt-[30px] px-[90px] flex gap-[120px] ml-[333px]'>
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Body Fit</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                
                        <div>
                            <p className='font-semibold text-[16px]'>Shop By Body Fit</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-4'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                            <p className='hover:underline cursor-pointer text-[13px] mt-2'>View All Sale</p>
                        </div>
                        <div>
                            <p className='font-semibold text-[16px]'>Offers</p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>Up To 40% Off Coats, Knits, <br />Boots & More</p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>50% OFF DP.EDIT </p>
                            <p className='hover:underline text-red-500  cursor-pointer font-bold text-[16px] mt-3'>Dress $25 And Under </p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            <p className='hover:underline  cursor-pointer font-bold text-[16px] mt-3'><i>Free Super Saver! Delivery <br />On All Orders Over £50</i></p>
                            
                        </div>
                </div>
            </div>
             </p>
            
                   
        </div>

        <div className='flex w-full'>
            <div className='flex  bg-gray-100 justify-center items-center text-center px-[180px] py-[5px] '>
                <div>
                    <p className='font-bold'>Payday up to 60% off</p>
                    <p className='text-blue-400 cursor-pointer'><u>Shop now</u></p>
                </div>
            </div>
            <div className='flex  bg-gray-200 justify-center items-center text-center px-[50px] py-[5px]'>
                <div>
                    <p className='font-bold'>Free Super Safer Delivery On all Orders Over $50</p>
                    <p className='text-blue-400 cursor-pointer'><u>Shop now</u></p>
                </div>
            </div>
            <div className='flex  bg-gray-100 justify-center items-center text-center px-[180px] py-[5px]'>
                <div>
                    <p className='font-bold'>20% off Coats & Boots</p>
                    <p className='text-blue-400 cursor-pointer'><u>Shop now</u></p>
                </div>
            </div>
            
        </div>
        
      </nav>
    </div>
  )
}

export default Header
