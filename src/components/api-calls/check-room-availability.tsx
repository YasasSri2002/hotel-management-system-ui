import axios from "axios";

export async function CheckRoomAvailability(id:number,startDate:string, endDate:string){
    try{
            const response = await axios.get(
                'http://localhost:8080/api/v1/booking/check-availability',
                {params:
                    {roomId: id,startDate:startDate,endDate:endDate}
                }
            )
        return response.data
    }catch(e: any){
        if(e.response){
            return e.response.data
        }
        throw e;
    }
}