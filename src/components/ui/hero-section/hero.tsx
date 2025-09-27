'use client'

import DynamicIcon from "../../utill/DynamicIcons"
import DropdownMenu from "./dropdown"

export default function HeroSection(){
    return(
        <div className="w-full h-dvh relative z-0">
            <div className="bg-[url(/hero.jpg)] bg-size-[100%_100%] bg-center sm:bg-fixed bg-no-repeat w-dvw sm:w-full h-dvh">
                <div className="bg-black/60 w-full h-full absolute inset-0 z-10"></div>
                <div className="w-full h-full grid content-center justify-items-center text-white/80 absolute top-0 z-20">
                    <div className="grid gap-5  lg:mt-0 relative z-30">
                        <h1 className="text-2xl sm:text-6xl text-center">Welcome to Urbanite Hotel</h1>
                        <p className="text-center text-lg sm:text-xl">Experience luxury and comfort in the heart of the city</p>

                        <div className="bg-white grid justify-items-center gap-5 sm:flex sm:justify-center sm:items-center space-x-5 p-5 rounded-2xl mx-10 lg:mx-0 flex-wrap">
                            <div className="grid">
                                <label htmlFor="checkInDate" className="text-black/80"> Check in date</label>
                                <input type="date" name="checkInDate" className="w-50 h-10 rounded-2xl p-5 bg-gray-500/80"/>
                            </div>
                            <div className="grid">
                                <label htmlFor="checkOutnDate" className="text-black/80"> Check out date</label>
                                <input type="date" name="checkOutDate" className="w-50 h-10 rounded-2xl p-5 bg-gray-500/80"/>
                            </div>
                            <div className="grid">
                                <label htmlFor="guests" className="text-black/80"> Guests</label>
                                <DropdownMenu/>
                            </div>
                            
                            <button className="bg-white/80 border-1 text-black/60 rounded-2xl p-2 mt-5 shadow-xl hover:-translate-y-1 w-40">
                                Search Rooms
                            </button>
                        </div>
                        <div className="flex space-x-4 justify-center">
                            <button><DynamicIcon name="MdPinDrop"/></button>
                            <h2>123 Luxury Avenue, Downtown District</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}