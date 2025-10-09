'use client';
import { useSearchParams } from "next/navigation";
import { useRef,useState } from "react";

import axios from "axios";

import { RoomModel } from "@/components/models/roomModel";
import PaginationControls from "@/components/utill/paginationControls";
import RoomCard from "./cards";


export default function Rooms(){

    const avaliableRoomsRef = useRef(false);
    const [roomsList,setRoomsList] = useState<RoomModel[]>([]);

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
                <div className="col-1 border-2 w-dvw sm:w-full h-full my-10 sm:my-0">
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
                <div className="col-span-3 border-2 border-red-400 w-full h-full">
                <RoomCard/>
                
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