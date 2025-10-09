
export default function RoomCard(){

    return(
        <div className="w-full h-60 grid gap-10 sm:gap-0 sm:grid sm:grid-cols-2 sm:justify-between ">
            <div className="grid justify-items-center sm:justify-items-normal border-2 border-red-400 p-5">
                <img src="/normalRoom.jpg"
                alt="room pic"
                className="rounded-2xl w-full h-full max-h-50 object-cover"/>
            </div>
            <div className="p-5 border-2 border-purple-600">
                <div className="flex justify-between">
                    <div className="flex space-x-5">
                        <h1>No: ?</h1>
                        <h1>Executive Room</h1>
                    </div>
                <div className="flex space-x-5">
                    <h2>size: ?</h2>
                    <h2> Guests: ?</h2>
                </div>
                </div>
                
            </div>
        </div>
    )

}