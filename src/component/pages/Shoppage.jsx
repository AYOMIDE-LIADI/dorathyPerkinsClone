import React from 'react'
import { SlArrowDown } from "react-icons/sl";
import { GoHeart } from "react-icons/go";
import { Link } from 'react-router-dom';
import { CounterContext } from '../../context/cartCounterContext';
import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';



const Shoppage = () => {

    const merchant_id = "67080eb280dc203620000961";
    const {id} = useParams();
    const [prodCat, setProdCat] = useState([]);
    const base_urll ="http://ecommerce.reworkstaging.name.ng/v2"

    const getProd =async ()=>{
        try {
            const res = await axios.get(`${base_urll}/products?merchant_id=${merchant_id}&category_id=${id}`) 
            if(res.status !== 200){
                throw new Error("error getting product");
            }
            console.log(res.data.data);
            setProdCat(res.data.data)
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(() => {
            getProd();
    }, [id]);
    // console.log(id);
    

    
    const {toggleDescription,toggleDescriptions,toggleDescriptionss,isOpenss,isOpens,isOpen} = useContext(CounterContext)

  return (
    <div> 
        <div className='bg-black w-full py-[6px] flex text-white text-[16px] text-center justify-center items-center cursor-pointer ' onClick={toggleDescription}>
           <p>CLICK HERE FOR 15% OFF
              <div className= {`mt-[17px] ${isOpen ? '' : 'hidden'}`}>
                  <p className='my-[10px]'>SIGN UP TO OUR NEWSLETTER FOR EXCLUSIVE OFFERS AND OUR LATEST NEWS</p>
                  <input className='bg-white rounded-full py-[6px] text-center px-[55px]' type="text" placeholder='Enter your email' />
                  <div>
                    <button className='bg-white rounded-full py-[6px] text-center px-[85px] text-black font-semibold my-[8px]'>GET MY 15% OFF</button>
                  </div>
                  <p className='text-[13px] mb-[20px]'>BY SIGNING UP YOU AGREE TO RECEIVE EMAIL MARKETING FROM DOROTHY PERKINS AND OUR FAMILY OF BRANDS. YOU CAN UNSUBSCRIBE AT ANY TIME. YOUR DETAILS WILL BE USED IN ACCORDANCE WITH OUR <span><u>PRIVACY POLICY</u></span> </p>
              </div>
           </p>
       </div>
        <div className='flex justify-center pt-[45px] pb-[20px]'>
            <p className='font-bold text-[30px]'>Women's Shoes</p>
        </div>
        <div className='flex px-[170px] gap-[40px]'>
            <div className='text-[18px]'>
                <div>
                    <div className='flex items-center gap-[130px] my-[17px] cursor-pointer' onClick={toggleDescriptions}>
                        <p>Category</p>
                        <SlArrowDown size={22}  />
                    </div>
                    <div className={`mt-[17px] ${isOpens ? '' : 'hidden'}`}>
                        <div className='flex mb-2'>
                            <div className='border rounded-md py-[12px] px-[15px] '></div>
                            <div className='ml-[10px]'>
                                <p>Boots</p>
                            </div>
                            <div className='text-gray-400 ml-[85px]'>
                                <p>(1662)</p>
                            </div>
                        </div>
                        <div className='flex mb-2'>
                            <div className='border rounded-md py-[12px] px-[15px] '></div>
                            <div className='ml-[10px]'>
                                <p>Flats</p>
                            </div>
                            <div className='text-gray-400 ml-[95px]'>
                                <p>(1662)</p>
                            </div>
                        </div>
                        <div className='flex mb-2'>
                            <div className='border rounded-md py-[12px] px-[15px] '></div>
                            <div className='ml-[10px]'>
                                <p>Heels</p>
                            </div>
                            <div className='text-gray-400 ml-[88px]'>
                                <p>(1662)</p>
                            </div>
                        </div>
                        <div className='flex mb-2'>
                            <div className='border rounded-md py-[12px] px-[15px] '></div>
                            <div className='ml-[10px]'>
                                <p>Sandals</p>
                            </div>
                            <div className='text-gray-400 ml-[70px]'>
                                <p>(1662)</p>
                            </div>
                        </div>
                        <div className='flex mb-2'>
                            <div className='border rounded-md py-[12px] px-[15px] '></div>
                            <div className='ml-[10px]'>
                                <p>Shoes</p>
                            </div>
                            <div className='text-gray-400 ml-[83px]'>
                                <p>(1662)</p>
                            </div>
                        </div>
                        <div className='flex mb-2'>
                            <div className='border rounded-md py-[12px] px-[15px] '></div>
                            <div className='ml-[10px]'>
                                <p>Trainers</p>
                            </div>
                            <div className='text-gray-400 ml-[70px]'>
                                <p>(1662)</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div>
                    <div className='flex items-center gap-[150px] my-[17px] cursor-pointer' onClick={toggleDescriptionss}>
                        <p>Colour</p>
                        <SlArrowDown size={22}  />
                    </div>
                    <div className={`mt-[17px] ${isOpenss ? '' : 'hidden'}`}>
                        <div className='flex mb-2'>
                                <div className='border rounded-md py-[12px] px-[15px] '></div>
                                <div className='border rounded-full py-[13px] px-[13px] ml-2 bg-blue-700 '></div>
                                <div className='ml-[10px]'>
                                    <p>Blue</p>
                                </div>
                                <div className='text-gray-400 ml-[60px]'>
                                    <p>(1662)</p>
                                </div>
                        </div>
                        <div className='flex mb-2'>
                                <div className='border rounded-md py-[12px] px-[15px] '></div>
                                <div className='border rounded-full py-[13px] px-[13px] ml-2 bg-gray-400 '></div>
                                <div className='ml-[10px]'>
                                    <p>Gray</p>
                                </div>
                                <div className='text-gray-400 ml-[60px]'>
                                    <p>(1662)</p>
                                </div>
                        </div>
                        <div className='flex mb-2'>
                                <div className='border rounded-md py-[12px] px-[15px] '></div>
                                <div className='border rounded-full py-[13px] px-[13px] ml-2 bg-green-700 '></div>
                                <div className='ml-[10px]'>
                                    <p>Green</p>
                                </div>
                                <div className='text-gray-400 ml-[48px]'>
                                    <p>(1662)</p>
                                </div>
                        </div>
                        <div className='flex mb-2'>
                                <div className='border rounded-md py-[12px] px-[15px] '></div>
                                <div className='border rounded-full py-[13px] px-[13px] ml-2 bg-red-700 '></div>
                                <div className='ml-[10px]'>
                                    <p>Red</p>
                                </div>
                                <div className='text-gray-400 ml-[65px]'>
                                    <p>(1666)</p>
                                </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div>
                    <div className='flex items-center gap-[172px] my-[17px]'>
                        <p>Size</p>
                        <SlArrowDown size={22}  />
                    </div>
                    <hr />
                </div>
                <div>
                    <div className='flex items-center gap-[166px] my-[17px]'>
                        <p>Style</p>
                        <SlArrowDown size={22}  />
                    </div>
                    <hr />
                </div>
                <div>
                    <div className='flex items-center gap-[150px] my-[17px]'>
                        <p>Brands</p>
                        <SlArrowDown size={22}  />
                    </div>
                    <hr />
                </div>
                <div>
                    <div className='flex items-center gap-[135px] my-[17px]'>
                        <p>Discount</p>
                        <SlArrowDown size={22}  />
                    </div>
                    <hr />
                </div>
                <div>
                    <div className='flex items-center gap-[166px] my-[17px]'>
                        <p>Price</p>
                        <SlArrowDown size={22}  />
                    </div>
                    <hr />
                </div>
            </div>
            <div>
                   <div className='flex justify-between items-center'>
                        <div>
                            <p>(5,959 products)</p>
                        </div>
                        <div className='flex gap-[30px] items-center'>
                            <p className='text-[20px]'>Sort: Relevance</p>
                            <span> <SlArrowDown size={14}  /></span>
                        </div>
                   </div>
                   <div>
                        <div className='flex gap-4 mt-[20px]'>
                            {
                                prodCat?.map((prod) =>(
                                    
                                    <div key={prodCat.id}>
                                    <Link to={`/detailpage/${prod.id}`}>
                                        <div className='h-[327px] w-[220px] bg-cover bg-center p-[25px] object-fill ' style={{ backgroundImage: `url(${prod.images })` }}>
                                                <div className='absolute h-[35px] w-[35px] bg-white rounded-full items-center flex justify-center ml-[150px] mt-[-10px]'>
                                                    <GoHeart size={19}/>
                                                </div>
                                        </div>
                                            <div className='mt-[15px]'>
                                                <p className='text-[14px] font-bold'>Dorothy Perkins</p>
                                                <p className='text-[14px]'>{prod.title}</p>
                                                <div className='flex items-center justify-between'>
                                                    <div className='flex gap-2'>
                                                        <p className='text-red-600 font-bold'>${prod.price}.10</p>
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
                                    </Link>
                                </div>
                                 ))
                            }  
                            {/* <div>
                                    <div className='h-[327px] w-[220px] bg-cover bg-center p-[25px] ' style={{ backgroundImage: `url("https://mediahub.debenhams.com/bqq19410_black_xl_1?qlt=80&w=288&h=432&dpr=1&fit=ctn")` }}>
                                            <div className='absolute h-[35px] w-[35px] bg-white rounded-full items-center flex justify-center ml-[150px] mt-[-10px]'>
                                                 <GoHeart size={19}/>
                                            </div>
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
                                    <div className='h-[327px] w-[220px] bg-cover bg-center p-[25px] ' style={{ backgroundImage: `url("https://mediahub.debenhams.com/bqq06232_black_xl_1?qlt=80&w=288&h=432&dpr=1&fit=ctn")` }}>
                                            <div className='absolute h-[35px] w-[35px] bg-white rounded-full items-center flex justify-center ml-[150px] mt-[-10px]'>
                                                    <GoHeart size={19}/>
                                            </div>
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
                                    <div className='h-[327px] w-[220px] bg-cover bg-center p-[25px] relative ' style={{ backgroundImage: `url("https://mediahub.debenhams.com/bqq10876_blush_xl_1?qlt=80&w=288&h=432&dpr=1&fit=ctn")` }}>
                                        <div className='absolute h-[35px] w-[35px] bg-white rounded-full items-center flex justify-center ml-[150px] mt-[-10px]'>
                                             <GoHeart size={19}/>
                                        </div>
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
                             */}
                        </div>
                        
                   </div>
                   <div>
                        <div className='flex justify-center my-[20px] text-[16px]'>
                            <p>Showing 40 of 5959</p>
                        </div>
                        <div className='border h-[5px] w-[330px] bg-gray-100 ml-[300px]'>
                            <hr />
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-full py-[15px] px-[100px] border border-black font-bold text-[16px] mt-[15px] '>LOAD MORE</button>
                        </div>
                        <div>
                            <p className='text-[14px] mt-[60px]'>Look to our collection of women’s shoes and get your looks sorted from the ground up. 
                                For work our edit covers everything from Chelsea boots to platform heels.
                                 If your aesthetic veers more towards athleisure, then trainers are what you need. For spe...
                            </p>
                            <p className='mt-[10px] mb-[50px] text-[14px] font-bold cursor-pointer'><u>Read More</u></p>
                        </div>
                   </div>
            </div>
        </div>
 </div>
  )
}

export default Shoppage