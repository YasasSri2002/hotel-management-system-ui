import Link from "next/link";

import RoomCards from "./roomCards";
import { RoomDetailsModel } from "../../models/roomDetails";
import { HeaderModel } from "@/components/models/header";
import HeaderSection from "../header";
import DynamicIcon from "@/components/utill/DynamicIcons";

const roomCardDetailsList: RoomDetailsModel[] =[
    {           id:1,
                topic:"Deluxe Suite",
                guests: "2-4 Guests",
                cardImage: "https://images.unsplash.com/photo-1744000311897-510b64f9a2e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN1aXRlJTIwYmVkcm9vbXxlbnwxfHx8fDE3NTgzNzMyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                areaOfRoom: "650 sq ft",
                features:["kings size","City View","Mini Bar","Jacuzzi"],
                amentiesIconName:["FaWifi","PiBathtubLight", "FiCoffee" , "FiTv"], 
                price:199
    },{         
                id:2,
                topic:"Executive Room",
                cardImage: "https://images.unsplash.com/photo-1729605411476-defbdab14c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGRlbHV4ZSUyMHJvb218ZW58MXx8fHwxNzU4MzczMjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                guests: "2 Guests",
                areaOfRoom: "450 sq ft",
                features:["Queen Bed","Work Desk","Coffee Machine","City View"],
                amentiesIconName:["FaWifi","PiBathtubLight", "FiCoffee" , "FiTv"], 
                price:99
    },{         
                id:3,
                topic:"Standard Room",
                guests: "2 Guests",
                cardImage: "https://images.unsplash.com/photo-1670800050441-e77f8c82963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN0YW5kYXJkJTIwcm9vbXxlbnwxfHx8fDE3NTgzNTcxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                areaOfRoom: "350 sq ft",
                features:["Double Bed","Tea station","Safe","Garden View"],
                amentiesIconName:["FaWifi","PiBathtubLight", "FiCoffee" ], 
                price:49
    }
]

const headerDetails:HeaderModel = {
    sectionTopic: "Our Rooms",
    topic: "Comfort & Elegance",
    details: "Choose from our carefully designed rooms and suites, each offering modern amenities and stunning views to ensure your stay is both comfortable and memorable."
}

export default function RoomSection(){
    return(
    
        <div id="rooms-section">
            <HeaderSection details={headerDetails}/>
           <div className="grid sm:flex sm:flex-wrap sm:space-x-5 sm:mx-5 sm:justify-evenly gap-5">
            {
                roomCardDetailsList.map((details)=>(
                    <div key={details.id}>
                        <RoomCards cardRoomDetails={details}/>
                    </div>
                ))     
            }
            <Link href="/rooms" className="flex space-x-10 items-center ">More Rooms<DynamicIcon name="MdWaves"/></Link>
           </div>
        </div>
        
    );
}