'use client';
import { useState,useEffect } from 'react';
import FirstItem from './breadFirstitem';
import OtherItems from './otherItems';

export default function BreadCrumb({steps}: { readonly steps: number}) {
  
  const [guestDetailsChecked, setGuestDetailsChecked] = useState(false);
  const [paymentDetailsChecked, setPaymentDetailsChecked] = useState(false);
  
  useEffect(() => {
    if (steps >= 2) {
      setGuestDetailsChecked(true);
    } else {
      setGuestDetailsChecked(false);
    }

    if (steps >= 3) {
      setPaymentDetailsChecked(true);
    } else {
      setPaymentDetailsChecked(false);
    }
  }, [steps]);


  return (
    
      <div className="flex items-center justify-evenly h-30 border-green-600 border-2 px-10 w-dvw sm:w-full space-x-5
      sm:space-x-0">
        <div className="w-20 sm:w-full max-w-30">
          <FirstItem name="Rooms & Dates" />
        </div>

        <div
            className={`w-10 sm:w-30 h-2 rounded-xl ${
              guestDetailsChecked ? 'bg-slate-950' : 'bg-gray-300'
            }`}
          ></div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="guestDetailsCheck"
            className='sr-only'
            checked={guestDetailsChecked}
            onChange={(e) => setGuestDetailsChecked(e.target.checked)}
          />
          <OtherItems name="Guest details" id={2} checked={guestDetailsChecked} />
        </div>

        <div
            className={`w-10 sm:w-30 h-2 rounded-xl ${
              paymentDetailsChecked ? 'bg-slate-950' : 'bg-gray-300'
            }`}
          ></div>

        <div className="flex items-center ">
          
          <input
            type="checkbox"
            id="paymentDetailscheck"
            className='sr-only'
            checked={paymentDetailsChecked}
            onChange={(e) => setPaymentDetailsChecked(e.target.checked)}
          />
          <OtherItems name="Payment details" id={3} checked={paymentDetailsChecked} />
        </div>
      </div>

    
  );
}
