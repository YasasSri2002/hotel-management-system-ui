'use client';
import { useState,useEffect } from "react";
import { RoomModel } from "../models/roomModel";
import axios from "axios";
export async function GetRoomByIdApi(id:number){

    const [room,setRoom] = useState<RoomModel>();

    useEffect(()=>{

        const getRoomById = async () =>{
            const  response = await axios.get<RoomModel>(
                'http://localhost:8080/api/v1/admin/get-room-by-id',
                {
                    params: {roomId: id}
                }

            )
        setRoom(response.data)
        }
        getRoomById()

    },[])

    return await( console.log(room));

}