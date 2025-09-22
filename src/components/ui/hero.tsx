'use client'
import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import DynamicIcon from "../utill/DynamicIcons"

export default function HeroSection(){
    return(
        <div className="w-full h-dvh ">
            <div className="bg-[url(/hero.jpg)] bg-size-[100%_100%] bg-center sm:bg-fixed bg-no-repeat w-dvw sm:w-full h-dvh">
            <div className="bg-black/60 w-full h-full z-10"></div>
            <div className="w-full h-full grid items-center justify-items-center text-white/80 absolute top-0 ">
            <div className="grid gap-5">
                <h1 className="text-6xl text-center">Welcome to Urbanite Hotel</h1>
                <p className="text-center text-xl">Experience luxury and comfort in the heart of the city</p>

                <div className="bg-white flex justify-center items-center space-x-5 h-30 p-5 rounded-2xl">
                    <div className="grid">
                        <label htmlFor="checkInDate"className="text-black/80"> Check in date</label>
                        <input type="date" name="checkInDate" className="w-50 h-10 rounded-2xl p-5 bg-gray-500/80"/>
                    </div>
                    <div className="grid">
                        <label htmlFor="checkOutnDate"className="text-black/80"> Check out date</label>
                    <input type="date" name="checkOutDate" className="w-50 h-10 rounded-2xl p-5 bg-gray-500/80"/>
                    </div>
                     <div className="grid">
                        <label htmlFor="guests"className="text-black/80"> Check out date</label>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Guest" />
                            </SelectTrigger>
                            <SelectContent  className="rounded-2xl" position="popper" avoidCollisions={false}>
                                <SelectGroup>
                                <SelectLabel>Guests</SelectLabel>
                                <SelectItem value="1 guest">1 guest</SelectItem>
                                <SelectItem value="2 guest">2 guests</SelectItem>
                                <SelectItem value="3 guest">3 guests</SelectItem>
                                <SelectItem value="4 guest">4 guests</SelectItem>
                                <SelectItem value="5+ guest">5+ guest</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    
                    <button className="bg-white/80 border-1 text-black/60 rounded-2xl p-2 mt-5 shadow-xl
                    hover:-translate-y-1 w-40">
                        Search Rooms</button>
                   
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