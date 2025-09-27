
import Image from "next/image";
import HeroSection from "@/components/ui/hero-section/hero";
import NavBar from "../components/ui/nav-bar/navbar";
import AboutSection from "@/components/ui/about-section/about";
import RoomSection from "@/components/ui/rooms-section/rooms";
import DropdownMenu from "@/components/ui/hero-section/dropdown";
import AmenitiesSection from "@/components/ui/amenties-section/amenties";



export default function Home() {
  return (
    <>
   <div className="z-50">
     <NavBar/>
   </div>
     <HeroSection/>
     <AboutSection/>
     <RoomSection/>
     <AmenitiesSection/>
    </>
  );
}
