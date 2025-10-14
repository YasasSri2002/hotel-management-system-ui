import DropdownMenu from '@/components/ui/dropdown';
export default function RoomsDetailsForm(){
    return(
        <div className="grid p-5 gap-3 ">
            <div className="grid gap-1 ">
                <h1 className="text-md sm:text-lg md:text-xl">Rooms & Dates</h1>
                <h2 className="text-gray-400 text-sm sm:text-md md:text-lg">select your room type and travel dates</h2>
            </div>

            <div>
                <div className="grid gap-2">
                    <h1>Room Type</h1>
                   <DropdownMenu name="Room Type" smallSize={false} items={["delux room"]}/>
                </div>
                <div className="grid sm:grid-cols-2 gap-2 mt-3">
                    <div className="sm:col-1 gap-2 grid">
                        <h1>Check In Date</h1>
                        <input type="date" name="checkInDate"  className="border-1 rounded-lg px-5 w-full h-10 bg-gray-300/40 " />
                    </div>
                    <div className="sm:col-2 gap-2 grid">
                        <h1>Check Out Date</h1>
                        <input type="date" name="checkOutDate" className="border-1 rounded-lg px-5 w-full h-10 bg-gray-300/40 " />
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-2 mt-3">
                    <div className="sm:col-1 gap-2 grid">
                        <h1>Adults</h1>
                        <DropdownMenu name='adult' items={["1","2","3"]} smallSize={false} />
                    </div>
                    <div className="sm:col-2 gap-2 grid">
                        <h1>Children</h1>
                        <DropdownMenu name='children' items={["0","1","2","3"]} smallSize={false} />
                    </div>
                </div>
                <div className='grid gap-2 mt-3'>
                    <h1>Special requires(Optional)</h1>
                    <textarea name="specialReq" rows={5}  className='bg-gray-300/40 w-full rounded-xl size-auto resize-none p-5' placeholder="Any special requirement or requirements"></textarea>
                </div>  
            </div>

        </div>
    )
}