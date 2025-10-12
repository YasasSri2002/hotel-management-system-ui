import DynamicIcon from "@/components/utill/DynamicIcons"

export default function BookingSummary(){
    return(
        <div className="border-4 border-pink-300 rounded-2xl h-fit">
           <div className="px-10 py-2">
             <h1 className="text-md md:text-lg text-black/90 mb-5">Booking review summary</h1>
            <div className="grid gap-y-5">
                <div className="border-b-1 border-gray-400 pb-2 mb-2">
                    <h2 className="text-sm text-gray-500">Room Type</h2>
                    <p className="text-md  text-black/95">Deluxe Room</p>
                </div>
                <div className="border-b-1 border-gray-300 grid gap-2 pb-2 mb-2">
                    <div>
                        <h2 className="text-sm text-gray-500">Check In </h2>
                        <p className="text-md  text-black/95">Not Selected</p>
                    </div>
                    <div>
                        <h2 className="text-sm text-gray-500">Check Out </h2>
                        <p className="text-md  text-black/95">Not Selected</p>
                    </div>
                </div>
                <div className="border-b-1 border-gray-400 pb-2 mb-2">
                    <div className="flex items-center space-x-2">
                        <DynamicIcon name="MdPeople"/>
                        <h2 className="text-sm text-gray-500">0 Adults</h2>
                        <h2 className="text-sm text-gray-500">0 Children</h2>
                    </div>
                    
                </div>
                <div className="grid gap-2">
                    <div className="border-b-1 border-gray-400 pb-2 mb-2">
                        <div className="flex justify-between items-center ">
                            <h2 className="text-sm text-gray-500">Room rate</h2>
                            <h2 className="text-sm text-black/95">$250/night</h2>
                        </div>
                        <div className="flex justify-between items-center ">
                            <h2 className="text-sm text-gray-500">Number of Nights</h2>
                            <h2 className="text-sm text-black/95">3 night(s)</h2>
                        </div>
                        <div className="flex justify-between items-center ">
                            <h2 className="text-sm text-gray-500">Taxes & fees</h2>
                            <h2 className="text-sm text-black/95">$50</h2>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <h2 className="text-md text-black/95">Total</h2>
                        <h2 className="text-sm text-black/95">$800</h2>

                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}