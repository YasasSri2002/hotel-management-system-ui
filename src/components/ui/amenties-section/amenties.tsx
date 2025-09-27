import AmentiesCard from "./amentiesCard";

export default function AmenitiesSection(){
    return(
        <>
            <div>
                <div className="grid justify-items-center gap-10 p-10">
                    <h1 className="text-xs sm:text-sm border-1 bg-white shadow-xl rounded-xl p-2 px-5 hover:cursor-pointer hover:-translate-y-1 hover:scale-101 transition-all ease ">Hotel Amenities</h1>
                    <h2 className="text-xl sm:text-4xl">World-Class Facilities</h2>
                    <p className="text-lg sm:text-xl text-center">Discover our comprehensive range of amenities designed to enhance your stay and provide you with everything you need for business, leisure, and relaxation.</p>
                </div>
                <AmentiesCard/>
            </div>
        </>
    );
}