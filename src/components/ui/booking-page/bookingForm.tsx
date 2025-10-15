'use client';
import Link from "next/link";
import { useState } from "react";

import DynamicIcon from "../../utill/DynamicIcons";
import BreadCrumb from "./bread-crumb/bookingBredcrumb";
import BookingSummary from "./bookingSummary";
import RoomsDetailsForm from "./forms/roomsDetailsForm";
import GuestDetailsForm from "./forms/guestDetailsForm";
import PaymentGatwayInterfaceForm from "./forms/paymentGatewayInterfaceFrom";


export default function BookingForm(){

    const [step,setStep] =useState<number>(1);

    const handlePrev = function(){
        setStep(prev => Math.max(prev - 1, 1));
        
    }
    const handleNext = function(){
        setStep((prev) => Math.min(prev + 1, 3));
        
    }

    const renderForms = ()=>{

        switch(step){
            case 1:
                return(<RoomsDetailsForm/>);
            case 2:
                return(<GuestDetailsForm/>);
            case 3:
                return(<PaymentGatwayInterfaceForm/>)
        }

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

            <div className="grid justify-items-center md:grid-cols-4 w-full p-5 gap-5 ">
               <div className="md:col-span-3 border-t-1 rounded-3xl shadow-xl w-3xl">
                    {renderForms()}
               </div>
               <div className="md:col-4">
                    <BookingSummary/>
               </div>
            </div> 

            <div className="flex space-x-5 mt-3 w-full justify-center">
                <button id="prev" className={`border-2 px-4 py-1 ${step==1 ? 'sr-only': 'not-sr-only'} `}
                disabled={step==1}
                onClick={handlePrev}
                >
                    Prev
                </button>
                <button id="next" className={`border-2 px-4 py-1 ${step==3 ? 'sr-only': 'not-sr-only'}`}
                onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
}