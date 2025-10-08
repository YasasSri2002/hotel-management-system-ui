'use client';
import { useRef } from "react";
import axios from "axios";
import { RoomModel } from "@/components/models/roomModel";
export default function Rooms(){

    const avaliableRoomsRef = useRef(false);

    const avaliableRoomsapi = async()=>{
        axios.get<RoomModel>('http://localhost:8080/api/v1/rooms/avaliable');
    }

    const handleItemsChanges = function(){
        avaliableRoomsRef.current = true;
        const avaliableBtn=document.getElementById('avaliable-rooms-btn');
        avaliableBtn?.classList.toggle('hidden:bg-gray-200');
        console.log(avaliableRoomsRef);
        avaliableRoomsapi();
    }

    return(
        <div className="w-full h-full">  
            <h1 className="text-center">booking rooms</h1>
            
            <div className="grid md:grid md:grid-cols-4">
                <div className="col-1 border-2 w-full h-full">
                    <div className="flex flex wrap justify-evenly">
                        <button className="border-1 border-black/80 rounded-full px-3 py-1 bg-gray-200/80">
                            All Rooms
                        </button>
                        <button id="avaliable-rooms-btn" className="border-1 border-black/80 rounded-full px-3 py-1
                        hidden:bg-gray-200" onClick={handleItemsChanges}>
                            Avaliable Rooms
                        </button>
                    </div>
                </div>
                <div className="col-2 col-span-3 border-2 border-red-400 w-full h-full">
                
                </div> 
            </div>

        </div>

    );

}