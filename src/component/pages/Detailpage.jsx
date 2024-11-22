import React from 'react'
import { SiHackthebox } from "react-icons/si";
import { RxCountdownTimer } from "react-icons/rx";
import { SlArrowDown } from "react-icons/sl";
import { MdArrowDropDown } from "react-icons/md";
import lastloogo from '../images/loggggg.png'
import { useContext } from 'react';
import { GoHeart } from "react-icons/go";
import { CounterContext } from '../../context/cartCounterContext';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const Detailpage = () => {

    const {toggleDescription,toggleDescriptions,toggleDescriptionss,isOpen,isOpens,isOpenss,addCart,toggleLike,likedProducts} = useContext(CounterContext)
    const {id} = useParams()
    const [details, setDetails] = useState({})
    const base_url ="http://ecommerce.reworkstaging.name.ng/v2"


    const getDetails = async()=>{
        try {
            const res = await axios.get(`${base_url}/products/${id}`)
            if(res.status !== 200){
                throw new Error('error getting product')
            }
            setDetails(res.data)
            console.log(res.data); 
        } catch (error) {
            console.error('error getting product');
        }
    }
    useEffect(()=>{
        getDetails()
    },[id])

    console.log(id);
    



    // validate rating  form
    const user = JSON.parse(localStorage.getItem('UserloginInfo'));
    const user_id = user.id

    

    const [rating, setRating] = useState({
        product_id: id,
        user_id:user_id,
        text:"",
        value:""
     })
        
     
     const [ratingError, setRatingError] = useState({
        
        product_id:"",
        user_id:"",
        text:"",
        value:""

     })

     const handleInputChange=(e)=>{
        const {name , value} = e.target;
        setRating((prev)=>({
            ...prev,
            [name]: value
        }))
     }

     const formValidate =()=>{
        const RatingError = {}
        if(rating.text === ""){
            RatingError.text = "text is required"
        }
        if(rating.value === ""){
            RatingError.value = "Rating is required"
        }
        setRatingError(RatingError);
        return Object.keys(RatingError).length === 0;

     }
     console.log(rating);
     

     const handlesub =async(e)=>{
        e.preventDefault();
        if(formValidate()){
            try {
                const res = await axios.post(`${base_url}/ratings`, rating) 
                if(res.status !== 200){
                    throw new Error("error posting rating");
                  }
                  setRating(res.data)
                  console.log(res.data);
                  setRating({
                    product_id: id,  
                    user_id: user_id,  
                    text: "",
                    value: ""
                });

                setRatingError({});  
            } catch (error) {
                console.error(error.message); 
            }
        }
        else{
            console.log("form not validated");
        }
     }

     //post likes
     
     const [click, setClick] = useState({
        product_id: id,
        user_id:user_id,
     })
      
     const postLikes =async ()=>{
            try {
                const res = await axios.post(`${base_url}/likes`,click);
                if(res.status !== 200){
                throw new Error("error posting likes");
                }    
                console.log(res.data);
            } catch (error) {
                console.error(error.message);
            }  
     }

     


  return (
    <div>
        <div className='flex px-[80px] justify-between mt-[50px]'>
            <div>
                <img className='mb-[10px] h-[120px] w-[120px] cursor-pointer' src={details.images} alt="" />
                <img className='mb-[10px] h-[120px] w-[120px] cursor-pointer'  src={details.images} alt="" />
                <img className='mb-[10px] h-[120px] w-[120px] cursor-pointer'  src={details.images} alt="" />
                <img className='mb-[10px] h-[120px] w-[120px] cursor-pointer'  src={details.images} alt="" />
            </div>
            <div>
                <img className='h-[500px] w-[670px]' src={details.images} alt="" />
            </div>
            <div className='relative'>
                <p className='font-semibold'>{details.title}</p>
                <p className='text-[20px] w-[400px]'>{details.descp}</p>
                <p className='text-red-600 font-bold text-[24px] mt-5'>£{details.price}.20 <span className='text-black font-normal line-through ml-2'>£329.00</span> <span className='text-red-600 font-semibold text-[24px] ml-2'>Save 20%</span></p>
                <div className='border p-[20px] rounded-md mt-[8px]'>
                    <div className='flex gap-2'>
                        <img className='h-[25px]' src="https://mediahub.debenhams.com/dbz_prod_klarna-pay-method-icon-2024?fmt=auto&h=72" alt="" />
                        <img className='h-[25px]' src="https://mediahub.debenhams.com/dbz_prod_clearpay-pay-method-icon-2024?fmt=auto&h=72" alt="" />
                        <img className='h-[25px]' src="https://mediahub.debenhams.com/dbz_prod_paypal-pay-method-icon-2024?fmt=auto&h=72" alt="" />
                    </div>
                    <p className='text-gray-400 mt-[8px]'>18+, T&C apply. Credit subject to status</p>
                    <p className='mt-[8px] cursor-pointer'><u>See More</u></p>
                </div>
                    <p className='text-[20px] mt-[5px]'>Colour: <span className='font-semibold'>Black</span></p>
                <div className='flex gap-3 mt-[10px]'>
                    <div className='bg-black rounded-full border border-black h-[30px] w-[30px]'></div>
                    <div className='bg-black rounded-full border border-black h-[30px] w-[30px]'></div>  
                </div> 
                <div className='flex justify-between mt-[20px]'>
                    <p>Select a Size:</p>
                    <p className='cursor-pointer'><u>Size Guide</u></p>
                </div>  
                <div className='flex gap-3 mt-[10px]'>
                    <div className='border rounded-md px-[17px] py-[9px] cursor-pointer'>3</div>
                    <div className='border rounded-md px-[17px] py-[9px] cursor-pointer'>4</div>
                    <div className='border rounded-md px-[17px] py-[9px] cursor-pointer'>5</div>
                    <div className='border rounded-md px-[17px] py-[9px] cursor-pointer'>6</div>
                    <div className='border rounded-md px-[17px] py-[9px] cursor-pointer'>7</div>
                    <div className='border rounded-md px-[17px] py-[9px] cursor-pointer'>8</div>
                </div> 
                <button className='font-bold bg-black rounded-full py-[14px] px-[180px] text-white mt-[30px]' onClick={()=>addCart(details)}>ADD TO BAG</button>
                <div className='border rounded-md mt-[20px] p-[20px]'>
                    <div className='flex items-center gap-4'>
                        <SiHackthebox size={25}/>   
                        <p>Free Delivery on Fashion & Beauty Orders Over £50</p>
                    </div>
                    <div className='flex items-center gap-4 mt-4'>
                        <RxCountdownTimer size={25}/>
                        <p>Standard returns within 28 days</p>
                    </div>
                        <p className='text-[12px] ml-[40px]'>Exclusions apply. Please see our returns policy</p>
                </div>
                <div onClick={() => toggleLike(details.id)} className={`absolute h-[35px] w-[35px] rounded-full shadow-lg items-center cursor-pointer top-0 right-0 flex justify-center ml-[150px] mt-[-10px] ${likedProducts.includes(details.id) ? 'bg-red-600' : 'bg-white'}`}>
                    <GoHeart onClick={() => postLikes(details.id)} size={21} />
                </div>

            </div>
        </div>
        <div className='my-[30px] ml-[230px] w-[740px]'>
            <div>
                 <hr/>
                 <div className='clickme flex justify-between my-3 'onClick={toggleDescription}>
                    <p className='font-semibold text-[16px] '>Description</p>
                    <SlArrowDown size={22}  />
                 </div>
                 <div className={`mt-[17px] ${isOpen ? '' : 'hidden'}`}>
                    <p>Introducing our Wide Fit Lara Penny Loafers, the perfect combination of comfort and style. 
                        These loafers feature a sleek black sole, adding a touch of sophistication to any outfit. With their flat design, 
                        they provide all-day comfort without compromising on fashion. Whether you're heading to the office or going out for a casual stroll, 
                        these loafers are a versatile choice that will effortlessly elevate your look.
                    </p>
                    <p className='mt-[16px] mb-[10px]'>SKU: BQQ06232-105-11</p>
                 </div>
            </div>
            <div>
                 <hr/>
                 <div className='flex justify-between my-3' onClick={toggleDescriptions}>
                    <p className='font-semibold text-[16px] '>Product Detail & Care</p>
                    <SlArrowDown size={22}  />
                 </div>
                 <div className={`mt-[17px] ${isOpens ? '' : 'hidden'}`}>
                    <p className='mb-[6px]'>Upper: 100% Synthetic, Lining: Synthetic, Outsole: Synthetic</p>
                 </div>
            </div>
            <div>
                 <hr/>
                 <div className='flex justify-between my-3' onClick={toggleDescriptionss}>
                    <p className='font-semibold text-[16px] '>Returns</p>
                    <SlArrowDown size={22}  />
                 </div>
                 <div className={`mt-[17px] ${isOpenss ? '' : 'hidden'}`}>
                    <p className='mt-[7px]'>Something not quite right? You have 28 days from the day you receive it, to send something back.</p>
                    <p>Please note, we cannot offer refunds on fashion face masks, cosmetics, pierced jewellery, adult toys and swimwear or lingerie if the hygiene seal is not in place or has been broken.</p>
                    <p className='my-[10px]'>Items of footwear and/or clothing must be unworn and unwashed with the original labels attached. Also, 
                        footwear must be tried on indoors. Items of homeware including bedlinen, mattresses and toppers, and pillows must be unused 
                        and in their
                         original unopened packaging. This does not affect your statutory rights.</p>
                    <p className='mb-[6px]'>Click <span><u>here</u></span> to view our full Returns Policy.</p>
                 </div>
                 <hr/>
            </div>
        </div>
        <div className='px-[80px]'>
            <p className='text-[20px] font-semibold mb-[35px]'>Recently Viewed</p>
            <div className='flex gap-2 mb-[40px]'>
                   <div>
                        <div className='h-[400px] w-[280px] bg-cover bg-center p-[25px] ' style={{ backgroundImage: `url("https://mediahub.debenhams.com/bqq06232_black_xl_1?qlt=80&w=346&h=519&dpr=1&fit=ctn")` }}>
                        </div>
                                        <div className='mt-[15px]'>
                                                <p className='text-[14px] font-bold'>Dorothy Perkins</p>
                                                <p className='text-[14px]'>Animal Overhead </p>
                                            <div className='flex items-center justify-between'>
                                                <div className='flex gap-2'>
                                                    <p className='text-red-600 font-bold'>$26.10</p>
                                                    <p className='line-through'>$29.00</p>
                                                </div>
                                                <div>
                                                    <p className='text-red-600'>Save 20%</p>
                                                </div>
                                            </div>
                                            <div className='flex gap-3 mt-3'>
                                                <div className='bg-gray-600 rounded-full h-[20px] w-[20px]'></div>
                                                <div className='bg-black rounded-full h-[20px] w-[20px]'></div>
                                                <div className='bg-blue-600 rounded-full h-[20px] w-[20px]'></div>
                                            </div>
                                        </div>
                   </div>
                   <div>
                        <div className='h-[400px] w-[280px] bg-cover bg-center p-[25px] ' style={{ backgroundImage: `url("https://mediahub.debenhams.com/m5057538707609_brown_xl_1.jpeg?qlt=80&w=346&h=519&dpr=1&fit=ctn")` }}>
                        </div>
                                        <div className='mt-[15px]'>
                                                <p className='text-[14px] font-bold'>Dorothy Perkins</p>
                                                <p className='text-[14px]'>Animal Overhead </p>
                                            <div className='flex items-center justify-between'>
                                                <div className='flex gap-2'>
                                                    <p className='text-red-600 font-bold'>$26.10</p>
                                                    <p className='line-through'>$29.00</p>
                                                </div>
                                                <div>
                                                    <p className='text-red-600'>Save 20%</p>
                                                </div>
                                            </div>
                                            <div className='flex gap-3 mt-3'>
                                                <div className='bg-gray-600 rounded-full h-[20px] w-[20px]'></div>
                                                <div className='bg-black rounded-full h-[20px] w-[20px]'></div>
                                                <div className='bg-blue-600 rounded-full h-[20px] w-[20px]'></div>
                                            </div>
                                        </div>
                   </div>
                   <div>
                        <div className='h-[400px] w-[280px] bg-cover bg-center p-[25px] ' style={{ backgroundImage: `url("https://mediahub.debenhams.com/m5063019288628_green_xl_1.jpeg?qlt=80&w=346&h=519&dpr=1&fit=ctn")` }}>
                        </div>
                                        <div className='mt-[15px]'>
                                                <p className='text-[14px] font-bold'>Dorothy Perkins</p>
                                                <p className='text-[14px]'>Animal Overhead </p>
                                            <div className='flex items-center justify-between'>
                                                <div className='flex gap-2'>
                                                    <p className='text-red-600 font-bold'>$26.10</p>
                                                    <p className='line-through'>$29.00</p>
                                                </div>
                                                <div>
                                                    <p className='text-red-600'>Save 20%</p>
                                                </div>
                                            </div>
                                            <div className='flex gap-3 mt-3'>
                                                <div className='bg-gray-600 rounded-full h-[20px] w-[20px]'></div>
                                                <div className='bg-black rounded-full h-[20px] w-[20px]'></div>
                                                <div className='bg-blue-600 rounded-full h-[20px] w-[20px]'></div>
                                            </div>
                                        </div>
                   </div>
                   <div>
                        <div className='h-[400px] w-[280px] bg-cover bg-center p-[25px] ' style={{ backgroundImage: `url("https://mediahub.debenhams.com/bqq11232_black_xl_1?qlt=80&w=346&h=519&dpr=1&fit=ctn")` }}>
                        </div>
                                        <div className='mt-[15px]'>
                                                <p className='text-[14px] font-bold'>Dorothy Perkins</p>
                                                <p className='text-[14px]'>Animal Overhead </p>
                                            <div className='flex items-center justify-between'>
                                                <div className='flex gap-2'>
                                                    <p className='text-red-600 font-bold'>$26.10</p>
                                                    <p className='line-through'>$29.00</p>
                                                </div>
                                                <div>
                                                    <p className='text-red-600'>Save 20%</p>
                                                </div>
                                            </div>
                                            <div className='flex gap-3 mt-3'>
                                                <div className='bg-gray-600 rounded-full h-[20px] w-[20px]'></div>
                                                <div className='bg-black rounded-full h-[20px] w-[20px]'></div>
                                                <div className='bg-blue-600 rounded-full h-[20px] w-[20px]'></div>
                                            </div>
                                        </div>
                   </div>
                   <div>
                        <div className='h-[400px] w-[280px] bg-cover bg-center p-[25px] ' style={{ backgroundImage: `url("https://mediahub.debenhams.com/bqq14933_green_xl_1?qlt=80&w=346&h=519&dpr=1&fit=ctn")` }}>
                        </div>
                                        <div className='mt-[15px]'>
                                                <p className='text-[14px] font-bold'>Dorothy Perkins</p>
                                                <p className='text-[14px]'>Animal Overhead </p>
                                            <div className='flex items-center justify-between'>
                                                <div className='flex gap-2'>
                                                    <p className='text-red-600 font-bold'>$26.10</p>
                                                    <p className='line-through'>$29.00</p>
                                                </div>
                                                <div>
                                                    <p className='text-red-600'>Save 20%</p>
                                                </div>
                                            </div>
                                            <div className='flex gap-3 mt-3'>
                                                <div className='bg-gray-600 rounded-full h-[20px] w-[20px]'></div>
                                                <div className='bg-black rounded-full h-[20px] w-[20px]'></div>
                                                <div className='bg-blue-600 rounded-full h-[20px] w-[20px]'></div>
                                            </div>
                                        </div>
                   </div>
            </div>
            <form onSubmit={handlesub} >
                <div className='flex items-center gap-[60px]'>
                    <div>
                        <p className='text-[12px] my-2'>Rating</p>
                        <select name="value" className='border border-black rounded-md px-2' value={rating.value} id="" onChange={handleInputChange}>
                            <option value="">Select</option>
                            <option value="1">★☆☆☆☆</option>
                            <option value="2">★★☆☆☆</option>
                            <option value="3">★★★☆☆</option>
                            <option value="4">★★★★☆</option>
                            <option value="5">★★★★★</option>
                        </select>
                        {ratingError.value&& <p className='text-red-700 text-[10px] absolute'>{ratingError.value}</p>}
                    </div>
                    <div>
                        <p className='text-[12px] my-2'>Review</p>
                        <input name='text' value={rating.text} type="text" className='border border-black rounded-md px-2' onChange={handleInputChange}/>
                        {ratingError.text&& <p className='text-red-700 text-[10px] absolute'>{ratingError.text}</p>}
                    </div>
                </div>
                <button className='bg-slate-500 text-[14px] mt-5 rounded-md px-2'>Submit</button>
            </form>
            <div className='my-[30px]'>
                <hr />
            </div>
            <div>
                <div className='flex items-center justify-end gap-6'>
                    <p>Sort By: Most Recent   </p>
                    <MdArrowDropDown size={20} />
                </div>
                <div className='flex gap-[90px]'>
                    <div>
                        <div className='text-center'>
                            <p className='font-semibold text-[20px]'>Reviews</p>
                            <p className='font-semibold text-[25px]'>5 <span className='text-[30px]'>★★★★★</span></p>
                            <p className=' text-[15px]'>(4 Reviews) </p>
                        </div>
                        <div className='mt-6'>
                            <div className='flex justify-between items-center gap-2'>
                                <div >
                                    <p>5 stars</p>
                                </div>
                                <div className='border rounded bg-black h-[7px] w-[380px]'>
                                    <hr />
                                </div>
                                <div>
                                    <p>(4)</p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center gap-2 my-3'>
                                <div >
                                    <p>4 stars</p>
                                </div>
                                <div className='border rounded bg-gray-200 h-[7px] w-[380px]'>
                                    <hr />
                                </div>
                                <div>
                                    <p>(0)</p>
                                </div>
                            </div>
                            
                            <div className='flex justify-between items-center gap-2 my-3'>
                                <div >
                                    <p>3 stars</p>
                                </div>
                                <div className='border rounded bg-gray-200 h-[7px] w-[380px]'>
                                    <hr />
                                </div>
                                <div>
                                    <p>(0)</p>
                                </div>
                            </div>
                            
                            <div className='flex justify-between items-center gap-2 my-3'>
                                <div >
                                    <p>2 stars</p>
                                </div>
                                <div className='border rounded bg-gray-200 h-[7px] w-[380px]'>
                                    <hr />
                                </div>
                                <div>
                                    <p>(0)</p>
                                </div>
                            </div>
                            
                            <div className='flex justify-between items-center gap-2 my-3'>
                                <div >
                                    <p>1 stars</p>
                                </div>
                                <div className='border rounded bg-gray-200 h-[7px] w-[380px]'>
                                    <hr />
                                </div>
                                <div>
                                    <p>(0)</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className='mt-[40px]'>
                            <p>Value</p>
                            <div className='flex mt-2'>
                                <div className='border rounded-right bg-gray-200 h-[7px] w-[390px]'>
                                        <hr />
                                </div>
                                <div className='border rounded-left bg-black h-[7px] w-[85px]'>
                                        <hr />
                                </div>
                            </div>
                            <div className='flex justify-between mt-2'>
                                <p>Poor </p>
                                <p>Average</p>
                                <p>Excellent</p>
                            </div>
                        </div>
                        <div className='mt-[10px]'>
                            <p>Quality</p>
                            <div className='flex mt-2'>
                                <div className='border rounded-right bg-gray-200 h-[7px] w-[390px]'>
                                        <hr />
                                </div>
                                <div className='border rounded-left bg-black h-[7px] w-[85px]'>
                                        <hr />
                                </div>
                            </div>
                            <div className='flex justify-between mt-2'>
                                <p>Poor </p>
                                <p>Average</p>
                                <p>Excellent</p>
                            </div>
                        </div>
                        <button className='border border-black rounded-full mt-[30px] py-[12px] font-semibold px-[155px] ml-[25px]'>WRITE A REVIEW</button>

                    </div>
                    <div>
                        <div className='flex justify-between mt-[60px] items-center gap-[590px]'>
                            <div className='flex items-center gap-2'>
                                <p className=' text-[20px] '>5</p>
                                <span className='text-[19px]'>★★★★★</span>
                            </div>
                            <p>08/02/24</p>
                        </div>
                        <div className='mt-[55px]'>
                            <hr />
                        </div>
                        <div className='flex justify-between mt-[20px] items-center gap-[590px]'>
                            <div className='flex items-center gap-2'>
                                <p className=' text-[20px] '>5</p>
                                <span className='text-[19px]'>★★★★★</span>
                            </div>
                            <p>04/02/24</p>
                        </div>
                        <div>
                            <p className='font-semibold text-[15px] mt-4'>Great Look & Feel</p>
                            <p className='text-[15px]'>I always get compliments in this, it washes well too</p>
                            <p className='mt-[20px]'>Loobell </p>
                        </div>
                        <div className=' flex px-2 border rounded py-[8px] gap-2 w-[430px] mt-[20px]' >
                            <img className='h-[20px] ' src={lastloogo} alt="" />
                            <p><i>Originally posted on <span className='font-semibold'>debenhams.com</span></i></p>
                        </div>
                        <div className='mt-[25px]'>
                            <hr />
                        </div>
                        <div className='flex justify-between mt-[20px] items-center gap-[590px]'>
                            <div className='flex items-center gap-2'>
                                <p className=' text-[20px] '>5</p>
                                <span className='text-[19px]'>★★★★★</span>
                            </div>
                            <p>21/12/23</p>
                        </div>
                        <div className='mt-5'>
                            <p>Quality</p>
                            <div className='flex items-center gap-2 mt-2'>
                                <div className='border rounded bg-black h-[7px] w-[85px]'>
                                            <hr />
                                </div>
                                <div className='border rounded bg-black h-[7px] w-[85px]'>
                                            <hr />
                                </div>
                                <div className='border rounded bg-black h-[7px] w-[85px]'>
                                            <hr />
                                </div>
                                <div className='border rounded bg-black h-[7px] w-[85px]'>
                                            <hr />
                                </div>
                                <div className='border rounded bg-black h-[7px] w-[85px]'>
                                            <hr />
                                </div>
                                <p className='text-[14px]'>Excellent</p>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <p>Value</p>
                            <div className='flex items-center gap-2 mt-2'>
                                <div className='border rounded bg-black h-[7px] w-[85px]'>
                                            <hr />
                                </div>
                                <div className='border rounded bg-black h-[7px] w-[85px]'>
                                            <hr />
                                </div>
                                <div className='border rounded bg-black h-[7px] w-[85px]'>
                                            <hr />
                                </div>
                                <div className='border rounded bg-black h-[7px] w-[85px]'>
                                            <hr />
                                </div>
                                <div className='border rounded bg-black h-[7px] w-[85px]'>
                                            <hr />
                                </div>
                                <p className='text-[14px]'>Excellent</p>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <p className='text-[14px] font-semibold'>Gorgeous Fit And Quality. </p>
                            <p className='text-[14px] mt-3'>This dress is such a lovely fit, gives you a waist without clinging where you don’t want it to. The material is soft, 
                                warm and it’s not pilled or gone misshapen after washing. 
                                Lovely colours and just above knee length on me and I’m just under 5’3”. Very feminine and cute!
                            </p>
                            <p className='text-[14px] font-semibold mt-6'>Ajoy66</p>
                        </div>
                        <div className=' mt-5  w-[800px]'>input
                                    <hr />
                        </div>
                        <div className='flex justify-center items-center mt-[40px] mb-[70px]'>
                            <p className='text-[16px] font-semibold'>1-4 <span className='font-normal'>of </span> 4 <span className='font-normal'>reviews</span></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='flex justify-center text-center'>
                <div>
                    <p className='font-semibold text-[20px]'>Reviews</p>
                    <p className='mt-[16px] mb-[10px]'>Be the first to leave a review for this product.</p>
                    <button className='font-semibold border border-black rounded-full py-[14px] px-[140px] text-black mt-[10px] ml-[170px] mb-[70px] hover:bg-gray-50 hover:text-gray-600'>WRITE A REVIEW</button>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Detailpage