import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { useState } from "react";

export default function Caroucel({ slides = [], slides2 = [] }){

    const [current,  setCurrent] = useState(0);

    const [current2, setCurrent2] = useState(0);

    const formerSlide =()=>{
        if(current2 ===0) setCurrent2(slides2.length -1);
        else setCurrent2(current2-1)
    }
    const newSlide =()=>{
        if(current2 === slides2.length -1) setCurrent2(0);
        else setCurrent2(current2+1)
    }


    const previousSlide =()=>{
        if(current ===0) setCurrent(slides.length -1);
        else setCurrent(current-1)
    }
    const nextSlide =()=>{
        if(current === slides.length -1) setCurrent(0);
        else setCurrent(current+1)
    }

    return(
        <div>
            <div className="overflow-hidden relative"> 
                <div className={`flex transition ease-out duration-700`}  style={{transform:`translateX(-${current * 100}%)`}}>
                    { slides.map((s)=>{
                        return <img src={s}/>;
                    })}
                </div>
                <div className="absolute top-0 h-full w-full justify-between flex items-center px-10 text-[40px]">
                    <button  onClick={previousSlide}>

                        <IoIosArrowDropleft />
                    </button>
                    <button onClick={nextSlide}>
                        <IoIosArrowDropright />
                    </button>
                </div>
            </div>
            <div className="overflow-hidden relative"> 
                <div className={`flex transition ease-out duration-700`}  style={{transform:`translateX(-${current2 * 100}%)`}}>
                    { slides2.map((b)=>{
                        return <img src={b}/>;
                    })}
                </div>
                <div className="absolute top-0 h-full w-full justify-between flex items-center px-10 text-[40px]">
                    <button  onClick={formerSlide}>
                        <IoIosArrowDropleft />
                    </button>
                    <button onClick={newSlide}>
                        <IoIosArrowDropright />
                    </button>
                </div>
            </div>

        </div>

        

    )
}