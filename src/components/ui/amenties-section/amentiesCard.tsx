import DynamicIcon from "@/components/utill/DynamicIcons";
import { AmenitiesDetailsModel } from "@/components/models/amenitiesDetails";

export default function AmentiesCard({details}: {details: AmenitiesDetailsModel}){
    return(
        <>
            <div className="w-full sm:w-[35em] h-[20em] relative">
                <div className="rounded-2xl w-full h-full bg-cover bg-center shadow-2xl" 
                style={{ backgroundImage: `url(${details.imageUrl})` }}>
                    <div className="bg-black/60 rounded-2xl w-full h-full absolute inset-0 z-10"></div>
                    <div className="grid justify-items-center content-center text-white  h-full">
                        <DynamicIcon name={details.iconName} className="text-7xl z-20" />
                        <div className="grid justify-items-center content-center text-white z-20 py-5 px-10">
                            <h1 className="text-xl sm:text-2xl">{details.name}</h1>
                            <p className="text-md sm:text-lg text-center">{details.details}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}