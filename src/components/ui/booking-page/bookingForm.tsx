import Link from "next/link";

import DynamicIcon from "../../utill/DynamicIcons";

export default function BookingForm(){
    return(
        <div className="grid">

            <div id="header">
                <div className="flex justify-between items-center px-10 w-full border-gray-400/60 border-b-1 h-10 sm:h-20 ">
                    <button className="my-5">
                        <Link href={"/"} className="flex justify-center items-center">
                            <DynamicIcon name="MdOutlineKeyboardArrowLeft" className="text-xl sm:text-2xl" />back to home
                        </Link>
                    </button>
                    
                    <h1 className="text-center text-md sm:text-lg md:text-2xl">Urbanite</h1>
                    
                </div>
            </div>

            <div className="flex space-x-5">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" />
            </div>
        </div>
    );
}