'use client';
import { BookingModel } from "../models/bookingModel";
import axios from "axios";

export async function makeBooking(bookingDetails: BookingModel){

    const makeBooking = axios.post<BookingModel>(
            'http://localhost:8080/api/v1/booking/make',
            bookingDetails
        )  
   
    return ((await makeBooking).headers);
}
