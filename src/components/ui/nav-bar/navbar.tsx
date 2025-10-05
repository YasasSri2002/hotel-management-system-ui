"use client";

import { useState } from "react";
import Link from "next/link";
import DynamicIcon from "../../utill/DynamicIcons";

export default function NavBarComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("Menu toggled:", !isMenuOpen);
    };

    return (
        <div className="relative z-50"> 
            <div className="flex justify-between h-24 items-center px-4">
                <div>
                    <img src="logo.png" className="object-fit w-20 h-20" alt="Logo" />
                </div>
                <ul className="sm:flex space-x-5 mr-3 items-center hidden">
                    <li><Link href="/home">Home</Link></li>
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#rooms-section">Rooms</Link></li>
                    <li><Link href="#amenities">Amenities</Link></li>
                    <li><Link href="#contactUs">Contact us</Link></li>
                </ul>
                <button 
                    onClick={toggleMenu} 
                    className="md:hidden focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <DynamicIcon name="CiMenuBurger" className="text-2xl" />
                </button>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 bg-black">
                    <div className="flex justify-end p-4">
                        <button 
                            onClick={toggleMenu} 
                            className="text-white focus:outline-none"
                            aria-label="Close menu"
                        >
                            <DynamicIcon name="IoCloseSharp" className="text-2xl" />
                        </button>
                    </div>
                    <ul className="grid gap-8 mt-16 text-center text-white">
                        <li><Link href="/home" onClick={toggleMenu}>Home</Link></li>
                        <li><Link href="#about" onClick={toggleMenu}>About</Link></li>
                        <li><Link href="#rooms-section" onClick={toggleMenu}>Rooms</Link></li>
                        <li><Link href="#amenities" onClick={toggleMenu}>Amenities</Link></li>
                        <li><Link href="#contactUs" onClick={toggleMenu}>Contact us</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
}