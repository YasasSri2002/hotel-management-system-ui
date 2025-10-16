'use client';
import { useRef,useEffect } from "react";
export default function PaymentGatwayInterfaceForm(){

    const masterCardRadioRef = useRef<HTMLInputElement>(null);
    const visaCardRadioRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        document.getElementById('masterCardContainer')?.addEventListener('click',()=>{
        if(masterCardRadioRef.current){
            masterCardRadioRef.current.checked =true;
        }
    })
    document.getElementById('visaCardContainer')?.addEventListener('click',()=>{
        if(visaCardRadioRef.current){
            visaCardRadioRef.current.checked =true;
        }
    })
    },[])
    

    return(
        <div className="p-5 md:p-10">
            <h1 className="text-md sm:text-lg md:text-xl">Payment Details</h1>
            <h2 className="text-gray-400 text-sm sm:text-md md:text-lg">Enter your payment details to complete your booking</h2>
            <div className="mt-3 gap-5 grid">
                <div className="flex justify-evenly my-4">
                    <div className="flex space-x-2 border-1 rounded-xl px-4 py-1" id="masterCardContainer">
                        <input 
                            type="radio" 
                            name="choseCard" 
                            value=" master card"
                            ref ={masterCardRadioRef}
                         />
                        <label htmlFor="masterCard" >Master Card</label>
                    </div>
                    <div className="flex space-x-2 border-1 rounded-xl px-4 py-1" id="visaCardContainer">
                        <input 
                            type="radio" 
                            name="choseCard" 
                            ref={visaCardRadioRef}
                            />
                        <label htmlFor="visaCard">Visa Card</label>
                    </div>
                </div>
                <div className="grid gap-2">
                    <label htmlFor="name" className="ml-1">Cardholder's Name</label>
                    <input type="text" className="myInputClass" />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="cardNumber" className="ml-1">Card Number</label>
                    <input type="text" className="myInputClass" />
                </div>

                <div className="grid grid-cols-2 gap-x-10">
                    <div className="col-1 grid gap-2">
                        <label htmlFor="expDate" className="ml-2">Expire Date</label>
                        <input type="date" name="expDate" className="myInputClass" />
                    </div>
                    <div className="col-2 grid gap-2">
                        <label htmlFor="cvv" className="ml-2">Cvv</label>
                        <input type="text" className="myInputClass" />
                    </div>
                </div>

            </div>
        </div>
    )
}