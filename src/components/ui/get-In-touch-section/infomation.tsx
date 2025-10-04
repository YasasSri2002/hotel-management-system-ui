import DynamicIcon from "@/components/utill/DynamicIcons"

export default function Information(){

    const details = [
        {
            id: 1,
            iconName: "PiMapPinThin",
            heading: "Address",
            detail1: "123 Luxury Avenue Downtown District",
            detail2: "New York, NY 10001"
        },
        {
            id: 2,
            iconName: "CiPhone",
            heading: "Contact",
            detail1: "(+94)70-550-500",
            detail2: "(+94)70-550-501"
        },
        {
             id: 3,
            iconName: "CiMail",
            heading: "Email",
            detail1: "info@urbanite.com",
            detail2: "reservation@urbanite.com"
        },
        {
             id: 4,
            iconName: "CiClock1",
            heading: "Hours",
            detail1: "24/7 Reception & Concierge",
            detail2: "Restaurant: 6:00 AM - 11:00 PM"
        }        
    ]

    return(
        <div className="gap-5">
            <h1 className="text-black/80 text-xl sm:text-2xl">Contact Infomation</h1>
            <div className="grid gap-4 w-full mt-10">
                {
                    details.map((detail)=>(
                        <div key={detail.id} className="flex space-x-5">
                           <div className="flex items-center">
                             <div className="bg-gray-400/50 flex justify-center items-center text-2xl rounded-xl px-5 basis-1 h-3/4 ">
                                <DynamicIcon name={detail.iconName}/>
                            </div>
                           </div>
                            <div className="text-wrap grid gap-1">
                                <h2 className="text-md sm:text-lg text-black/80"> {detail.heading}</h2>
                                <p className="text-md sm:text-lg text-gray-400 text-wrap">{detail.detail1}</p>
                                <p className="text-md sm:text-lg text-gray-400">{detail.detail2}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}