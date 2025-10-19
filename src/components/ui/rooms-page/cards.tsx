
import { RoomModel } from "@/components/models/roomModel";

export default function RoomCard({details}: {readonly details: RoomModel}){
    
    return(
        <div className="w-full  grid gap-10 sm:gap-0 sm:grid sm:grid-cols-2 sm:justify-between rounded-2xl shadow-lg border-t-1 ">
            <div className="grid content-center justify-items-center sm:justify-items-normal p-5">
                <img src="/normalRoom.jpg"
                alt="room pic"
                className="rounded-2xl w-full h-full max-h-50 object-cover"/>
            </div>
            <div className="p-5 grid gap-3">
                <div className="grid gap-2 mb-2">
                    <div className="flex justify-between space-x-5">
                        <h1>{details.type}</h1>
                        <h1>Room No: 0{details.roomId}</h1>
                    </div>
                <div className="flex justify-between space-x-5">
                    <h2>Size: {details.roomSize} sq ft<sup>2</sup></h2>
                    <h2> Guests: {details.minGuestSize} - {details.maxGuestSize}</h2>
                </div>
                </div>
                <p>{details.description}</p>
                <div className="flex justify-end align-bottom h-fit">
                  
                     <button className="py-1 px-5 border-2 border-green-400/60  rounded-2xl ">
                        Book this room
                     </button> :
                
                </div>
                
            </div>
        </div>
    )

}