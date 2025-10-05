'use client';
import axios from "axios";
import { useEffect,useState } from "react";
import { RoomModel } from "../models/roomModel";
export default function RoomAPI(){

    const [room,setRoom] =useState<RoomModel[]>([]);

    useEffect(()=>{
        const getRooms = async()=>{
        const response = await axios.get<RoomModel[]>('http://localhost:8080/api/v1/admin/get-room');
        setRoom(response.data);
    }
    getRooms();
},[]

)

    return({room});
}