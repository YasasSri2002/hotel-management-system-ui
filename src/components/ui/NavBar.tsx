"use client";

import Link from "next/link";
import DynamicIcon from "../utill/DynamicIcons";



export default function NavBarComponent(){
    
    function sideMenue(){
        const mobileMenue = document.getElementById("mobileMenue");
        mobileMenue?.classList.toggle("hidden")

    }


    return(
        <>
        <div className="dark">
            <div className="flex justify-between h-25 items-center px-4">
                <div>
                    <img src="logo.png" className="object-fit w-20 h-20 " alt="" />
                </div>
                <ul className="sm:flex space-x-5 mr-3 items-center hidden ">
                    <li><Link href="home">Home</Link></li>
                    <li><Link href="home">About</Link></li>
                    <li><Link href="home">Contact us</Link></li>
                    
                </ul>
                <button onClick={sideMenue} className="xl:hidden">
                <DynamicIcon name="CiMenuBurger" />
              </button>
            </div>
            <div id="mobileMenue" className="hidden sm:hidden">
            <div className="fixed bg-[var(--background)]/35 z-40 h-dvh w-1/2 ">
                <div>
                    <button id="mobileMenueControllers" 
                    onClick={sideMenue} 
                    className="relative left-40 bg-[var-(--background)] top-5">
                        <DynamicIcon name="IoCloseSharp"/>
                    </button>
                </div>
                <ul className="grid space-x-5 mt-10 mr-3 items-center justify-items-center gap-10">
                    <li><Link href="home">Home</Link></li>
                    <li><Link href="home">About</Link></li>
                    <li><Link href="home">Contact us</Link></li>
                </ul>
            </div>
            </div>
        </div>
        </>
    );
}