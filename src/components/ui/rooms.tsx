import RoomCards from "./roomCards";

export default function RoomSection(){
    return(
        <>
        <div>
            <div className="grid justify-items-center gap-10 p-10">
                <h1 className="text-2xl sm:text-sm border-1 bg-white shadow-xl rounded-xl p-2 px-5 hover:cursor-pointer hover:-translate-y-1 hover:scale-101 transition-all ease ">Our Rooms</h1>
                <h2 className="text-xl sm:text-4xl">Comfort & Elegance</h2>
                <p className="text-lg sm:text-xl text-center">Choose from our carefully designed rooms and suites, each offering modern amenities and stunning views to ensure your stay is both comfortable and memorable.</p>
            </div>
            <RoomCards/>
        </div>
        </>
    );
}