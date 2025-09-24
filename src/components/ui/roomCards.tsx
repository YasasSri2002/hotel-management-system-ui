export default function RoomCards(){
    return(
        <>
            <div>
                <div className="w-100 h-70 bg-[url(/normalRoom.jpg)] bg-center bg-size-[100%_100%] bg-no-repeat rounded-2xl transition-all duration-500 ease-in-out hover:bg-size-[120%_120%]">
                    <div className="bg-white rounded-2xl w-fit p-2 relative top-2 -right-80">
                        <h6 className="text-xs">$199/day</h6>
                    </div>
                </div>
            </div>
        </>
    );    
}