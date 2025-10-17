'use client';
import { useEffect } from "react";
import { BookingModel } from "../models/bookingModel";
import axios from "axios";

export async function makeBooking(bookingDetails: BookingModel){

    useEffect(()=>{
        const makeBooking = axios.post<BookingModel>(
            'http://localhost:8080/api/v1/booking/make',
            bookingDetails
        )  
    },[])


    return await(console.log("done"));
}
