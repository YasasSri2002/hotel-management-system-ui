'use client'
import BookingForm from "@/components/ui/booking-page/bookingForm"
import { useSearchParams } from "next/navigation";

export default function BookingPage(){

    const searchParams = useSearchParams();
    const roomIdParam = searchParams.get("roomId")
    const roomId = roomIdParam ? Number(roomIdParam) : null;

    if(roomId ==null ) return "select the room";

    return(
        <BookingForm roomIdToGetData={roomId}/>
    )
}