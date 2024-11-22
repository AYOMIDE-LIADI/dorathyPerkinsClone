import React from 'react'
import { CounterContext } from '../../context/cartCounterContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const DeletePage = () => {
  const {removeItem,cart} =  useContext(CounterContext);
  return (
    cart?.map(ca=>{
      return(
      <div className='bg-gray-300/50 min-h-screen flex justify-center items-center' key={ca.id}  style={{zIndex:2}}>
        <div className=" bg-white h-[150px] flex justify-center items-center rounded-lg w-[400px]">
          <div>
              <div>
                <p className='font-bold ml-6'>DELETE?</p>
              </div>
              <div className='flex gap-10'>
                <Link to={"/Cartpage"}>
                  <button className='bg-gray-400 p-1 rounded-md font-semibold' onClick={()=>removeItem(ca.id)}>YES</button>
                </Link>
                <Link to={"/Cartpage"}>
                  <button className='bg-gray-400 p-1 rounded-md font-semibold'>NO</button>
                </Link>
            </div>
          </div>
        </div>
      </div>
      )
    })
  )
}

export default DeletePage