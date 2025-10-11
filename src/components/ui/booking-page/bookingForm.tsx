'use client';
import Link from "next/link";
import { useState } from "react";

import DynamicIcon from "../../utill/DynamicIcons";
import BreadCrumb from "./bread-crumb/bookingBredcrumb";

export default function BookingForm(){

    const [step,setStep] =useState<number>(1);

    const handlePrev = function(){
        setStep(prev => Math.max(prev - 1, 1));
        
    }
    const handleNext = function(){
        setStep((prev) => Math.min(prev + 1, 3));
        
    }


    return(
        <div className="grid">

            <div id="header" className="w-dvw sm:w-full">
                <div className="flex justify-between items-center px-10 w-dvw sm:w-full border-gray-400/60 border-b-1 h-10 sm:h-20 ">
                    <button className="my-5">
                        <Link href={"/"} className="flex justify-center items-center">
                            <DynamicIcon name="MdOutlineKeyboardArrowLeft" className="text-xl sm:text-2xl" />back to home
                        </Link>
                    </button>
                    
                    <h1 className="text-center text-md sm:text-lg md:text-2xl">Urbanite</h1>
                    
                </div>
            </div>

             <div id="breadCrumb">
                <BreadCrumb steps={step}/>
            </div> 

            <div className="flex space-x-5">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" />
            </div>

            <div className="flex space-x-5 mt-3">
                <button id="prev" className="border-2 px-4 py-1"
                disabled={step==1}
                onClick={handlePrev}
                >
                    Prev
                </button>
                <button id="next" className="border-2 px-4 py-1"
                disabled= {step==3}
                onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
}