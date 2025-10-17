'use client';
import { useSearchParams } from "next/navigation";
import { useRef,useState } from "react";


import { RoomModel } from "@/components/models/roomModel";
import PaginationControls from "@/components/utill/paginationControls";
import RoomCard from "./cards";
import {useRoomAPI} from "@/components/api-calls/get-all-room-api";


export default function Rooms(){

    const  roomsList : RoomModel[] = useRoomAPI();
    const avaliableRoomsRef = useRef(false);

   

    const handleItemsChanges = function(){
        avaliableRoomsRef.current = true;
        const avaliableBtn=document.getElementById('avaliable-rooms-btn');
        avaliableBtn?.classList.toggle('hidden:bg-gray-200');
        console.log(avaliableRoomsRef);
        
    }

    const searchParams = useSearchParams(); // Using client-side hook
    const page = searchParams.get('page') ?? '1';
    const per_page = searchParams.get('per_page') ?? '5';
  
    const start = (Number(page) - 1) * Number(per_page);
    const end = start + Number(per_page);
    const entries = roomsList.slice(start, end);

    return(
        <div className="w-full ">  
            <h1 className="text-center">booking rooms</h1>
            
            <div className="grid md:grid md:grid-cols-4">
                <div className="col-1 border-2 w-dvw sm:w-full h-full my-10 sm:my-0 p-5 ">
                    <div className="flex flex-wrap justify-evenly">
                        <button className="border-1 border-black/80 rounded-full px-3 py-1 bg-gray-200/80">
                            All Rooms
                        </button>
                        <button id="avaliable-rooms-btn" className="border-1 border-black/80 rounded-full px-3 py-1
                        hidden:bg-gray-200" onClick={handleItemsChanges}>
                            Avaliable Rooms
                        </button>
                    </div>
                </div>
                <div className="col-span-3 grid gap-8 w-full h-full md:px-10 p-5">
                {
                   roomsList.map((room)=>(

                    <div key={room.roomId}>
                        <RoomCard details={room}/>
                    </div>

                   ))
                }
                
                </div> 

            </div>

            <div className=" justify-items-center my-2">
          <PaginationControls
            hasNextPage={end < roomsList.length}
            hasPrevPage={start > 0}
            endPage={roomsList.length}
          />
        </div>

        </div>

    );

}