import { AmenitiesDetailsModel } from "@/components/models/amenitiesDetails";
import AmentiesCard from "./amentiesCard";
import Cards from "../noBackgorundCars";

export default function AmenitiesSection(){

    const cardDetails:AmenitiesDetailsModel[] =[
        {
            id: 1,
            name: "Pool & Spa",
            iconName: "MdWaves",
            imageUrl: "https://images.unsplash.com/photo-1716667282993-cd8f2bffb91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBvb2wlMjBzcGF8ZW58MXx8fHwxNzU4MzczMjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            details: "Luxury wellness facilities"

        },
          {
            id: 2,
            name: "Fine Dining",
            iconName: "GiKnifeFork",
            imageUrl: "https://images.unsplash.com/photo-1543539571-2d88da875d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzU4MjkwMjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            details: "Award-winning cuisine"

        }
    ]

    return(
        <>
            <div>
                <div className="grid justify-items-center gap-10 p-10">
                    <h1 className="text-xs sm:text-sm border-1 bg-white shadow-xl rounded-xl p-2 px-5 hover:cursor-pointer hover:-translate-y-1 hover:scale-101 transition-all ease ">Hotel Amenities</h1>
                    <h2 className="text-xl sm:text-4xl">World-Class Facilities</h2>
                    <p className="text-lg sm:text-xl text-center">Discover our comprehensive range of amenities designed to enhance your stay and provide you with everything you need for business, leisure, and relaxation.</p>
                </div>
                
                <div className="grid sm:flex sm:flex-wrap sm:space-x-5 sm:space-y-5 sm:justify-evenly gap-5">
                    {
                        cardDetails.map((card)=>(
                            <AmentiesCard details={card} key={card.id}/>
                        ))
                    }
                </div>

                <div>
                    <Cards/>
                </div>
                
            </div>
        </>
    );
}