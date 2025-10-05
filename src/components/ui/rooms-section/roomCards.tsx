import { features } from "process";
import DynamicIcon from "../../utill/DynamicIcons";
import { RoomDetailsModel } from "../../models/roomDetails";

export default function RoomCards({cardRoomDetails} : { readonly cardRoomDetails: RoomDetailsModel}){


    return(
            <div className="w-full sm:w-[25em] rounded-2xl h-[38em] shadow-2xl">
                <div 
                className="w-full h-70 bg-center bg-size-[100%_100%] bg-no-repeat rounded-2xl transition-all duration-500 ease-in-out hover:bg-size-[120%_120%]" 
                style={{ backgroundImage: `url(${cardRoomDetails.cardImage})` }}
                >
                    <div className="bg-white rounded-2xl w-fit p-2 relative top-2 left-2">
                        <h6 className="text-xs">${cardRoomDetails.price}/night</h6>
                    </div>
                </div>
                <div className="grid content-between h-[20em] p-4">
                    <h1 className="text-xl text-black">{cardRoomDetails.topic}</h1>
                <div className="flex space-x-5">
                    <div className="flex space-x-2 items-center ">
                        <DynamicIcon name="IoPeopleOutline" className="text-xl " />
                        <h2>{cardRoomDetails.guests}</h2>  
                    </div> 
                    <div className="flex space-x-2 items-center ">
                        <DynamicIcon name="BsArrowsFullscreen" className="text-xl font-light"  />
                        <h2>{cardRoomDetails.areaOfRoom}</h2>  
                    </div>  
                </div>
                <div>
                    <h5 className="text-lg text-black/90">features</h5>
                    <div className="flex flex-wrap flex-1 space-x-1 space-y-2 justify-evenly">
                         {
                          cardRoomDetails.features.map((feature=>(
                                <p key={feature} 
                                className="bg-gray-400/90 py-1 px-5 rounded-xl text-sm flex items-center justify-center"
                                >
                                    {feature}
                                </p>
                            )))
                        }
                       
                    </div>
                </div>
                <div>
                    <h5 className="text-lg text-black/90">Amenities</h5>
                    <div className="flex flex-1 flex-wrap mx-5 space-x-5 space-y-3 ">
                        {
                            cardRoomDetails.amentiesIconName.map((names)=>(
                                <div key={names} 
                                
                                >
                                    <DynamicIcon name={names} className="text-4xl p-2 bg-gray-400/50 border-2 rounded-xl"/>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="grid justify-items-center">
                    <button className="bg-slate-950 text-white/80  hover:-translate-1 rounded-2xl w-[20em] h-10">
                        Book this Room
                    </button>
                </div>
                </div>
            </div>
        
    );    
}