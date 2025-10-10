'use client';
import {  useState } from "react";
export default function RoomCard(){
    
    const [avaliability, setAvaliability] = useState(true);

    return(
        <div className="w-full  grid gap-10 sm:gap-0 sm:grid sm:grid-cols-2 sm:justify-between  ">
            <div className="grid content-center justify-items-center sm:justify-items-normal border-2 border-red-400 p-5">
                <img src="/normalRoom.jpg"
                alt="room pic"
                className="rounded-2xl w-full h-full max-h-50 object-cover"/>
            </div>
            <div className="p-5 border-2 border-purple-600 grid gap-3">
                <div className="flex justify-end mb-2">
                {
                    avaliability ?
                    <h1 className="px-5 py-2 rounded-2xl border-2 border-green-400/60 text-green-500">
                        avaliability
                    </h1> : <h1 className="px-5 py-2 rounded-2xl border-2 border-red-400/60 text-red-500">
                    not avaliability
                    </h1>
                }
                </div>
                <div className="flex justify-between">
                    <div className="flex space-x-5">
                        <h1>No: ?</h1>
                        <h1>Executive Room</h1>
                    </div>
                <div className="flex space-x-5">
                    <h2>size: ?</h2>
                    <h2> Guests: ?</h2>
                </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt veritatis reprehenderit eaque inventore doloribus soluta minus excepturi, aliquam nemo qui nobis magnam consequuntur corrupti dolores. Delectus rem unde a ullam?</p>
                <div className="flex justify-end align-bottom h-fit">
                   {
                     avaliability ? 
                     <button className="py-1 px-5 border-2 border-green-400/60  rounded-2xl ">
                        Book this room
                     </button> : 
                     <button className="py-1 px-3 border-2 border-red-400/60 rounded-2xl disable ">
                        Not avaliable
                    </button>
                   }
                </div>
                
            </div>
        </div>
    )

}