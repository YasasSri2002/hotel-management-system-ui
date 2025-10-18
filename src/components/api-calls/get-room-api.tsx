'use client';
import { useState,useEffect } from "react";
import { RoomModel } from "../models/roomModel";
import axios from "axios";

const BASE_URl = process.env.SPRING_BACK_END_URL;

function getAllRooms(){

    const [roomList,setRoomList] =useState<RoomModel[]>([]);

    useEffect(()=>{
        const getRooms = async()=>{
        const response = await axios.get<RoomModel[]>(`http://localhost:8080/api/v1/admin/get-room`);
        setRoomList(response.data);
    }
    getRooms();
},[]

)

    return(roomList);
}

function getRoomByIdApi(id:number){

        const  response = axios.get<RoomModel>(
                'http://localhost:8080/api/v1/admin/get-room-by-id',
                {
                    params: {roomId: id}
                }

            )
    return(response);

}

function getRoomByType(roomType:string){

    const [roomList,setRoomList]= useState<RoomModel[]>();

    useEffect(()=>{

        const getRoomByType = async()=>{
            const response = await axios.get<RoomModel[]>(
                'http://localhost:8080/api/v1/admin/get-room-by-type',
                {
                    params: {
                        type : roomType
                    }
                }
            );
            setRoomList(response.data);
        }

        getRoomByType()
    },[])

    return(roomList);

}

export { getRoomByIdApi ,getRoomByType ,getAllRooms}
