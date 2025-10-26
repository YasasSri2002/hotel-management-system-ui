'use client';
import { useEffect,useState } from 'react';
import { getRoomByIdApi } from '@/components/api-calls/get-room-api';
import DropdownMenu from '@/components/ui/dropdown';
import { RoomModel } from '@/components/models/roomModel';
import {FormDataModel} from '@/components/models/roomFormDetails';



export default function RoomsDetailsForm({roomId ,onChangeFrom}:
    { 
    readonly roomId:number , 
    readonly onChangeFrom?: (value:FormDataModel| undefined)=>void
}){

    const[room,setRoom] = useState<RoomModel>();
    const [checkInDateCheck, setCheckInDateCheck] = useState(false);
    const [checkOutDateCheck, setCheckOutDateCheck] = useState(false);

    const[formData,setFormData] =useState<FormDataModel>({
        roomType: "",
        checkInDate: "",
        checkOutDate: "",
        guests: 0,
        specialMsg: "",
        roomPrice: 0
    });

    

    useEffect(()=>{
        async function loadRoom(){
            const roomData = await getRoomByIdApi(roomId);
            setRoom(roomData.data)
        }
        loadRoom() 
    },[roomId])

    useEffect(() => {
        if (room) {
            setFormData(prev => ({ ...prev, roomPrice: room.price }));
        }
    }, [room]);
    
     useEffect(()=>{
        if(onChangeFrom) onChangeFrom(formData);
    },[formData])
   
    if(!room) return(<p>Loading....</p>)

    const guestSizeList = Array.from(
        {length: room.maxGuestSize-room.minGuestSize+1},(_,i)=> String(room.minGuestSize+i))

    function handleRoomTypeChange(roomType: string){
        setFormData(prev=>({...prev,roomType:roomType}));
           
    }

    function handleCheckInDateChanges(event: React.ChangeEvent<HTMLInputElement>){
        const today = new Date();
        const [year, month, day] = event.target.value.split("-").map(Number);
    
        // Force it to be treated as UTC midnight (not local midnight)
        const selectedCheckInDateUTC = new Date(Date.UTC(year, month - 1, day));

        // Compare using local midnight
        const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());

        if (selectedCheckInDateUTC >= todayMidnight) {
        // Store ISO string that represents *the same date* in UTC
        setFormData(prev => ({
            ...prev,
            checkInDate: selectedCheckInDateUTC.toISOString()
        }));

        if (checkInDateCheck) setCheckInDateCheck(false);
        } else {
        setCheckInDateCheck(true);
        }
    }

    function handleCheckOutDateChanges(event: React.ChangeEvent<HTMLInputElement>){
        const today = new Date();
        const [year,month,day]= event.target.value.split("-").map(Number);
        const selectedCheckOutDate= new Date(year,month-1,day);
        const selectedCheckOutDateUTC= new Date(Date.UTC(year,month-1,day));
        const todayMidnight= new Date(today.getFullYear(),today.getMonth(),today.getDate());
        if(selectedCheckOutDate> todayMidnight){
        setFormData(prev=>({...prev,checkOutDate:selectedCheckOutDateUTC.toISOString()}));
            if(checkOutDateCheck){
                setCheckOutDateCheck(false);
            }
        }else{
            setCheckOutDateCheck(true);
        }
        
    }

    function handleGuestNumber(value:string){
        setFormData(prev=>({...prev,guests: Number(value)}));
       
    }

    function hanldleSpecialMsg(event:React.ChangeEvent<HTMLTextAreaElement>){
        setFormData(prev=>({...prev,specialMsg:event.target.value}));
        
    }

   
    

    return(
        <div className="grid p-5 gap-3 ">
            <div className="grid gap-1 ">
                <h1 className="text-md sm:text-lg md:text-xl">Rooms & Dates</h1>
                <h2 className="text-gray-400 text-sm sm:text-md md:text-lg">select your room type and travel dates</h2>
            </div>

            <div>
                <div className="grid gap-2">
                    <h1>Room Type</h1>
                   <DropdownMenu name={"select the room"} smallSize={false} items={[`${room?.type } - ${room?.price}`]} onSelect={(value)=>handleRoomTypeChange(value)}/>
                </div>
                <div className="grid sm:grid-cols-2 gap-2 mt-3">
                    <div className="sm:col-1 gap-2 grid">
                        <h1>Check In Date</h1>
                        <input type="date" name="checkInDate"  className="border-1 rounded-lg px-5 w-full h-10 bg-gray-300/40 " onChange={handleCheckInDateChanges} />
                        <span className={`ml-2 min-h-[1.25rem] block 
                                        ${checkInDateCheck ? "text-red-400" : "text-transparent"}`}>
                            Please select valid date
                        </span>

                    </div>
                    <div className="sm:col-2 gap-2 grid">
                        <h1>Check Out Date</h1>
                        <input type="date" name="checkOutDate" className="border-1 rounded-lg px-5 w-full h-10 bg-gray-300/40 " onChange={handleCheckOutDateChanges} />
                         <span className={`ml-2 min-h-[1.25rem] block 
                                        ${checkOutDateCheck ? "text-red-400" : "text-transparent"}`}>
                            Please select valid date
                        </span>
                    </div>
                </div>
                <div className="grid gap-2 mt-3">
                    <div className="gap-2 grid">
                        <h1>Guest(s)</h1>
                        <DropdownMenu name='guest' items={guestSizeList} smallSize={false} onSelect={(value)=>handleGuestNumber(value)} />
                    </div>
                </div>
                <div className='grid gap-2 mt-3'>
                    <h1>Special requires(Optional)</h1>
                    <textarea name="specialReq" rows={5}  className='bg-gray-300/40 w-full rounded-xl size-auto resize-none p-5' placeholder="Any special requirement or requirements"
                    onChange={(event)=>hanldleSpecialMsg(event)}
                    ></textarea>
                </div>  
            </div>

        </div>
    )
}