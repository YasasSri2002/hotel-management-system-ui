export default function RoomsDetailsForm(){
    return(
        <div className="grid px-5 gap-3">
            <div className="grid gap-1 ">
                <h1 className="text-md sm:text-lg md:text-xl">Rooms & Dates</h1>
                <h2 className="text-gray-400 text-sm sm:text-md md:text-lg">select your room type and travel dates</h2>
            </div>

            <div>
                <div className="grid">
                    <label htmlFor="roomType">Room Type</label>
                    <select name="roomType" className="">
                        <option value="">Select a Room</option>
                    </select>
                </div>

            </div>

        </div>
    )
}