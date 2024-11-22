import React from 'react'
import woman1 from '../images/woman1.jpeg'
import woman2 from '../images/woman2.jpeg'
import woman3 from '../images/woman3.jpeg'
import loafer from '../images/loafer.jpeg'
import { Link } from 'react-router-dom'
import Caroucel from '../carousel'
import { CounterContext } from '../../context/cartCounterContext';
import { useContext } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import pic from '../images/the image.webp'
import { CiCircleChevRight } from "react-icons/ci";
import { CiCircleChevLeft } from "react-icons/ci";

const Homepage = () => {

  const {toggleDescription,isOpen, goToNext2,goToPrev2,goToNext,goToPrev,sliderRef2,sliderRef,sliderSettings,sliderSettings2,sliderSettings3,slides,categoryy} = useContext(CounterContext)

 
  
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
       <div className='flex px-[60px] gap-[30px] py-[15px] items-center justify-center'>
        {
          categoryy.map(categ =>(
            <Link to={`/Shoppage/${categ.id}`}>
                <div className='text-center' key={categ.id}>
                    <img className='h-[130px] rounded-full w-[130px]' src={categ.image} alt={categ.name} />
                    <p className='pt-[8px] text-[14px]'>{categ.name}</p>
                </div>
            </Link>

          ))
        }
       </div>
       <div className='w-[100%] mb-5'>
           <Caroucel slides={slides}/>
       </div>
       <div>
          <img className='cursor-pointer' src="https://mediahub.dorothyperkins.com/dbz_prod_DP_EXTRA15_CODEEXTRA15_DT?qlt=80&w=1730&h=128&ttl=86400&dpr=1&fit=cvr" alt="" />
       </div>
       <div  className='py-[15px] overflow-hidden'>
              <Slider {...sliderSettings}>
                <div>
                  <img className='h-[45px]' src="https://mediahub.dorothyperkins.com/dbz_prod_OASIS_HOMEPAGE_MAYBELLINELOGO_WK26?qlt=80&w=216&h=69&ttl=86400&dpr=1&fit=cvr" alt="Maybelline" />
                </div>
                <div>
                  <img className='h-[45px]' src="https://mediahub.dorothyperkins.com/dbz_prod_OASIS_HOMEPAGE_DUNELOGO_WK26?qlt=80&w=216&h=107&ttl=86400&dpr=1&fit=cvr" alt="Dune" />
                </div>
                <div>
                  <img className='h-[45px]' src="https://mediahub.dorothyperkins.com/dbz_prod_OASIS_HOMEPAGE_GUCCILOGO_WK26?qlt=80&w=216&h=84&ttl=86400&dpr=1&fit=cvr" alt="Gucci" />
                </div>
                <div>
                  <img className='h-[45px]' src="https://mediahub.dorothyperkins.com/dbz_prod_OASIS_HOMEPAGE_ACCESSORIZELOGO_WK26?qlt=80&w=216&h=75&ttl=86400&dpr=1&fit=cvr" alt="Accessorize" />
                </div>
                <div>
                  <img className='h-[45px]' src="https://mediahub.dorothyperkins.com/dbz_prod_OASIS_HOMEPAGE_RAYBANLOGO_WK26?qlt=80&w=216&h=129&ttl=86400&dpr=1&fit=cvr" alt="Rayban" />
                </div>
                <div>
                  <img className='h-[45px]' src="https://mediahub.dorothyperkins.com/dbz_prod_OASIS_HOMEPAGE_OASISLOGO_WK26?qlt=80&w=216&h=107&ttl=86400&dpr=1&fit=cvr" alt="Oasis" />
                </div>
                <div>
                  <img className='h-[45px]' src="https://mediahub.dorothyperkins.com/dbz_prod_LOGO_DP?qlt=80&w=216&h=152&ttl=86400&dpr=1&fit=cvr" alt="DP" />
                </div>
                <div>
                  <img className='h-[45px]' src="https://mediahub.dorothyperkins.com/dbz_prod_OASIS_HOMEPAGE_MAYBELLINELOGO_WK26?qlt=80&w=216&h=69&ttl=86400&dpr=1&fit=cvr" alt="Maybelline" />
                </div>
                <div>
                  <img className='h-[45px]' src="https://mediahub.dorothyperkins.com/dbz_prod_OASIS_HOMEPAGE_DUNELOGO_WK26?qlt=80&w=216&h=107&ttl=86400&dpr=1&fit=cvr" alt="Dune" />
                </div>
                <div>
                  <img className='h-[45px]' src="https://mediahub.dorothyperkins.com/dbz_prod_OASIS_HOMEPAGE_GUCCILOGO_WK26?qlt=80&w=216&h=84&ttl=86400&dpr=1&fit=cvr" alt="Gucci" />
                </div>
                <div>
                  <img className='h-[45px]' src="https://mediahub.dorothyperkins.com/dbz_prod_OASIS_HOMEPAGE_ACCESSORIZELOGO_WK26?qlt=80&w=216&h=75&ttl=86400&dpr=1&fit=cvr" alt="Accessorize" />
                </div>
                <div>
                  <img className='h-[45px]' src="https://mediahub.dorothyperkins.com/dbz_prod_OASIS_HOMEPAGE_RAYBANLOGO_WK26?qlt=80&w=216&h=129&ttl=86400&dpr=1&fit=cvr" alt="Rayban" />
                </div>
                <div>
                  <img className='h-[45px]' src="https://mediahub.dorothyperkins.com/dbz_prod_OASIS_HOMEPAGE_OASISLOGO_WK26?qlt=80&w=216&h=107&ttl=86400&dpr=1&fit=cvr" alt="Oasis" />
                </div>
                <div>
                  <img className='h-[45px]' src="https://mediahub.dorothyperkins.com/dbz_prod_LOGO_DP?qlt=80&w=216&h=152&ttl=86400&dpr=1&fit=cvr" alt="DP" />
                </div>
              </Slider>
          </div>

       <div className='flex gap-[30px]'>
              <div className='h-[447px] w-[360px] bg-cover bg-center' style={{ backgroundImage: `url(${woman1})` }}>
                <div class='bg-gradient-to-t from-black to-transperent p-[25px] h-full'>
                    <p className='font-bold text-[24px] text-white mt-[275px] pb-[15px]'>Dresses £30 & Under</p>
                    <button className='border border-white rounded-md text-center px-[100px] font-bold text-white py-[20px] hover:bg-white hover:text-black'>SHOP NOW</button>
                </div>
              </div>
              <div className='h-[447px] w-[360px] bg-cover bg-center ' style={{ backgroundImage: `url(${woman2})` }}>
                <div class='bg-gradient-to-t from-black to-transperent p-[25px] h-full'>
                    <p className='font-bold text-[24px] text-white mt-[275px] pb-[15px]'>Dresses </p>
                    <button className='border border-white rounded-md text-center px-[100px] font-bold text-white py-[20px] hover:bg-white hover:text-black'>SHOP NOW</button>
                </div>
              </div>
              <div className='h-[447px] w-[360px] bg-cover bg-center ' style={{ backgroundImage: `url(${woman3})` }}>
                  <div class='bg-gradient-to-t from-black to-transperent p-[25px] h-full'>
                      <p className='font-bold text-[24px] text-white mt-[275px] pb-[15px]'>Tops</p>
                      <button className='border border-white rounded-md text-center px-[100px] font-bold text-white py-[20px] hover:bg-white hover:text-black'>SHOP NOW</button>
                  </div>
              </div>
              <div className='h-[447px] w-[360px] bg-cover bg-center' style={{ backgroundImage: `url(${loafer})` }}>
                  <div class='bg-gradient-to-t from-black to-transperent p-[25px] h-full'>
                      <p className='font-bold text-[24px] text-white mt-[275px] pb-[15px]'>Shoes</p>
                      <button className='border border-white rounded-md text-center px-[100px] font-bold text-white py-[20px] hover:bg-white hover:text-black'>SHOP NOW</button>
                  </div>
              </div>   
      </div>
      <div className='mt-[30px]'>
          <img className='cursor-pointer' src="https://mediahub.dorothyperkins.com/dbz_prod_WK24_BRANDROOM_BANNER_DP_DT?qlt=80&w=1730&h=280&ttl=86400&dpr=1&fit=cvr" alt="" />
      </div>
      <div className='flex items-center justify-between'>
          <div className='py-[30px]'>
              <p className='text-[40px] font-bold'>Seasonal top picks</p>
              <p className='py-[10px] text-[20px]'>Shop trending favourites at DP</p>
          </div>
          <div className='gap-[30px] flex'>
                <button className='bg-black text-white py-[6px] px-[10px] rounded-md cursor-pointer hover:bg-gray-500'>Fashion</button>
                <button className='border py-[6px] px-[10px] rounded-md cursor-pointer'>Beauty</button>
                <button className='border py-[6px] px-[10px] rounded-md cursor-pointer'>Home</button>
                <button className='border py-[6px] px-[10px] rounded-md cursor-pointer'>Brands</button>
          </div>
      </div>
      <div className=' relative gap-[12px] mb-[60px] overflow-hidden ' >
        
          <Slider ref={sliderRef}  {...sliderSettings3} >
            
            <div className='ml-[150px] pr-[200px]'>
                <div className='relative group h-[510px] w-[310px]'>
                    <img  className=' absolute h-[510px] w-[310px] block group-hover:hidden' src="https://mediahub.debenhams.com/bqq19221_berry_xl_1?qlt=80&w=384&h=576&dpr=1&fit=ctn" alt="" />
                    <img className=' hidden group-hover:block h-[510px] w-[310px] ' src="https://mediahub.debenhams.com/bqq19282_animal_xl_1?qlt=80&w=384&h=576&dpr=1&fit=ctn" alt="" />
                </div>
                <div className='mt-[15px]'>
                    <p className='text-[14px] font-bold'>Dorothy Perkins</p>
                    <p className='text-[14px]'>Animal Overhead </p>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2'>
                            <p className='text-red-600'>$26.10</p>
                            <p className='line-through'>$29.00</p>
                        </div>
                        <div>
                          <p className='text-red-600'>Save 10%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ml-[15px]'>
                <div className='relative group h-[510px] w-[310px]'>
                    <img  className='absolute h-[510px] w-[310px] block group-hover:hidden' src={pic} alt="" />
                    <img  className=' hidden group-hover:block h-[510px] w-[310px]' src="https://mediahub.debenhams.com/bqq19220_mono_xl_1?qlt=80&w=384&h=576&dpr=1&fit=ctn" alt="" />
                </div>
                <div className='mt-[15px]'>
                    <p className='text-[14px] font-bold'>Dorothy Perkins</p>
                    <p className='text-[14px]'>Mono Spot V Neck Midi Dress </p>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2'>
                            <p className='text-red-600'>$26.10</p>
                            <p className='line-through'>$29.00</p>
                        </div>
                        <div>
                          <p className='text-red-600'>Save 10%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ml-[30px]'>
                <div className='relative group h-[510px] w-[310px]'>
                    <img  className='absolute h-[510px] w-[310px] block group-hover:hidden' src={pic} alt="" />
                    <img className=' hidden group-hover:block h-[510px] w-[310px]' src="https://mediahub.debenhams.com/bqq19221_berry_xl_1?qlt=80&w=384&h=576&dpr=1&fit=ctn" alt="" />
                </div>
                <div className='mt-[15px]'>
                    <p className='text-[14px] font-bold'>Dorothy Perkins</p>
                    <p className='text-[14px]'>Berry Animal Key Hole Midi Dress </p>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2'>
                            <p className='text-red-600'>$26.10</p>
                            <p className='line-through'>$29.00</p>
                        </div>
                        <div>
                          <p className='text-red-600'>Save 10%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ml-[45px]'>
                <div className='relative group h-[510px] w-[310px]'>
                    <img  className='absolute h-[510px] w-[310px] block group-hover:hidden' src={pic} alt="" />
                    <img className=' hidden group-hover:block h-[510px] w-[310px]' src="https://mediahub.debenhams.com/bqq19314_floral_xl_1?qlt=80&w=384&h=576&dpr=1&fit=ctn" alt="" />
                </div>
                <div className='mt-[15px]'>
                    <p className='text-[14px] font-bold'>Dorothy Perkins</p>
                    <p className='text-[14px]'>Spaced Floral Long Sleeve Midi Dress</p>
                    <div className='flex items-center justify-between '>
                        <div className='flex gap-2'>
                            <p className='text-red-600'>$26.10</p>
                            <p className='line-through'>$29.00</p>
                        </div>
                        <div>
                          <p className='text-red-600'>Save 10%</p>
                        </div>
                    </div>
                </div>
            </div>    
            <div className='ml-[60px]'>
                <div className='relative group h-[510px] w-[310px]'>
                    <img  className='absolute h-[510px] w-[310px] block group-hover:hidden' src={pic} alt="" />
                    <img className=' hidden group-hover:block h-[510px] w-[310px]' src="https://mediahub.debenhams.com/bqq19314_floral_xl_1?qlt=80&w=384&h=576&dpr=1&fit=ctn" alt="" />
                </div>
                <div className='mt-[15px]'>
                    <p className='text-[14px] font-bold'>Dorothy Perkins</p>
                    <p className='text-[14px]'>Spaced Floral Long Sleeve Midi Dress</p>
                    <div className='flex items-center justify-between '>
                        <div className='flex gap-2'>
                            <p className='text-red-600'>$26.10</p>
                            <p className='line-through'>$29.00</p>
                        </div>
                        <div>
                          <p className='text-red-600'>Save 10%</p>
                        </div>
                    </div>
                </div>
            </div>    
            <div className='ml-[75px]'>
                <div className='relative group h-[510px] w-[310px]'>
                    <img  className='absolute h-[510px] w-[310px] block group-hover:hidden' src={pic} alt="" />
                    <img className=' hidden group-hover:block h-[510px] w-[310px]' src="https://mediahub.debenhams.com/bqq19314_floral_xl_1?qlt=80&w=384&h=576&dpr=1&fit=ctn" alt="" />
                </div>
                <div className='mt-[15px]'>
                    <p className='text-[14px] font-bold'>Dorothy Perkins</p>
                    <p className='text-[14px]'>Spaced Floral Long Sleeve Midi Dress</p>
                    <div className='flex items-center justify-between '>
                        <div className='flex gap-2'>
                            <p className='text-red-600'>$26.10</p>
                            <p className='line-through'>$29.00</p>
                        </div>
                        <div>
                          <p className='text-red-600'>Save 10%</p>
                        </div>
                    </div>
                </div>
            </div>    
            <div className='ml-[90px]'>
                <div className='relative group h-[510px] w-[310px]'>
                    <img  className='absolute h-[510px] w-[310px] block group-hover:hidden' src={pic} alt="" />
                    <img className=' hidden group-hover:block h-[510px] w-[310px]' src="https://mediahub.debenhams.com/bqq19314_floral_xl_1?qlt=80&w=384&h=576&dpr=1&fit=ctn" alt="" />
                </div>
                <div className='mt-[15px]'>
                    <p className='text-[14px] font-bold'>Dorothy Perkins</p>
                    <p className='text-[14px]'>Spaced Floral Long Sleeve Midi Dress</p>
                    <div className='flex items-center justify-between '>
                        <div className='flex gap-2'>
                            <p className='text-red-600'>$26.10</p>
                            <p className='line-through'>$29.00</p>
                        </div>
                        <div>
                          <p className='text-red-600'>Save 10%</p>
                        </div>
                    </div>
                </div>
            </div>    
            <div className='ml-[105px]'>
                <div className='relative group h-[510px] w-[310px]'>
                    <img  className='absolute h-[510px] w-[310px] block group-hover:hidden' src={pic} alt="" />
                    <img className=' hidden group-hover:block h-[510px] w-[310px]' src="https://mediahub.debenhams.com/bqq19314_floral_xl_1?qlt=80&w=384&h=576&dpr=1&fit=ctn" alt="" />
                </div>
                <div className='mt-[15px]'>
                    <p className='text-[14px] font-bold'>Dorothy Perkins</p>
                    <p className='text-[14px]'>Spaced Floral Long Sleeve Midi Dress</p>
                    <div className='flex items-center justify-between '>
                        <div className='flex gap-2'>
                            <p className='text-red-600'>$26.10</p>
                            <p className='line-through'>$29.00</p>
                        </div>
                        <div>
                          <p className='text-red-600'>Save 10%</p>
                        </div>
                    </div>
                </div>
            </div>    
            <div className='ml-[120px]'>
                <div className='relative group h-[510px] w-[310px]'>
                    <img  className='absolute h-[510px] w-[310px] block group-hover:hidden' src={pic} alt="" />
                    <img className=' hidden group-hover:block h-[510px] w-[310px]' src="https://mediahub.debenhams.com/bqq19314_floral_xl_1?qlt=80&w=384&h=576&dpr=1&fit=ctn" alt="" />
                </div>
                <div className='mt-[15px]'>
                    <p className='text-[14px] font-bold'>Dorothy Perkins</p>
                    <p className='text-[14px]'>Spaced Floral Long Sleeve Midi Dress</p>
                    <div className='flex items-center justify-between '>
                        <div className='flex gap-2'>
                            <p className='text-red-600'>$26.10</p>
                            <p className='line-through'>$29.00</p>
                        </div>
                        <div>
                          <p className='text-red-600'>Save 10%</p>
                        </div>
                    </div>
                </div>
            </div>    
            <div className='ml-[135px]'>
                <div className='relative group h-[510px] w-[310px]'>
                    <img  className='absolute h-[510px] w-[310px] block group-hover:hidden' src={pic} alt="" />
                    <img className=' hidden group-hover:block h-[510px] w-[310px]' src="https://mediahub.debenhams.com/bqq19314_floral_xl_1?qlt=80&w=384&h=576&dpr=1&fit=ctn" alt="" />
                </div>
                <div className='mt-[15px]'>
                    <p className='text-[14px] font-bold'>Dorothy Perkins</p>
                    <p className='text-[14px]'>Spaced Floral Long Sleeve Midi Dress</p>
                    <div className='flex items-center justify-between '>
                        <div className='flex gap-2'>
                            <p className='text-red-600'>$26.10</p>
                            <p className='line-through'>$29.00</p>
                        </div>
                        <div>
                          <p className='text-red-600'>Save 10%</p>
                        </div>
                    </div>
                </div>
                
            </div>  
          
          </Slider>
                <button onClick={goToPrev} className='absolute top-56 left-4'>
                 <CiCircleChevLeft color='black' size={28} className='bg-white rounded-full'/>   
                </button>
                <button onClick={goToNext} className='absolute top-56 right-4 '>
                <CiCircleChevRight color='black' size={28} className='bg-white rounded-full' />
                </button>
      </div>
      <div className='relative overflow-hidden '>
          
          <Slider ref={sliderRef2} {...sliderSettings2}>
            <img src="https://mediahub.dorothyperkins.com/dbz_prod_DP_WK34_HERO_NEWDRESSES_DT?qlt=80&w=1730&h=727&ttl=86400&dpr=1&fit=cvr" alt="" />
            <img src="https://mediahub.dorothyperkins.com/dbz_prod_DP_WK17_HERO_TAILORING_DT?qlt=80&w=1730&h=727&ttl=86400&dpr=1&fit=cvr"alt="" />
          </Slider>
          <button onClick={goToPrev2}  className='absolute top-72 left-4'>
                 <CiCircleChevLeft color='black' size={28} className='bg-white rounded-full'/>   
                </button>
                <button onClick={goToNext2} className='absolute top-72 right-4 '>
                <CiCircleChevRight color='black' size={28} className='bg-white rounded-full' />
                </button>
      </div>
      <div className='text-center text-[24px] font-bold py-[30px]'>
        <p>Shop Our Favourite Brands</p>
      </div>
      <div className='flex gap-[6px]'>
            <div>
              <img className='cursor-pointer' src="https://mediahub.dorothyperkins.com/dbz_prod_WK45_Izabel-London?qlt=80&w=433&h=542&ttl=86400&dpr=1&fit=cvr" alt="" />
            </div>
            <div>
              <img className='cursor-pointer' src="https://mediahub.dorothyperkins.com/dbz_prod_CAT_YOURS_WK22?qlt=80&w=433&h=542&ttl=86400&dpr=1&fit=cvr" alt="" />
            </div>
            <div>
              <img className='cursor-pointer' src="https://mediahub.dorothyperkins.com/dbz_prod_WK45_Threadbare_W?qlt=80&w=433&h=542&ttl=86400&dpr=1&fit=cvr" alt="" />
            </div>
            <div>
              <img className='cursor-pointer' src="https://mediahub.dorothyperkins.com/dbz_prod_WK45_Wheres_That_From?qlt=80&w=433&h=542&ttl=86400&dpr=1&fit=cvr" alt="" />
            </div>
      </div>
      <div>
        <p className='text-[16px] text-center py-[60px] px-[120px]' >Welcome to DP, where effortless, everyday pieces combine for a curated wardrobe you'll love. 
          Explore our latest collections and discover hard-working, elevated feminine designs for busy moments and non-stop schedules.
           Signature florals, art-inspired prints, trending colours and considered details breathe life into midi dresses, jumpsuits and more,
            offering understated elegance you can always rely on. Update your wardrobe with versatile,
           new season essentials you can dress up and down, time and time again.
        </p>
      </div>

       
   </div>
  )
}

export default Homepage